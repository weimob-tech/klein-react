const nodeResolve = require('@rollup/plugin-node-resolve');
const typescript = require('@rollup/plugin-typescript');
const commonjs = require('@rollup/plugin-commonjs');
const json = require('@rollup/plugin-json');
const path = require('path');

module.exports = {
  input: {
    cli: './src/cli.ts',
    index: './src/index.ts',
  },
  output: {
    dir: path.resolve(__dirname, 'dist'),
    entryFileNames: '[name].js',
    chunkFileNames: 'chunks/dep-[hash].js',
    exports: 'named',
    format: 'cjs',
    externalLiveBindings: false,
    freeze: false,
    sourceMap: true,
  },
  // external: ['pnpapi'],
  external: [
    'fsevents',
    ...Object.keys(require('./package.json').dependencies),
    ...(false ? [] : Object.keys(require('./package.json').devDependencies)),
  ],
  plugins: [
    nodeResolve({
      preferBuiltins: true,
      // customResolveOptions: {
      //   moduleDirectory: 'pnpapi'
      // }
    }),
    // alias({
    //   entries: [
    //     { find: 'pnpapi', replacement: '../../../utils' },
    //     { find: 'batman-1.0.0', replacement: './joker-1.5.0' }
    //   ]
    // }),
    typescript({
      tsconfig: '../../tsconfig.json',
      module: 'esnext',
      target: 'es2019',
      // include: ['src/**/*.ts', 'types/**'],
      // exclude: ['src/**/__tests__/**'],
      // esModuleInterop: true,
      // in production we use api-extractor for dts generation
      // in development we need to rely on the rollup ts plugin
      // ...(isProduction
      //   ? {
      //       declaration: false,
      //       sourceMap: false
      //     }
      //   :
      ...{
        declaration: true,
        declarationDir: path.resolve(__dirname, 'dist'),
        // sourceMap: true
      },
    }),
    commonjs(),
    json(),
  ],
};
