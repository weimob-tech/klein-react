import fs from 'fs';
import path from 'path';
import { krakenKitInit } from '@klein-kit/react-kit';
import ReactTechStack from './techStacks/react';
import PrerendererWebpackPlugin from '@prerenderer/webpack-plugin';
const SitemapPlugin = require('sitemap-webpack-plugin').default;

const KLEIN_PATH = path.resolve(process.cwd(), 'packages/klein-components');
const kLEIN_EDITOR = path.resolve(process.cwd(), 'src/components/editor/klein-editor/dist/index.esm.js');
const EDITOR_CORE = path.resolve(process.cwd(), 'src/components/editor/core/dist/index.esm.js');
const EDITOR_EDITOR = path.resolve(process.cwd(), 'src/components/editor/editor/dist/index.esm.js');
const EDITOR_BASIC = path.resolve(process.cwd(), 'src/components/editor/basic-modules/dist/index.esm.js');
const EDITOR_TABLE = path.resolve(process.cwd(), 'src/components/editor/table-module/dist/index.esm.js');
const EDITOR_VIDEO = path.resolve(process.cwd(), 'src/components/editor/video-module/dist/index.esm.js');
const EDITOR_IMAGE = path.resolve(process.cwd(), 'src/components/editor/upload-image-module/dist/index.esm.js');
const EDITOR_HIGHLIGHT = path.resolve(process.cwd(), 'src/components/editor/code-highlight/dist/index.esm.js');
const EDITOR_LIST = path.resolve(process.cwd(), 'src/components/editor/list-module/dist/index.esm.js');
const EDITOR_ICONS = path.resolve(process.cwd(), 'src/components/editor/icons/dist/index.esm.js');
const CAPTCHA = path.resolve(process.cwd(), 'src/components/captcha-pc/dist/index.esm.js');

const SLIDER = path.resolve(process.cwd(), 'packages/slider');

const chainWebpack = async (webpackChainConfig: any) => {
  webpackChainConfig.resolve.alias.set('@wemo-ui/klein', KLEIN_PATH);
  webpackChainConfig.resolve.alias.set('@klein-design/klein-editor', kLEIN_EDITOR);
  webpackChainConfig.resolve.alias.set('@klein-editor/core', EDITOR_CORE);
  webpackChainConfig.resolve.alias.set('@klein-editor/editor', EDITOR_EDITOR);
  webpackChainConfig.resolve.alias.set('@klein-editor/basic-modules', EDITOR_BASIC);
  webpackChainConfig.resolve.alias.set('@klein-editor/table-module', EDITOR_TABLE);
  webpackChainConfig.resolve.alias.set('@klein-editor/video-module', EDITOR_VIDEO);
  webpackChainConfig.resolve.alias.set('@klein-editor/upload-image-module', EDITOR_IMAGE);
  webpackChainConfig.resolve.alias.set('@klein-editor/code-highlight', EDITOR_HIGHLIGHT);
  webpackChainConfig.resolve.alias.set('@klein-editor/list-module', EDITOR_LIST);
  webpackChainConfig.resolve.alias.set('@klein-editor/icons', EDITOR_ICONS);
  webpackChainConfig.resolve.alias.set('@weimobfe/captcha-pc', CAPTCHA);

  webpackChainConfig.resolve.alias.set('slider', SLIDER);
  
  // webpackChainConfig.resolve.alias.set('@wemo-ui/klein', KLEIN_PATH);

  const babelInKrakenKit = webpackChainConfig.module
    .rule('compileJs')
    .use('babel')
    .loader('babel-loader')
    .entries();

  webpackChainConfig.module
    .rule('markdown')
    .test(/\.md$/)
    .use('babel-loader')
    .loader(require.resolve('babel-loader'))
    .options(babelInKrakenKit.options)
    .end()
    .use('markdown-loader')
    .loader(require.resolve('./markdown'))
    .options({
      techStacks: [new ReactTechStack()],
      resolve: {
        atomDirs: [{ type: 'component', dir: 'src' }],
      },
      cwd: process.cwd(),
    });

  // wModule
  //   .rule('markdown')
  //   .test(/\.md$/)
  //   .use('markdown-loader')
  //   .loader(resolve('babel-loader'))

  const componentRoutes = getComponentRoutes();
  const routes = ['/', ...componentRoutes];

  // ssg
  webpackChainConfig.plugin('ssg').use(PrerendererWebpackPlugin, [
    {
      routes,
      postProcess(renderedRoute) {
        // NOTE: just remove fullpage class name, avoid duplicate init fullpage
        if (renderedRoute.originalRoute === '/') {
          renderedRoute.html = renderedRoute.html.replace(
            `class="fp-enabled"`,
            '',
          );
        }
      },
    },
  ]);

  // sitemap
  const isOL = await isOLBranch()
  const base = isOL ? 'https://klein.design.weimob.com/' : 'https://klein.weimobqa.com/'

  webpackChainConfig.plugin('sitemap').use(SitemapPlugin, [
    {
      base,
      // base: 'https://klein.design.weimob.com/',
      paths: routes,
    },
  ]);
};

function init(type: string, option: any) {
  krakenKitInit(type, {
    ...option,
    babelInclude: (includes: string[]) => includes.concat([KLEIN_PATH]),
    chainWebpack,
  });
}

export default init;

function getComponentRoutes() {
  // get all component dirs
  const componentDirs = fs.readdirSync(
    path.resolve(process.cwd(), './packages/klein-components'),
  );
  // get all component routes
  const componentRoutes = componentDirs.map((dir: string) => {
    return `/components/${dir}`;
  });
  return componentRoutes;
}

function isOLBranch () {
  return new Promise((resolve, reject) => {
    const { exec } = require('child_process');
    exec('git rev-parse --abbrev-ref HEAD', (err, stdout) => {
      if (err) {
            console.error(err)
            reject(false)
        }

        if (typeof stdout === 'string' && (stdout.trim().indexOf('release') === 0)) {
            resolve(true)
        } else {
            resolve(false)
        }
    });
  })
}