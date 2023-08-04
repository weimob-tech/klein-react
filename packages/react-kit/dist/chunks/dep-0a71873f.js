'use strict';

var webpack = require('webpack');
var SpeedMeasurePlugin = require('speed-measure-webpack-plugin');
var WebpackDevServer = require('webpack-dev-server');
var path$1 = require('path');
var Config = require('webpack-chain');
var WebpackBar = require('webpackbar');
var threadLoader = require('thread-loader');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
var ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
var TerserPlugin = require('terser-webpack-plugin');
var WebpackBundleAnalyzer = require('webpack-bundle-analyzer');
var CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
var fs = require('fs');

function createKrakenServer(compiler, config) {
    let server;
    const { devServer, output } = config;
    const defaultSeverConfig = {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
        },
        static: output,
        ...devServer,
    };
    server = new WebpackDevServer({ historyApiFallback: true, ...defaultSeverConfig }, compiler);
    return server;
}

// import fs from 'fs';
const cwd = process.cwd();
function getProjectPath(...filePath) {
    return path$1.join(cwd, ...filePath);
}
function resolve(moduleName) {
    return require.resolve(moduleName);
}

var path = {
    index: getProjectPath('./src/index'),
    build: getProjectPath('./build'),
    appSrc: getProjectPath('./src'),
    appHtml: getProjectPath('./public/index.html'),
    // antdSrc: getProjectPath(resolve('antd'), '../..', 'es'),
    antdSrc: getProjectPath('./node_modules/antd/es'),
    kleinSrc: getProjectPath('./node_modules/@wemo-ui/klein/es'),
    portalSrc: getProjectPath('./node_modules/rc-util/es/Portal.js'),
    notifiySrc: getProjectPath('./node_modules/rc-notification/es/Notification.js'),
};

