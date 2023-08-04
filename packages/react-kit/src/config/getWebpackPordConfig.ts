import webpack from 'webpack';
import Config from 'webpack-chain';
import TerserPlugin from 'terser-webpack-plugin';
import WebpackBundleAnalyzer from 'webpack-bundle-analyzer';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';

import { KrakenKitConfig } from '../config';

// import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';

export default function getWebpackProdConfig(
  webpackProdConfig: Config,
  config: KrakenKitConfig,
) {
  webpackProdConfig.mode(config.compress ? 'production' : 'development');

  webpackProdConfig
    .plugin('limitChunkCountPlugin')
    .use(webpack.optimize.LimitChunkCountPlugin, [
      {
        maxChunks: 5,
        // minChunkSize: 300
      },
    ])
    .end();
  // .plugin('weimobWebpackCdn')
  // .use(WeimobWebpackCdn, [
  //   {
  //     disableGitTag: config.disableGitTag,
  //   },
  // ]);

  const terserOptions = {
    parallel: true,
    // cache: path.join(__dirname, 'webpack-cache/uglify-cache'),
    // sourceMap: true,
    terserOptions: {
      warnings: false,
      compress: {
        drop_console: config.noconsole,
        collapse_vars: true,
        reduce_vars: true,
        unused: false,
      },
      output: {
        beautify: false,
        comments: false,
      },
    },
  };

  if (config.compress) {
    webpackProdConfig.optimization
      .minimizer('js')
      .use(TerserPlugin)
      .init((TPlugin) => new TPlugin(terserOptions));
  }

  if (config.analyzer) {
    webpackProdConfig
      .plugin('webpackBundleAnalyzer')
      .use(WebpackBundleAnalyzer);
  }

  if (config.cssExtract) {
    webpackProdConfig.optimization.minimizer('css').use(CssMinimizerPlugin);
  }

  return webpackProdConfig;
}
