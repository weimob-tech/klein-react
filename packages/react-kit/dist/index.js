'use strict';

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



exports.defineConfig = init.defineConfig;
exports.krakenKitInit = init.init;
exports.resolveConfig = init.resolveConfig;
