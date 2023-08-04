import path from 'path';
import webpack from 'webpack';
import Config from 'webpack-chain';
import WebpackBar from 'webpackbar';
import threadLoader from 'thread-loader';
// import PurgeCSSPlugin from 'purgecss-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { resolve } from '../utils';

import pathConfig from '../path';
import getBabelConfig from './getBabelConfig';
import { KrakenKitConfig } from '../config';
import getWebpackCssConfig from '../config/getWebpackCssConfig';

const __RE__ = ['.js', '.jsx', '.ts', '.tsx', '.json'];

const __NPREG__ = /node_modules\/moment\/moment.js/;

threadLoader.warmup(
  {
    // pool options, like passed to loader options
    // must match loader options to boot the correct pool
  },
  [
    resolve('babel-loader'),
    // resolve('css-loader'), resolve('less-loader'), resolve('@kraken-kit/css-scope-loader')
  ],
);

export default function getWebPackBaseConfig(
  config: KrakenKitConfig,
  isDev: boolean,
) {
  const webpackConfig = new Config();

  const projectPkg = config.pkg;

  function getLessLocalIdent(
    context: any,
    localIdentName: string,
    localName: string,
    options: any,
  ) {
    if (localName == projectPkg.name || localName === config.cssScope) {
      return localName;
    }
    const match = context.resourcePath.match(/src(.*)/);

    if (match && match[1]) {
      const proPath = match[1].replace(/\.(less)?/g, '');
      const arr = require('slash2')(proPath)
        .split('/')
        .map((a: string) => a.replace(/([A-Z])/g, '-$1'))
        .map((a: string) => a.toLowerCase());
      return `weimob-${arr.join('-')}-${localName}`.replace(/--/g, '-');
    }
  }

  function getBabelIncludes() {
    const includes = [
      pathConfig.appSrc,
      pathConfig.antdSrc,
      pathConfig.kleinSrc,
      pathConfig.portalSrc,
      pathConfig.notifiySrc,
    ];

    return config.babelInclude ? config.babelInclude(includes) : includes;
  }

  webpackConfig
    .entry('index')
    .add(config.entry!)
    .end()
    .output.path(config.output!)
    .filename(config.filename)
    .chunkFilename(config.chunkFilename)
    // .libraryTarget(config.libraryTarget)
    // .library(projectPkg.name)
    .publicPath(config.publicPath!);

  if (config.kraken) {
    webpackConfig.output.merge({
      library: {
        name: projectPkg.name,
        type: config.libraryTarget,
      },
    });
  }

  // webpackConfig
  //   caches(true)

  webpackConfig.resolveLoader.modules
    .add('node_modules')
    // 注意：最终打包出来是dist/cli文件，这里是相对于cli的路径
    .add(path.resolve(__dirname, '../node_modules'));

  webpackConfig.resolve.alias.set('@', pathConfig.appSrc).end();

  webpackConfig.resolve.modules
    .add('node_modules')
    // 注意：最终打包出来是dist/cli文件，这里是相对于cli的路径
    .add(path.join(__dirname, '../node_modules'));

  __RE__.forEach((r) => {
    webpackConfig.resolve.extensions.add(r);
  });

  const wModule = webpackConfig.module;

  // wModule.noParse(__NPREG__);

  // loaders
  wModule
    .rule('compileJs')
    .test(/\.(js|jsx|mjs|ts|tsx)$/)
    .include.add(getBabelIncludes())
    .end()
    .use('babel')
    .loader(resolve('thread-loader'))
    .loader(resolve('babel-loader'))
    .options(
      getBabelConfig(
        projectPkg.name,
        isDev,
        config.cssScope,
        config.antdBabelImport,
        config.kleinBabelImport,
      ),
    );

  // handle css
  wModule
    .rule('compileCss')
    .test(/\.css$/)
    .merge({
      sideEffects: true,
      use: getWebpackCssConfig(projectPkg, config)({ importLoaders: 1 }),
    });

  // handle less
  wModule
    .rule('compileLess')
    .test(/\.less$/)
    .merge({
      sideEffects: true,
      use: getWebpackCssConfig(projectPkg, config)(
        {
          modules: {
            mode: 'local',
            getLocalIdent: getLessLocalIdent,
          },
        },
        'less',
      ),
    })
    .exclude.add(/\.nomodule\.less$/)
    .add(/node_modules/);

  // handle node_module less
  wModule
    .rule('compileNodeModuleLess')
    .test(/\.less$/)
    .merge({
      sideEffects: true,
      use: getWebpackCssConfig(projectPkg, config)(
        {
          importLoaders: 2,
        },
        'less',
      ),
    })
    .include.add(/node_modules/);

  // 不使用css module
  wModule
    .rule('compileNoCssModuleLess')
    .test(/\.nomodule\.less$/)
    .merge({
      sideEffects: true,
      use: getWebpackCssConfig(projectPkg, config)(
        {
          importLoaders: 2,
        },
        'less',
      ),
    })
    .exclude.add(/node_modules/);

  // if (config.svgr) {
  //   // 支持svg以react-component的形式使用
  //   wModule
  //     .rule('svgAssets')
  //     .test(/\.svg(\?v=\d+\.\d+\.\d+)?$/)
  //     .merge({
  //       dependency: { not: ['url'] }, // exclude new URL calls
  //     })
  //     .use('svg')
  //     .loader('@svgr/webpack')
  //     .options({
  //       prettier: false,
  //       svgo: false,
  //       svgoConfig: {
  //         plugins: [{ removeViewBox: false }],
  //       },
  //       titleProp: true,
  //       ref: true,
  //     })
  //     .end()
  //     .use('svgFile')
  //     .loader('new-url-loader')
  //     .end();
  // } else {
  //   wModule
  //     .rule('svgAssets')
  //     .test(/\.svg(\?v=\d+\.\d+\.\d+)?$/)
  //     .type('asset' as 'javascript/auto')
  //     .parser({
  //       dataUrlCondition: {
  //         maxSize: 10 * 1024, // 10kb
  //       },
  //     })
  //     .merge({
  //       generator: {
  //         filename: config.fontPath,
  //       },
  //     })
  //     .end();
  // }

  // if (config.svgr) {
  // 支持svg以react-component的形式使用
  wModule
    .rule('svgAssets')
    .test(/\.svg(\?v=\d+\.\d+\.\d+)?$/)
    .oneOf('component')
    .merge({
      dependency: { not: ['url'] }, // exclude new URL calls
    })
    .use('svg')
    .loader('@svgr/webpack')
    .options({
      prettier: false,
      svgo: false,
      svgoConfig: {
        plugins: [{ removeViewBox: false }],
      },
      titleProp: true,
      ref: true,
    })
    .end()
    .use('svgFile')
    .loader('new-url-loader')
    .end()
    .end()
    .oneOf('svgUrl')
    .type('asset' as 'javascript/auto')
    .parser({
      dataUrlCondition: {
        maxSize: 10 * 1024, // 10kb
      },
    })
    .merge({
      generator: {
        filename: config.fontPath,
      },
    })
    .end()
    .end();

  // wModule
  //   .rule('json')
  //   .test(/\.json$/)
  //   .type('asset/' as 'javascript/auto')
  //   .merge({
  //     generator: {
  //       filename: config.fontPath,
  //     },
  //   });

  wModule
    .rule('picAssets')
    .test(/\.(png|jpg|jpeg|gif)(\?v=\d+\.\d+\.\d+)?$/i)
    .type('asset' as 'javascript/auto')
    .parser({
      dataUrlCondition: {
        maxSize:
          typeof config.dataUrlMaxSize !== undefined
            ? config.dataUrlMaxSize
            : 10 * 1024, // 10kb
      },
    })
    .merge({
      generator: {
        filename: config.picPath,
      },
    });

  wModule
    .rule('fontFaceAssets')
    .test(/\.(ttf|eot|woff|woff2)$/)
    .type('asset' as 'javascript/auto')
    .merge({
      generator: {
        filename: config.fontPath,
      },
    });

  wModule
    .rule('normalAssets')
    .test(/\.(txt)$/)
    .type('asset' as 'javascript/auto')
    .merge({
      generator: {
        filename: config.filePath,
      },
    });

  // plugins
  webpackConfig
    .plugin('webpackBar')
    .use(WebpackBar, [
      {
        name: '🚚 微盟react微前端打包工具打包中...',
        color: '#2f54eb',
      },
    ])
    .end()
    .plugin('definePlugin')
    .use(webpack.DefinePlugin, [
      {
        VERSION: JSON.stringify(projectPkg.version),
        PACKAGE_NAME: JSON.stringify(projectPkg.name),
        PACKAGE_SYS_CONFIG: JSON.stringify(projectPkg.sysConfig),
      },
    ])
    .end()
    .plugin('contextReplacementPlugin')
    .use(webpack.ContextReplacementPlugin, [
      /moment[\\\/]locale$/,
      /^\.\/(zh-cn)$/,
    ])
    .end();

  if (typeof config.maxChunks !== 'undefined') {
    webpackConfig
      .plugin('limitChunkCountPlugin')
      .use(webpack.optimize.LimitChunkCountPlugin, [
        {
          maxChunks: config.maxChunks,
        },
      ]);
  }

  webpackConfig
    .plugin('minChunkSizePlugin')
    .use(webpack.optimize.MinChunkSizePlugin, [
      {
        minChunkSize:
          typeof config.minChunkSize !== 'undefined'
            ? config.minChunkSize
            : 300,
      },
    ]);

  if (config.html) {
    webpackConfig
      .plugin('htmlPugin')
      .use(HtmlWebpackPlugin, [
        typeof config.html === 'boolean'
          ? {
              inject: true,
              template: pathConfig.appHtml,
            }
          : config.html,
      ])
      .end();
  }

  if (config.cssExtract) {
    webpackConfig
      .plugin('cssExtract')
      .use(MiniCssExtractPlugin, [
        {
          filename: config.cssFilename,
          chunkFilename: config.cssChunkFilename,
          ignoreOrder: true,
          attributes: {
            'spa-app': projectPkg.name,
          },
        },
      ])
      .end();
    // .plugin('pureCss')
    // .use(PurgeCSSPlugin)
  }

  return webpackConfig;
}
