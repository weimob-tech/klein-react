import fs from 'fs';
import path from 'path';
import Config from 'webpack-chain';
import { Configuration as DevServerConfig } from 'webpack-dev-server';
import { Options as htmlWebpackPluginOptions } from 'html-webpack-plugin';
import { getProjectPath } from './utils';
import pathConfig from './path';

// 这里暂时不继承webpack的属性定义，为之后接入vite做准备
export interface CdnUploadOutputConfig {
  filename: string;
  chunkFilename: string;
  fontPath: string;
  filePath: string;
  picPath: string;
  cssFilename: string;
  cssChunkFilename: string;
  publicPath?: string;
}

export interface KrakenKitUserConfig {
  entry?: string;
  // 指定输出路径（相对于 项目根目录)
  output?: string;
  // 当前端口号
  port?: number;
  // 是否输出html文件
  html?: boolean | htmlWebpackPluginOptions;
  // 是否以微前端的方式启动本地服务
  kraken?: boolean;
  noconsole?: boolean;
  libraryTarget?: string;
  // 是否压缩代码
  compress?: boolean;
  // 是否开启antd的babel-import-plugin，有些项目直接引入antd.min.css，不需要该插件
  antdBabelImport?: boolean;
  kleinBabelImport?: boolean;
  babelInclude?: (includes: string[]) => string[];
  // 配合cdn-upload
  svgr?: boolean;
  // 配合cdn-upload
  pub?: boolean;
  // 是否将数据同步至波塞冬
  pubSyncPsd?: boolean;
  // wdp发布逻辑
  wdp?: boolean;
  // 打包时不去除console.log
  devMode?: boolean;
  // 开启微前端样式隔离
  cssScope?: boolean | string;
  // 打包速度分析
  speedMeasure?: boolean;
  // 打包体积大小分析
  analyzer?: boolean;
  // chunk文件最大数量
  maxChunks?: number;
  // 当文件大小大于minChunkSize时单独抽成chunk
  minChunkSize?: number;
  // 当图片大于dataUrlMaxSize时候以url形式加载，默认为10kb
  dataUrlMaxSize?: number;
  // 自定义配置
  chainWebpack?: (chainWebpackConfig: Config) => void;
  // // 是否关闭cdn-upload自动打git标签功能
  // disableGitTag?: boolean;
  // 是否抽离css样式
  cssExtract?: boolean;
  // 是否开启cssModule
  cssModule?: boolean;
  devServer?: DevServerConfig;
  [key: string]: any;
}

export interface KrakenKitConfig
  extends CdnUploadOutputConfig,
    KrakenKitUserConfig {
  pkg: any;
}

export function defineConfig(config: KrakenKitUserConfig) {
  return config;
}

/**
 * @param config
 * @returns KrakenKitConfig
 * 合并自定义及内部配置
 */
export async function resolveConfig(
  inlineConfig: KrakenKitUserConfig,
  isDev: boolean,
) {
  let userConfig = {} as KrakenKitUserConfig;

  // .js文件，以cjs形式导出
  const userConfigJs = path.resolve(getProjectPath('kit.config.js'));
  if (fs.existsSync(userConfigJs)) {
    userConfig = require(path.resolve(getProjectPath('kit.config.js')));
  }
  // to do
  // defineConfig的形式
  // 这里还需要对加载进来的配置文件做转换
  const userConfigTs = path.resolve(getProjectPath('kit.config.ts'));
  if (fs.existsSync(userConfigTs)) {
    userConfig = await import(path.resolve(getProjectPath('kit.config.ts')));
  }

  Object.entries(inlineConfig).forEach(([key, value]) => {
    if (value === 'true') {
      inlineConfig[key] = true;
    } else if (value === 'false') {
      inlineConfig[key] = false;
    }
  });

  const endConfig = {
    ...inlineConfig,
    ...(userConfig || {}),
  };

  let { port } = endConfig;
  const pkg = require(getProjectPath('package.json'));


  let mergedConfig: KrakenKitConfig = {
    devServer: {
      open: true,
      hot: true,
      port: port || 3000,
      ...(userConfig.devServer || {}),
      // ...inlineConfig.server
    },
    pkg,
    entry: pathConfig.index,
    // output: pathConfig.build,
    libraryTarget: 'amd',
    // cssScope: inlineConfig.server?.cssScope,
    // cssExtract: inlineConfig.server?.cssExtract,
    // babelInclude: userConfig.build?.babelInclude,
    // ...inlineConfig.build,
    ...endConfig,

    // 生成产物的路径，配合cdn上传工具
    filename: '[name].js',
    chunkFilename: '[name].[chunkhash:8].js',
    fontPath: 'assets/fonts/[name].[ext]',
    filePath: 'static/file/[name].[contenthash:8].[ext]',
    picPath: 'static/images/[name].[contenthash:8].[ext]',
    cssFilename: '[name].css',
    cssChunkFilename: '[name].[chunkhash:8].css',
  };

  // mergedConfig.publicPath = pub ? cdnEnv.publicPath : '/';
  mergedConfig.publicPath =
      mergedConfig.kraken
      ? `http://localhost:${mergedConfig.devServer?.port}/`
      : '/';

  return mergedConfig;
}
