import Config from 'webpack-chain';
import { Configuration as DevServerConfig } from 'webpack-dev-server';
import { Options as htmlWebpackPluginOptions } from 'html-webpack-plugin';
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
    output?: string;
    port?: number;
    html?: boolean | htmlWebpackPluginOptions;
    kraken?: boolean;
    noconsole?: boolean;
    libraryTarget?: string;
    compress?: boolean;
    antdBabelImport?: boolean;
    kleinBabelImport?: boolean;
    babelInclude?: (includes: string[]) => string[];
    svgr?: boolean;
    pub?: boolean;
    pubSyncPsd?: boolean;
    wdp?: boolean;
    devMode?: boolean;
    cssScope?: boolean | string;
    speedMeasure?: boolean;
    analyzer?: boolean;
    maxChunks?: number;
    minChunkSize?: number;
    dataUrlMaxSize?: number;
    chainWebpack?: (chainWebpackConfig: Config) => void;
    cssExtract?: boolean;
    cssModule?: boolean;
    devServer?: DevServerConfig;
    [key: string]: any;
}
export interface KrakenKitConfig extends CdnUploadOutputConfig, KrakenKitUserConfig {
    pkg: any;
}
export declare function defineConfig(config: KrakenKitUserConfig): KrakenKitUserConfig;
/**
 * @param config
 * @returns KrakenKitConfig
 * 合并自定义及内部配置
 */
export declare function resolveConfig(inlineConfig: KrakenKitUserConfig, isDev: boolean): Promise<KrakenKitConfig>;
