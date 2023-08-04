import { Configuration } from 'webpack';
import { KrakenKitConfig } from './config';
export declare function start(webpackConfig: Configuration, config: KrakenKitConfig): Promise<void>;
export declare function build(webpackConfig: Configuration): Promise<unknown>;
export declare function init(type: string, inlineConfig: any): Promise<void>;
