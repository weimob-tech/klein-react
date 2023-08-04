const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const cwd = process.cwd();
const packageJson = require(path.join(cwd, 'package.json'));

const config = {
  entry: {
    [`${packageJson.name}`]: './src/index',
    [`${packageJson.name}.min`]: './src/index',
  },
  output: {
    filename: '[name].js',
    library: packageJson.name,
    // libraryExport: 'default',
    libraryTarget: 'umd',
    path: path.resolve(cwd, 'dist'),
  },
  mode: 'production',
  resolve: {
    extensions: ['.ts', '.tsx', '.json', '.css', '.js', '.less', '.jsx'],
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        include: /\.min\.js$/,
      }),
      new OptimizeCSSAssetsPlugin({
        include: /\.min\.js$/,
      }),
    ],
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif|svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      },
      {
        test: /\.jsx?$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env', '@babel/react'],
            plugins: [
              [
                '@babel/plugin-proposal-decorators',
                {
                  legacy: true,
                },
              ],
              [
                '@babel/plugin-proposal-class-properties',
                {
                  loose: true,
                },
              ],
              '@babel/proposal-object-rest-spread',
            ],
          },
        },
      },
      {
        test: /\.tsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/typescript',
              [
                '@babel/env',
                {
                  loose: true,
                  modules: false,
                },
              ],
              '@babel/react',
            ],
            plugins: [
              [
                '@babel/plugin-proposal-decorators',
                {
                  legacy: true,
                },
              ],
              [
                '@babel/plugin-proposal-class-properties',
                {
                  loose: true,
                },
              ],
              '@babel/proposal-object-rest-spread',
            ],
          },
        },
      },
      // {
      //   test: /\.css$/,
      //   use: [
      //     {
      //       loader: 'style-loader',
      //     },
      //     {
      //       loader: 'css-loader',
      //     },
      //   ],
      // },
      // {
      //   test: /\.less$/,
      //   use: [
      //     {
      //       loader: MiniCssExtractPlugin.loader,
      //       options: {
      //         publicPath: (resourcePath, context) =>
      //           `${path.relative(path.dirname(resourcePath), context)}/`,
      //       },
      //     },
      //     {
      //       loader: 'css-loader',
      //     },
      //     {
      //       loader: 'less-loader',
      //       options: {
      //         lessOptions: {
      //           javascriptEnabled: true,
      //         },
      //       },
      //     },
      //   ],
      // },
    ],
  },
  externals: [
    {
      react: 'React',
      'react-dom': 'ReactDOM',
      moment: 'moment',
    },
  ],
  plugins: [
    new CleanWebpackPlugin({
      verbose: true,
      dry: true,
    }),
    new ProgressBarPlugin(),
    // new MiniCssExtractPlugin({
    //   filename: '[name].css',
    //   chunkFilename: '[id].css',
    // }),
  ],
};

module.exports = config;
