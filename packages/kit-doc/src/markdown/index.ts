// import { isTabRouteFile } from '@/features/tabs';
// import type { IThemeLoadResult } from '@/features/theme/loader';
import fs from 'fs';
import lodash from 'lodash';
import Mustache from 'Mustache';
import transform, {
  type IMdTransformerOptions,
  type IMdTransformerResult,
} from './transformer';

import { getCache, winPath } from '../utils';
import { CONTENT_TEXTS_OBJ_NAME } from './transformer/rehypeText';

interface IMdLoaderDefaultModeOptions
  extends Omit<IMdTransformerOptions, 'fileAbsPath'> {
  mode?: 'markdown';
  // builtins: IThemeLoadResult['builtins'];
  builtins: any;
}

interface IMdLoaderDemosModeOptions
  extends Omit<IMdLoaderDefaultModeOptions, 'builtins' | 'mode'> {
  mode: 'meta';
  onResolveDemos?: (
    demos: NonNullable<IMdTransformerResult['meta']['demos']>,
  ) => void;
  onResolveAtomMeta?: (
    atomId: string,
    meta: IMdTransformerResult['meta']['frontmatter'],
  ) => void;
}

export type IMdLoaderOptions =
  | IMdLoaderDefaultModeOptions
  | IMdLoaderDemosModeOptions;

function getDemoSourceFiles(demos: IMdTransformerResult['meta']['demos'] = []) {
  return demos.reduce<string[]>((ret, demo) => {
    if ('sources' in demo) {
      ret.push(...Object.values(demo.sources));
    }

    return ret;
  }, []);
}

function emit(this: any, opts: IMdLoaderOptions, ret: IMdTransformerResult) {
  const { demos, embeds, texts } = ret.meta;

  let componentsString = '';

  demos.forEach((demo: any) => {
    componentsString = `
      ${componentsString}
      '${demo.id}': ${demo.component},
    `;
  });

  // declare embedded files as loader dependency, for re-compiling when file changed
  embeds!.forEach((file) => this.addDependency(file));

  // declare demo source files as loader dependency, for re-compiling when file changed
  getDemoSourceFiles(demos).forEach((file) => this.addDependency(file));

  return `
    import React from 'react';

    import { KitDocDemo, ApiTable, SourceCode ,KitDocDemoGrid, DesignResource, ColorTag, DemoTabs} from '@/components';
    import { MarkdownContext } from '@/utils/context';

    const demosMap = {
      ${componentsString}
    };
    const $$contentTexts = ${JSON.stringify(texts)};
    
    function MarkdownContent() {
      return (
        <MarkdownContext.Provider value={{
          demos: ${JSON.stringify(demos)},
          demosMap
        }}>
          <>${ret.content}</>
        </MarkdownContext.Provider>
      )
    }

    const frontmatter = ${JSON.stringify(ret.meta.frontmatter)};
    export { frontmatter };

    export default MarkdownContent;`;
}

function getDepsCacheKey(deps: (typeof depsMapping)['0'] = []) {
  return JSON.stringify(
    deps.map((file) => `${file}:${fs.statSync(file).mtimeMs}`),
  );
}

const deferrer: Record<string, Promise<IMdTransformerResult>> = {};
const depsMapping: Record<string, string[]> = {};

export default function mdLoader(this: any, content: string) {
  const opts: IMdLoaderOptions = this.getOptions();
  const cb = this.async();

  const cache = getCache('md-loader');
  // format: {path:mtime:loaderOpts}
  const baseCacheKey = [
    this.resourcePath,
    fs.statSync(this.resourcePath).mtimeMs,
    JSON.stringify(lodash.omit(opts, ['mode', 'builtins', 'onResolveDemos'])),
  ].join(':');
  // format: {baseCacheKey:{deps:mtime}[]}
  const cacheKey = [
    baseCacheKey,
    getDepsCacheKey(depsMapping[this.resourcePath]),
  ].join(':');
  const cacheRet = cache.getSync(cacheKey, '');

  if (cacheRet) {
    // file cache
    cb(null, emit.call(this, opts, cacheRet));
    return;
  } else if (cacheKey in deferrer) {
    // deferrer cache
    deferrer[cacheKey]
      .then((res) => {
        cb(null, emit.call(this, opts, res));
      })
      .catch(cb);
    return;
  }
  // share deferrer for same cache key
  deferrer[cacheKey] = transform(content, {
    ...(lodash.omit(opts, ['mode', 'builtins', 'onResolveDemos']) as Omit<
      IMdLoaderOptions,
      'mode' | 'builtins' | 'onResolveDemos'
    >),
    fileAbsPath: winPath(this.resourcePath),
  });

  deferrer[cacheKey]
    .then((ret) => {
      // update deps mapping
      depsMapping[this.resourcePath] = ret.meta.embeds!.concat(
        getDemoSourceFiles(ret.meta.demos),
      );

      // re-generate cache key with latest embeds & sources data
      const finalCacheKey = [
        baseCacheKey,
        getDepsCacheKey(depsMapping[this.resourcePath]),
      ].join(':');

      // save cache with final cache key
      cache.setSync(finalCacheKey, ret);
      cb(null, emit.call(this, opts, ret));
      delete deferrer[cacheKey];
    })
    .catch(cb);
}