function getBabelConfig (pkgName, isDev, cssScope, antdBabelImport, kleinBabelImport) {
    const plugins = [
        // [
        //   resolve('babel-plugin-import'),
        //   { libraryName: 'antd', libraryDirectory: 'es', style: true },
        // ],
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
    if (antdBabelImport) {
        plugins.push([
            resolve('babel-plugin-import'),
            { libraryName: 'antd', libraryDirectory: 'es', style: true },
        ]);
    }
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

function getWebpackCssConfig(projectPkg, config) {
    const { name } = projectPkg;
    const { cssScope, cssExtract, cssModule } = config;
    return function getStyleLoaders(cssLoaderOpts, less) {
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
            const lessLoader = [
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
                lessLoader.unshift({
                    loader: resolve('less-loader'),
                });
            }
            loaders.push(...lessLoader);
        }
        return loaders;
    };
}

const __RE__ = ['.js', '.jsx', '.ts', '.tsx', '.json'];
threadLoader.warmup({
// pool options, like passed to loader options
// must match loader options to boot the correct pool
}, [
    resolve('babel-loader'),
    // resolve('css-loader'), resolve('less-loader'), resolve('@kraken-kit/css-scope-loader')
]);
function getWebPackBaseConfig(config, isDev) {
    const webpackConfig = new Config();
    const projectPkg = config.pkg;
    function getLessLocalIdent(context, localIdentName, localName, options) {
        if (localName == projectPkg.name || localName === config.cssScope) {
            return localName;
        }
        const match = context.resourcePath.match(/src(.*)/);
        if (match && match[1]) {
            const proPath = match[1].replace(/\.(less)?/g, '');
            const arr = require('slash2')(proPath)
                .split('/')
                .map((a) => a.replace(/([A-Z])/g, '-$1'))
                .map((a) => a.toLowerCase());
            return `weimob-${arr.join('-')}-${localName}`.replace(/--/g, '-');
        }
    }
    function getBabelIncludes() {
        const includes = [
            path.appSrc,
            path.antdSrc,
            path.kleinSrc,
            path.portalSrc,
            path.notifiySrc,
        ];
        return config.babelInclude ? config.babelInclude(includes) : includes;
    }
    webpackConfig
        .entry('index')
        .add(config.entry)
        .end()
        .output.path(config.output)
        .filename(config.filename)
        .chunkFilename(config.chunkFilename)
        // .libraryTarget(config.libraryTarget)
        // .library(projectPkg.name)
        .publicPath(config.publicPath);
    if (config.kraken) {
        webpackConfig.output.merge({
            library: {
                name: projectPkg.name,
                type: config.libraryTarget,
            },
        });
    }
    // webpackConfig
    //   caches(true)
    webpackConfig.resolveLoader.modules
        .add('node_modules')
        // 注意：最终打包出来是dist/cli文件，这里是相对于cli的路径
        .add(path$1.resolve(__dirname, '../node_modules'));
    webpackConfig.resolve.alias.set('@', path.appSrc).end();
    webpackConfig.resolve.modules
        .add('node_modules')
        // 注意：最终打包出来是dist/cli文件，这里是相对于cli的路径
        .add(path$1.join(__dirname, '../node_modules'));
    __RE__.forEach((r) => {
        webpackConfig.resolve.extensions.add(r);
    });
    const wModule = webpackConfig.module;
    // wModule.noParse(__NPREG__);
    // loaders
    wModule
        .rule('compileJs')
        .test(/\.(js|jsx|mjs|ts|tsx)$/)
        .include.add(getBabelIncludes())
        .end()
        .use('babel')
        .loader(resolve('thread-loader'))
        .loader(resolve('babel-loader'))
        .options(getBabelConfig(projectPkg.name, isDev, config.cssScope, config.antdBabelImport, config.kleinBabelImport));
    // handle css
    wModule
        .rule('compileCss')
        .test(/\.css$/)
        .merge({
        sideEffects: true,
        use: getWebpackCssConfig(projectPkg, config)({ importLoaders: 1 }),
    });
    // handle less
    wModule
        .rule('compileLess')
        .test(/\.less$/)
        .merge({
        sideEffects: true,
        use: getWebpackCssConfig(projectPkg, config)({
            modules: {
                mode: 'local',
                getLocalIdent: getLessLocalIdent,
            },
        }, 'less'),
    })
        .exclude.add(/\.nomodule\.less$/)
        .add(/node_modules/);
    // handle node_module less
    wModule
        .rule('compileNodeModuleLess')
        .test(/\.less$/)
        .merge({
        sideEffects: true,
        use: getWebpackCssConfig(projectPkg, config)({
            importLoaders: 2,
        }, 'less'),
    })
        .include.add(/node_modules/);
    // 不使用css module
    wModule
        .rule('compileNoCssModuleLess')
        .test(/\.nomodule\.less$/)
        .merge({
        sideEffects: true,
        use: getWebpackCssConfig(projectPkg, config)({
            importLoaders: 2,
        }, 'less'),
    })
        .exclude.add(/node_modules/);
    // if (config.svgr) {
    //   // 支持svg以react-component的形式使用
    //   wModule
    //     .rule('svgAssets')
    //     .test(/\.svg(\?v=\d+\.\d+\.\d+)?$/)
    //     .merge({
    //       dependency: { not: ['url'] }, // exclude new URL calls
    //     })
    //     .use('svg')
    //     .loader('@svgr/webpack')
    //     .options({
    //       prettier: false,
    //       svgo: false,
    //       svgoConfig: {
    //         plugins: [{ removeViewBox: false }],
    //       },
    //       titleProp: true,
    //       ref: true,
    //     })
    //     .end()
    //     .use('svgFile')
    //     .loader('new-url-loader')
    //     .end();
    // } else {
    //   wModule
    //     .rule('svgAssets')
    //     .test(/\.svg(\?v=\d+\.\d+\.\d+)?$/)
    //     .type('asset' as 'javascript/auto')
    //     .parser({
    //       dataUrlCondition: {
    //         maxSize: 10 * 1024, // 10kb
    //       },
    //     })
    //     .merge({
    //       generator: {
    //         filename: config.fontPath,
    //       },
    //     })
    //     .end();
    // }
    // if (config.svgr) {
    // 支持svg以react-component的形式使用
    wModule
        .rule('svgAssets')
        .test(/\.svg(\?v=\d+\.\d+\.\d+)?$/)
        .oneOf('component')
        .merge({
        dependency: { not: ['url'] }, // exclude new URL calls
    })
        .use('svg')
        .loader('@svgr/webpack')
        .options({
        prettier: false,
        svgo: false,
        svgoConfig: {
            plugins: [{ removeViewBox: false }],
        },
        titleProp: true,
        ref: true,
    })
        .end()
        .use('svgFile')
        .loader('new-url-loader')
        .end()
        .end()
        .oneOf('svgUrl')
        .type('asset')
        .parser({
        dataUrlCondition: {
            maxSize: 10 * 1024, // 10kb
        },
    })
        .merge({
        generator: {
            filename: config.fontPath,
        },
    })
        .end()
        .end();
    // wModule
    //   .rule('json')
    //   .test(/\.json$/)
    //   .type('asset/' as 'javascript/auto')
    //   .merge({
    //     generator: {
    //       filename: config.fontPath,
    //     },
    //   });
    wModule
        .rule('picAssets')
        .test(/\.(png|jpg|jpeg|gif)(\?v=\d+\.\d+\.\d+)?$/i)
        .type('asset')
        .parser({
        dataUrlCondition: {
            maxSize: typeof config.dataUrlMaxSize !== undefined
                ? config.dataUrlMaxSize
                : 10 * 1024, // 10kb
        },
    })
        .merge({
        generator: {
            filename: config.picPath,
        },
    });
    wModule
        .rule('fontFaceAssets')
        .test(/\.(ttf|eot|woff|woff2)$/)
        .type('asset')
        .merge({
        generator: {
            filename: config.fontPath,
        },
    });
    wModule
        .rule('normalAssets')
        .test(/\.(txt)$/)
        .type('asset')
        .merge({
        generator: {
            filename: config.filePath,
        },
    });
    // plugins
    webpackConfig
        .plugin('webpackBar')
        .use(WebpackBar, [
        {
            name: '🚚 微盟react微前端打包工具打包中...',
            color: '#2f54eb',
        },
    ])
        .end()
        .plugin('definePlugin')
        .use(webpack.DefinePlugin, [
        {
            VERSION: JSON.stringify(projectPkg.version),
            PACKAGE_NAME: JSON.stringify(projectPkg.name),
            PACKAGE_SYS_CONFIG: JSON.stringify(projectPkg.sysConfig),
        },
    ])
        .end()
        .plugin('contextReplacementPlugin')
        .use(webpack.ContextReplacementPlugin, [
        /moment[\\\/]locale$/,
        /^\.\/(zh-cn)$/,
    ])
        .end();
    if (typeof config.maxChunks !== 'undefined') {
        webpackConfig
            .plugin('limitChunkCountPlugin')
            .use(webpack.optimize.LimitChunkCountPlugin, [
            {
                maxChunks: config.maxChunks,
            },
        ]);
    }
    webpackConfig
        .plugin('minChunkSizePlugin')
        .use(webpack.optimize.MinChunkSizePlugin, [
        {
            minChunkSize: typeof config.minChunkSize !== 'undefined'
                ? config.minChunkSize
                : 300,
        },
    ]);
    if (config.html) {
        webpackConfig
            .plugin('htmlPugin')
            .use(HtmlWebpackPlugin, [
            typeof config.html === 'boolean'
                ? {
                    inject: true,
                    template: path.appHtml,
                }
                : config.html,
        ])
            .end();
    }
    if (config.cssExtract) {
        webpackConfig
            .plugin('cssExtract')
            .use(MiniCssExtractPlugin, [
            {
                filename: config.cssFilename,
                chunkFilename: config.cssChunkFilename,
                ignoreOrder: true,
                attributes: {
                    'spa-app': projectPkg.name,
                },
            },
        ])
            .end();
        // .plugin('pureCss')
        // .use(PurgeCSSPlugin)
    }
    return webpackConfig;
}

function getWebpackDevConfig(webpackDevConfig) {
    webpackDevConfig.mode('development');
    webpackDevConfig.devtool('inline-source-map');
    webpackDevConfig
        .plugin('reactRefresh')
        .use(ReactRefreshWebpackPlugin, [{
            overlay: false
        }]);
    webpackDevConfig.cache({
        type: 'filesystem'
    });
    // if (config.speedMeasure) {
    //   const smp = new SpeedMeasurePlugin();
    //   return smp.wrap(webpackDevConfig)
    // }
    return webpackDevConfig;
}

// import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
function getWebpackProdConfig(webpackProdConfig, config) {
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

function defineConfig(config) {
    return config;
}
/**
 * @param config
 * @returns KrakenKitConfig
 * 合并自定义及内部配置
 */
async function resolveConfig(inlineConfig, isDev) {
    var _a;
    let userConfig = {};
    // .js文件，以cjs形式导出
    const userConfigJs = path$1.resolve(getProjectPath('kit.config.js'));
    if (fs.existsSync(userConfigJs)) {
        userConfig = require(path$1.resolve(getProjectPath('kit.config.js')));
    }
    // to do
    // defineConfig的形式
    // 这里还需要对加载进来的配置文件做转换
    const userConfigTs = path$1.resolve(getProjectPath('kit.config.ts'));
    if (fs.existsSync(userConfigTs)) {
        userConfig = await import(path$1.resolve(getProjectPath('kit.config.ts')));
    }
    Object.entries(inlineConfig).forEach(([key, value]) => {
        if (value === 'true') {
            inlineConfig[key] = true;
        }
        else if (value === 'false') {
            inlineConfig[key] = false;
        }
    });
    const endConfig = {
        ...inlineConfig,
        ...(userConfig || {}),
    };
    let { port } = endConfig;
    const pkg = require(getProjectPath('package.json'));
    let mergedConfig = {
        devServer: {
            open: true,
            hot: true,
            port: port || 3000,
            ...(userConfig.devServer || {}),
            // ...inlineConfig.server
        },
        pkg,
        entry: path.index,
        // output: pathConfig.build,
        libraryTarget: 'amd',
        // cssScope: inlineConfig.server?.cssScope,
        // cssExtract: inlineConfig.server?.cssExtract,
        // babelInclude: userConfig.build?.babelInclude,
        // ...inlineConfig.build,
        ...endConfig,
        // 生成产物的路径，配合cdn上传工具
        filename: '[name].js',
        chunkFilename: '[name].[chunkhash:8].js',
        fontPath: 'assets/fonts/[name].[ext]',
        filePath: 'static/file/[name].[contenthash:8].[ext]',
        picPath: 'static/images/[name].[contenthash:8].[ext]',
        cssFilename: '[name].css',
        cssChunkFilename: '[name].[chunkhash:8].css',
    };
    // mergedConfig.publicPath = pub ? cdnEnv.publicPath : '/';
    mergedConfig.publicPath =
        mergedConfig.kraken
            ? `http://localhost:${(_a = mergedConfig.devServer) === null || _a === void 0 ? void 0 : _a.port}/`
            : '/';
    return mergedConfig;
}

async function start(webpackConfig, config) {
    const compiler = webpack.webpack(webpackConfig);
    const server = createKrakenServer(compiler, config);
    server.startCallback(() => {
        var _a;
        console.log(`Successfully started server on http://localhost:${(_a = config.devServer) === null || _a === void 0 ? void 0 : _a.port}`);
    });
}
function build(webpackConfig) {
    return new Promise((resolve, reject) => {
        webpack.webpack(webpackConfig, async (err, stats) => {
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
            if (stats.hasWarnings()) ;
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
async function init(type, inlineConfig) {
    let webpackChainConfig;
    const isDev = type === 'start';
    try {
        // brefore build
        // version需要在获取配置之前提前升级
        if (!isDev) {
            const canBuild = true;
            if (!canBuild) ;
        }
    }
    catch (error) {
        console.log(error);
        process.exit(1);
    }
    const mergedConfig = await resolveConfig(inlineConfig);
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
        }
        else {
            // rimraf.sync(mergedConfig.output!);
            if (mergedConfig.speedMeasure) {
                const smp = new SpeedMeasurePlugin();
                webpackConfig = smp.wrap(webpackConfig);
            }
            await build(webpackConfig);
            process.exit(0);
        }
    }
    catch (error) {
        console.log(error);
        process.exit(1);
    }
}

exports.defineConfig = defineConfig;
exports.init = init;
exports.path = path;
exports.resolveConfig = resolveConfig;
