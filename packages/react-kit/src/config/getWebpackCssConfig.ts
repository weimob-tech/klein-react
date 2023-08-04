import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { getProjectPath } from '../utils';
import { resolve } from '../utils';

export default function getWebpackCssConfig(projectPkg: any, config: any) {
  const { name } = projectPkg;
  const { cssScope, cssExtract, cssModule } = config;
  return function getStyleLoaders(cssLoaderOpts: any, less?: string) {
    if (!cssModule) {
      delete cssLoaderOpts.modules;
    }

    const loaders = [
      cssExtract
        ? {
            loader: MiniCssExtractPlugin.loader,
          }
        : {
            loader: resolve('style-loader'),
            options: {
              attributes: {
                'spa-app': name,
              },
            },
          },
      {
        loader: resolve('css-loader'),
        options: cssLoaderOpts,
      },
      {
        loader: resolve('postcss-loader'),
        options: {
          postcssOptions: {
            plugins: ['autoprefixer'],
          },
          sourceMap: true,
        },
      },
    ];

    if (less) {
      const lessLoader: any[] = [
        {
          loader: resolve('less-loader'),
          options: {
            lessOptions: {
              javascriptEnabled: true,
              math: 'always',
              paths: [getProjectPath('node_moduels')],
            },
          },
        },
      ];
      if (cssScope) {
        lessLoader.unshift(
          {
            loader: resolve('less-loader'),
          },
          // thread-loader目前和less-loader一起使用还存在问题
          // https://github.com/webpack-contrib/thread-loader/pull/130
          // 解决效率也是够慢的
          // {
          //   loader: resolve('thread-loader')
          // },
          // {
          //   loader: resolve('@kraken-kit/css-scope-loader'),
          //   options: {
          //     name: typeof cssScope === 'string' ? cssScope : name,
          //   },
          // },
        );
      }
      loaders.push(...lessLoader);
    }
    return loaders;
  };
}
