'use strict';

var cac = require('cac');
var init = require('./chunks/dep-0a71873f.js');
require('webpack');
require('speed-measure-webpack-plugin');
require('webpack-dev-server');
require('path');
require('webpack-chain');
require('webpackbar');
require('thread-loader');
require('html-webpack-plugin');
require('mini-css-extract-plugin');
require('@pmmmwh/react-refresh-webpack-plugin');
require('terser-webpack-plugin');
require('webpack-bundle-analyzer');
require('css-minimizer-webpack-plugin');
require('fs');

const cli = cac('kraken-kit');
// dev
cli
    .command('[root]')
    .alias('start')
    .option('--cssExtract', '[boolean] 是否抽离css', {
    default: false,
})
    .option('--cssModule', '[boolean] 是否开启cssModule', {
    default: true,
})
    .option('--html', '[boolean | object] 是否输出html文件', {
    default: false,
})
    .option('--kraken', '[boolean] 是否以微前端的方式启动本地服务', {
    default: true,
})
    .option('--cssScope [classname]', '[boolean | string] 开启样式隔离, 传入string类型自定义scope类名')
    .option('--antdBabelImport', '[boolean] antd组件样式是否通过babel-import-plugin导入', {
    default: true,
})
    .option('--kleinBabelImport', '[boolean] klein组件样式是否通过babel-import-plugin导入', {
    default: true,
})
    .option('--svgr', `[boolean] 支持svg以react-component的形式使用`, {
    default: true,
})
    .option('--port [port]', `[number] 端口号`)
    .option('--maxChunks <number>', '[number] chunk文件最大数量')
    .option('--minChunkSize <number>', '[number] 当文件大小大于minChunkSize时单独抽成chunk')
    .option('--dataUrlMaxSize <number>', '[number] 当图片大于dataUrlMaxSize时候以url形式加载，默认为10kb')
    .action((root, options) => {
    init.init('start', options);
});
// build
cli
    .command('[root] build')
    // remove st later
    .option('--output', '[string] 指定输出路径（相对于 项目根目录)', {
    default: init.path.build,
})
    .option('--devMode', '[boolean] 打包时不去除console.log')
    .option('--cssExtract', '[boolean] 是否抽离css', {
    default: false,
})
    .option('--cssModule', '[boolean] 是否开启cssModule', {
    default: true,
})
    .option('--buildCheck', '[boolean] 是否检查git等状态，可在调试时关闭', {
    default: true,
})
    .option('--compress', '[boolean] 是否压缩代码', {
    default: true,
})
    .option('--noconsole', '[boolean] 打包是否移除console', {
    default: true,
})
    .option('--antdBabelImport', '[boolean] antd组件样式是否通过babel-import-plugin导入', {
    default: true,
})
    .option('--kleinBabelImport', '[boolean] klein组件样式是否通过babel-import-plugin导入', {
    default: true,
})
    .option('--svgr', `[boolean] 支持svg以react-component的形式使用`, {
    default: true,
})
    .option('--html', '[boolean | object] 是否输出html文件, 配置为对象即为html-webpack-plugin的配置', {
    default: false,
})
    .option('--kraken', '[boolean] 是否以微前端的方式启动本地服务', {
    default: true,
})
    .option('--cssScope [classname]', '[boolean | string] 开启样式隔离, 传入string类型自定义scope类名')
    .option('--disableGitTag', '[boolean] 是否关闭cdn-upload自动打git标签功能', {
    default: false,
})
    .option('--analyzer', '[boolean] 打包体积分析，仅在build时生效', {
    default: false,
})
    .option('--speedMeasure', '[boolean] 打包速度分析，仅在build时生效', {
    default: false,
})
    .option('--libraryTarget <libraryTarget>', '输出的打包文件类型，如umd，amd等')
    .option('--maxChunks <number>', '[number] chunk文件最大数量')
    .option('--minChunkSize <number>', '[number] 当文件大小大于minChunkSize时单独抽成chunk')
    .option('--dataUrlMaxSize <number>', '[number] 当图片大于dataUrlMaxSize时候以url形式加载，默认为10kb')
    .action((root, options) => {
    init.init('build', options);
});
cli.version(require('../package.json').version);
cli.help();
cli.parse();
