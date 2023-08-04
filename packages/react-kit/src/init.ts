import rimraf from 'rimraf';
import { webpack, Configuration } from 'webpack';
import SpeedMeasurePlugin from 'speed-measure-webpack-plugin';
import createKrakenServer from './server/createServer';
import getWebPackBaseConfig from './config/getWebpackConfig';
import getWebpackDevConfig from './config/getWebpackDevConfig';
import getWebpackProdConfig from './config/getWebpackPordConfig';
import { resolveConfig, KrakenKitConfig } from './config';

export async function start(
  webpackConfig: Configuration,
  config: KrakenKitConfig,
) {
  const compiler = webpack(webpackConfig);
  const server = createKrakenServer(compiler, config);
  server.startCallback(() => {
    console.log(
      `Successfully started server on http://localhost:${config.devServer?.port}`,
    );
  });
}

export function build(webpackConfig: Configuration) {
  return new Promise((resolve, reject) => {
    webpack(webpackConfig, async (err: any, stats: any) => {
      if (err) {
        console.error(err.stack || err);
        if (err.details) {
          console.error(err.details);
        }
        reject();
        return;
      }

      const info = stats.toJson();

      if (stats.hasErrors()) {
        console.error(info.errors);
      }

      if (stats.hasWarnings()) {
        // console.warn(info.warnings);
      }

      const buildInfo = stats.toString({
        colors: true,
        children: true,
        chunks: false,
        modules: false,
        chunkModules: false,
        hash: false,
        version: false,
      });
      console.log(buildInfo);
      resolve(true);
      // process.exit(0);
    });
  });
}

export async function init(type: string, inlineConfig: any) {
  let webpackChainConfig;
  const isDev = type === 'start';

  try {
    // brefore build
    // version需要在获取配置之前提前升级
    if (!isDev) {
      const canBuild = true;
      if (!canBuild) {
        process.exit(0);
      }
    }
  } catch (error) {
    console.log(error);
    process.exit(1);
  }

  const mergedConfig = await resolveConfig(inlineConfig, isDev);

  // await initEnv(buildConfig);

  const webpackChainBaseConfig = getWebPackBaseConfig(mergedConfig, isDev);
  webpackChainConfig = isDev
    ? getWebpackDevConfig(webpackChainBaseConfig)
    : getWebpackProdConfig(webpackChainBaseConfig, mergedConfig);

  if (mergedConfig.chainWebpack) {
    await mergedConfig.chainWebpack(webpackChainConfig);
  }

  let webpackConfig = webpackChainConfig.toConfig();

  try {
    if (isDev) {
      start(webpackConfig, mergedConfig);
    } else {
      // rimraf.sync(mergedConfig.output!);

      if (mergedConfig.speedMeasure) {
        const smp = new SpeedMeasurePlugin();
        webpackConfig = smp.wrap(webpackConfig);
      }
      await build(webpackConfig);

      process.exit(0);
    }
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}
