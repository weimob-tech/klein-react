import { Compiler } from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import { KrakenKitConfig } from '../config';

export default function createKrakenServer(
  compiler: Compiler,
  config: KrakenKitConfig,
) {
  let server: WebpackDevServer;
  const { devServer, output } = config;

  const defaultSeverConfig = {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
    },
    static: output,
    ...devServer,
  };

  server = new WebpackDevServer(
    { historyApiFallback: true, ...defaultSeverConfig },
    compiler,
  );

  return server;
}
