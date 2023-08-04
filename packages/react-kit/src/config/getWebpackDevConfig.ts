import Config from 'webpack-chain';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';

export default function getWebpackDevConfig(webpackDevConfig: Config) {

  webpackDevConfig.mode('development');
  webpackDevConfig.devtool('inline-source-map');
  webpackDevConfig
    .plugin('reactRefresh')
    .use(ReactRefreshWebpackPlugin, [{
      overlay: false
    }])
  webpackDevConfig.cache({
    type: 'filesystem'
  })

  // if (config.speedMeasure) {
  //   const smp = new SpeedMeasurePlugin();
  //   return smp.wrap(webpackDevConfig)
  // }

  return webpackDevConfig
}