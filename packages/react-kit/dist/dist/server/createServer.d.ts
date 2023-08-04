import { Compiler } from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import { KrakenKitConfig } from '../config';
export default function createKrakenServer(compiler: Compiler, config: KrakenKitConfig): WebpackDevServer;
