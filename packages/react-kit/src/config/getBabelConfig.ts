import { resolve } from '../utils';

export default function (
  pkgName: string,
  isDev: boolean,
  cssScope?: boolean | string,
  kleinBabelImport?: boolean,
) {
  const plugins: any = [
    // [
    //   resolve('babel-plugin-import'),
    //   { libraryName: '@wemo-ui/klein', libraryDirectory: 'es', style: true },
    //   '@wemo-ui/klein',
    // ],
    // resolve('@babel/plugin-transform-member-expression-literals'),
    // resolve('@babel/plugin-transform-object-assign'),
    // resolve('@babel/plugin-syntax-dynamic-import'),
    // resolve('babel-plugin-dynamic-import-webpack'),
    // resolve('@babel/plugin-transform-property-literals'),
    [
      resolve('@babel/plugin-transform-runtime'),
      {
        useESModules: false,
        helpers: true,
        corejs: 3,
        // proposals: true
      },
    ],
    // resolve('@babel/plugin-transform-spread'),
    // resolve('@babel/plugin-transform-template-literals'),
    // resolve('@babel/plugin-proposal-export-default-from'),
    // resolve('@babel/plugin-proposal-export-namespace-from'),
    // resolve('@babel/plugin-proposal-object-rest-spread'),
    [
      resolve('@babel/plugin-proposal-decorators'),
      {
        legacy: true,
      },
    ],
    // resolve('@babel/plugin-proposal-class-properties')
  ];
  if (kleinBabelImport) {
    plugins.push([
      resolve('babel-plugin-import'),
      { libraryName: '@wemo-ui/klein', libraryDirectory: 'es', style: true },
      '@wemo-ui/klein',
    ]);
  }
  if (isDev) {
    plugins.push([resolve('react-refresh/babel')]);
  }

  return {
    presets: [
      resolve('@babel/preset-typescript'),
      resolve('@babel/preset-react'),
      [
        resolve('@babel/preset-env'),
        {
          // "useBuiltIns": "usage",
          // "corejs": 2,
          targets: {
            browsers: [
              'last 2 versions',
              'Firefox ESR',
              '> 1%',
              'ie >= 9',
              'iOS >= 8',
              'Android >= 4',
            ],
          },
        },
      ],
    ],
    plugins,
    cacheDirectory: true,
  };
}
