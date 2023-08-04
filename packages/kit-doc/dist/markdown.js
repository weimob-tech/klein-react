'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var fs = require('fs');
var lodash = require('lodash');
var enhancedResolve = require('enhanced-resolve');
var esbuild = require('esbuild');
var assert = require('assert');
var path = require('path');
var yaml = require('js-yaml');
var parser = require('@babel/parser');
var url = require('url');

function _interopNamespaceDefault(e) {
    var n = Object.create(null);
    if (e) {
        for (var k in e) {
            n[k] = e[k];
        }
    }
    n.default = e;
    return n;
}

var parser__namespace = /*#__PURE__*/_interopNamespaceDefault(parser);

const Cache = require('file-system-cache').default;
// import { lodash, logger, winPath } from 'umi/plugin-utils';
function winPath(path) {
    return path.replace(/\\/g, '/');
}
/**
 * get route path from file-system path
 */
function getRoutePathFromFsPath(fsPath) {
    return lodash.kebabCase(winPath(fsPath).replace(/((\/|^)index(\.[a-zA-Z-]+)?)?\.\w+$/g, ''));
}
/**
 * get range lines of markdown file
 */
const getFileRangeLines = (content, range) => {
    const [, start, end] = (range === null || range === void 0 ? void 0 : range.match(/^L(\d+)(?:-L(\d+))?$/)) || [];
    if (start) {
        const lineStart = parseInt(start, 10) - 1;
        const lineEnd = end ? parseInt(end, 10) : lineStart + 1;
        return content
            .split(/\r\n|\n/g)
            .slice(lineStart, lineEnd)
            .join('\n');
    }
    return content;
};
/**
 * get file content by regular expression
 * @param content   source file content
 * @param regexp    regular expression string
 * @param filePath  source file path
 */
const getFileContentByRegExp = (content, regexp, filePath) => {
    try {
        // eslint-disable-next-line no-eval
        return content.match(eval(regexp))[0];
    }
    catch (err) {
        console.error(`Extract markdown content failed, use the full content.
       RegExp: ${regexp}
       File: ${filePath}
       Error: ${err}`);
        return content;
    }
};
/**
 * parse frontmatter from code string
 */
function parseCodeFrontmatter(raw) {
    const [, comment = '', code = ''] = raw
        // clear head break lines
        .replace(/^\n\s*/, '')
        // split head comments & remaining code
        .match(/^(\/\*\*[^]*?\n\s*\*\/)?(?:\s|\n)*([^]+)?$/);
    const yamlComment = comment
        // clear / from head & foot for comment
        .replace(/^\/|\/$/g, '')
        // remove * from comments
        .replace(/(^|\n)\s*\*+/g, '$1');
    let frontmatter = null;
    try {
        frontmatter = yaml.load(yamlComment);
    }
    catch { }
    return { code: frontmatter ? code : raw, frontmatter };
}
/**
 * get file-system cache for specific namespace
 */
const caches = {};
const CACHE_PATH = 'node_modules/.cache/kit-doc';
function getCache(ns) {
    var _a;
    // return fake cache if cache disabled
    if (process.env.DUMI_CACHE === 'none') {
        return { set() { }, get() { }, setSync() { }, getSync() { } };
    }
    return ((_a = caches[ns]) !== null && _a !== void 0 ? _a : (caches[ns] = Cache({ basePath: path.join(CACHE_PATH, ns) })));
}

async function parseBlockAsset(opts) {
    const asset = {
        type: 'BLOCK',
        id: opts.id,
        refAtomIds: opts.refAtomIds,
        dependencies: {},
    };
    const result = {
        asset,
        sources: {},
        frontmatter: null,
    };
    const deferrer = esbuild.build({
        // do not emit file
        write: false,
        // enable bundle for trigger onResolve hook, but all deps will be externalized
        bundle: true,
        logLevel: 'silent',
        format: 'esm',
        target: 'esnext',
        // esbuild need relative entry path
        entryPoints: [path.basename(opts.fileAbsPath)],
        absWorkingDir: path.dirname(opts.fileAbsPath),
        plugins: [
            {
                name: 'plugin-dumi-collect-deps',
                setup: (builder) => {
                    builder.onResolve({ filter: /.*/ }, (args) => {
                        if (args.kind !== 'entry-point' && !args.path.startsWith('.')) {
                            const resolved = opts.resolver(args.resolveDir, args.path);
                            assert(resolved, `Can't resolve ${args.path} from ${args.resolveDir}`);
                            const pkgJsonPath = path.resolve(process.cwd(), resolved);
                            if (pkgJsonPath) {
                                const pkg = require(pkgJsonPath);
                                asset.dependencies[pkg.name] = {
                                    type: 'NPM',
                                    value: pkg.version,
                                };
                            }
                            // make all deps external
                            return { path: args.path, external: true };
                        }
                        return {
                            path: args.kind !== 'entry-point'
                                ? opts.resolver(args.resolveDir, args.path)
                                : path.join(args.resolveDir, args.path),
                            pluginData: { kind: args.kind, resolveDir: args.resolveDir },
                        };
                    });
                    builder.onLoad({ filter: /.*/ }, (args) => {
                        var _a;
                        const ext = path.extname(args.path);
                        const isModule = ['.js', '.jsx', '.ts', '.tsx'].includes(ext);
                        const isPlainText = [
                            '.css',
                            '.less',
                            '.sass',
                            '.scss',
                            '.styl',
                            '.json',
                        ].includes(ext);
                        const isEntryPoint = args.pluginData.kind === 'entry-point';
                        const filename = isEntryPoint
                            ? `index${ext}`
                            : winPath(path.relative(path.dirname(opts.fileAbsPath), args.path))
                                // discard leading ./ or ../
                                .replace(/^(\.?\.\/)+/g, '');
                        if (isModule || isPlainText) {
                            asset.dependencies[filename] = {
                                type: 'FILE',
                                value: (_a = opts.entryPointCode) !== null && _a !== void 0 ? _a : fs.readFileSync(args.path, 'utf-8'),
                            };
                            // extract entry point frontmatter as asset metadata
                            if (isEntryPoint) {
                                const { code, frontmatter } = parseCodeFrontmatter(asset.dependencies[filename].value);
                                if (frontmatter) {
                                    // replace entry code when frontmatter available
                                    asset.dependencies[filename].value = code;
                                    result.frontmatter = frontmatter;
                                    // TODO: locale for title & description
                                    ['description', 'title', 'snapshot', 'keywords'].forEach((key) => {
                                        asset[key] =
                                            frontmatter === null || frontmatter === void 0 ? void 0 : frontmatter[key];
                                    });
                                }
                            }
                            // save file absolute path for load file via raw-loader
                            // to avoid bundle same file to save bundle size
                            if (!isEntryPoint || !opts.entryPointCode) {
                                result.sources[filename] = args.path;
                            }
                            return {
                                // only continue to load for module files
                                contents: isModule ? asset.dependencies[filename].value : '',
                                loader: isModule ? ext.slice(1) : 'text',
                            };
                        }
                    });
                },
            },
        ],
    });
    try {
        await deferrer;
    }
    catch {
        /**
         * eat errors, for preserve the dependency relationship of demo & md for md loader
         * to make sure the parent md can be re-compiling when demo errors be fixed
         * and don't worry, the real error still be reported by the demo loader
         */
    }
    return result;
}

let visit$b;
let SKIP$2;
let toString$4;
let isElement$1;
const DEMO_NODE_CONTAINER = '$demo-container';
const DEMO_PROP_VALUE_KEY = '$demo-prop-value-key';
const DUMI_DEMO_TAG = 'KitDocDemo';
const DUMI_DEMO_GRID_TAG = 'KitDocDemoGrid';
// workaround to import pure esm module
(async () => {
    ({ visit: visit$b, SKIP: SKIP$2 } = await Promise.resolve().then(function () { return require('./chunks/dep-923c10ef.js'); }));
    ({ toString: toString$4 } = await import('hast-util-to-string'));
    ({ isElement: isElement$1 } = await Promise.resolve().then(function () { return require('./chunks/dep-5205d196.js'); }));
})();
/**
 * get language for code element
 */
function getCodeLang(node, opts) {
    var _a, _b, _c, _d;
    let lang = '';
    if (typeof ((_a = node.properties) === null || _a === void 0 ? void 0 : _a.src) === 'string') {
        // external demo
        node.properties.src = opts.resolver(path.dirname(opts.fileAbsPath), node.properties.src);
        lang = path.extname(node.properties.src).slice(1);
    }
    else if (Array.isArray((_b = node.properties) === null || _b === void 0 ? void 0 : _b.className) &&
        (opts.resolve.codeBlockMode === 'passive'
            ? // passive mode
                / demo/.test(String((_c = node.data) === null || _c === void 0 ? void 0 : _c.meta))
            : // active mode (default)
                !/ pure/.test(String((_d = node.data) === null || _d === void 0 ? void 0 : _d.meta)))) {
        // code block demo
        // ref: https://github.com/syntax-tree/mdast-util-to-hast/blob/b7623785f270b5225898d15327770327409878f8/lib/handlers/code.js#L23
        lang = String(node.properties.className[0]).replace('language-', '');
    }
    return lang;
}
/**
 * get unique id for code in project
 */
function getCodeId(cwd, fileAbsPath, localId, atomId) {
    // Foo, or docs-guide, or docs-guide-faq
    const prefix = atomId ||
        getRoutePathFromFsPath(path.relative(cwd, fileAbsPath)).replace(/\//g, '-');
    return [prefix.toLowerCase(), 'demo', localId.toLowerCase()]
        .filter(Boolean)
        .join('-');
}
/**
 * try to mark tech stack data for node, if it is a demo node
 */
function tryMarkDemoNode(node, opts) {
    var _a, _b, _c;
    let isDemoNode = Boolean((_a = node.data) === null || _a === void 0 ? void 0 : _a.techStack);
    // to prevent duplicate mark
    if (!isDemoNode) {
        const lang = getCodeLang(node, opts);
        const techStack = lang && opts.techStacks.find((ts) => ts.isSupported(node, lang));
        // mark tech stack data for reuse
        if (techStack) {
            isDemoNode = true;
            (_b = node.data) !== null && _b !== void 0 ? _b : (node.data = {});
            node.data.techStack = techStack;
            node.data.lang = lang;
            node.data.type =
                typeof ((_c = node.properties) === null || _c === void 0 ? void 0 : _c.src) === 'string' ? 'external' : 'code-block';
        }
    }
    return isDemoNode;
}
function rehypeDemo(opts) {
    return async (tree, vFile) => {
        const deferrers = [];
        const replaceNodes = [];
        let index = 0;
        // mark code block demo node to standard demo node
        // TODO: code block demo also support demo grid?
        visit$b(tree, 'element', (node) => {
            var _a;
            var _b;
            if (isElement$1(node, 'pre') &&
                node.children.length === 1 &&
                isElement$1(node.children[0], 'code') &&
                tryMarkDemoNode(node.children[0], opts)) {
                node.tagName = 'p';
                (_a = (_b = node).data) !== null && _a !== void 0 ? _a : (_b.data = {});
                node.data[DEMO_NODE_CONTAINER] = true;
            }
        });
        // split demo node to a separate paragraph from a mixed paragraph
        visit$b(tree, 'element', (node, nodeIndex, parent) => {
            var _a;
            var _b;
            if (isElement$1(node, 'p')) {
                for (let childIndex = 0; childIndex < node.children.length; childIndex += 1) {
                    let child = node.children[childIndex];
                    // find code node
                    if (isElement$1(child, 'code') && tryMarkDemoNode(child, opts)) {
                        const isFirstChild = childIndex === 0;
                        let nextChildIndex = childIndex + 1;
                        let nextChild = node.children[nextChildIndex];
                        let splitFrom = childIndex;
                        if (isFirstChild) {
                            // mark parent as demo container if the first child is demo node
                            (_a = (_b = node).data) !== null && _a !== void 0 ? _a : (_b.data = {});
                            node.data[DEMO_NODE_CONTAINER] = true;
                            // if there has no next node, it means need not to split, SKIP directly
                            if (!nextChild)
                                return SKIP$2;
                            // try to find the next demo node or br node
                            while (nextChild) {
                                if ((isElement$1(nextChild, 'code') &&
                                    tryMarkDemoNode(nextChild, opts)) ||
                                    isElement$1(nextChild, 'br')) {
                                    // move to the next child index
                                    splitFrom += 1;
                                    // update next child for the next check
                                    nextChildIndex = splitFrom + 1;
                                    nextChild = node.children[nextChildIndex];
                                }
                                else {
                                    splitFrom += 1;
                                    break;
                                }
                            }
                        }
                        // split paragraph
                        const splitChildren = node.children.splice(splitFrom);
                        parent.children.splice(nodeIndex + 1, 0, {
                            type: 'element',
                            tagName: 'p',
                            children: splitChildren,
                        });
                        return SKIP$2;
                    }
                }
            }
        });
        visit$b(tree, 'element', (node) => {
            var _a;
            if (isElement$1(node, 'p') && ((_a = node.data) === null || _a === void 0 ? void 0 : _a[DEMO_NODE_CONTAINER])) {
                const demosPropData = [];
                node.children.forEach((codeNode) => {
                    var _a;
                    var _b;
                    // strip invalid br elements
                    if (isElement$1(codeNode, 'code')) {
                        const codeType = codeNode.data.type;
                        const techStack = codeNode.data
                            .techStack;
                        const codeValue = toString$4(codeNode).trim();
                        const parseOpts = {
                            id: '',
                            refAtomIds: vFile.data.frontmatter.atomId
                                ? [vFile.data.frontmatter.atomId]
                                : [],
                            fileAbsPath: '',
                            entryPointCode: codeType === 'external' ? undefined : codeValue,
                            resolver: opts.resolver,
                        };
                        const previewerProps = {};
                        let component = '';
                        if (codeType === 'external') {
                            const chunkName = [vFile.data.frontmatter.atomId, 'demos']
                                .filter(Boolean)
                                .join('__');
                            // external demo options
                            parseOpts.fileAbsPath = winPath(codeNode.properties.src);
                            parseOpts.id = getCodeId(opts.cwd, opts.fileAbsPath, path.parse(parseOpts.fileAbsPath.replace(/\/index\.(j|t)sx?$/, '')).name, vFile.data.frontmatter.atomId);
                            component = `React.lazy(() => import( /* webpackChunkName: "${chunkName}" */ '${winPath(parseOpts.fileAbsPath)}?techStack=${techStack.name}'))`;
                            // use code value as title
                            // TODO: force checking
                            if (codeValue)
                                codeNode.properties.title = codeValue;
                            (_a = (_b = codeNode.properties).filename) !== null && _a !== void 0 ? _a : (_b.filename = winPath(path.relative(opts.cwd, parseOpts.fileAbsPath)));
                        }
                        else {
                            // pass a fake entry point for code block demo
                            // and pass the real code via `entryPointCode` option
                            parseOpts.fileAbsPath = opts.fileAbsPath.replace('.md', '.tsx');
                            parseOpts.id = getCodeId(opts.cwd, opts.fileAbsPath, String(index++), vFile.data.frontmatter.atomId);
                            component = techStack.transformCode(codeValue, {
                                type: 'code-block',
                                fileAbsPath: parseOpts.fileAbsPath,
                            });
                        }
                        const propDemo = { id: parseOpts.id };
                        // generate asset data for demo
                        deferrers.push(parseBlockAsset(parseOpts).then(async ({ asset, sources, frontmatter }) => {
                            var _a, _b;
                            // eslint-disable-next-line @typescript-eslint/no-unused-vars
                            const { src, className, ...restAttrs } = codeNode.properties || {};
                            const validAssetAttrs = [
                                'title',
                                'snapshot',
                                'keywords',
                            ];
                            const techStackOpts = {
                                type: codeType,
                                mdAbsPath: opts.fileAbsPath,
                                fileAbsPath: codeType === 'external'
                                    ? parseOpts.fileAbsPath
                                    : undefined,
                                entryPointCode: parseOpts.entryPointCode,
                            };
                            // transform empty string attr to boolean, such as `debug`, `iframe` & etc.
                            Object.keys(restAttrs).forEach((key) => {
                                if (restAttrs[key] === '')
                                    restAttrs[key] = true;
                            });
                            // update previewer props after parse
                            const originalProps = Object.assign({}, frontmatter, restAttrs);
                            // copy valid props for asset
                            validAssetAttrs.forEach((key) => {
                                if (originalProps[key])
                                    asset[key] = originalProps[key];
                            });
                            // do not generate previewer props & asset for inline demo
                            if (/ inline/.test(String((_a = codeNode.data) === null || _a === void 0 ? void 0 : _a.meta)) ||
                                originalProps.inline) {
                                // HINT: must keep the reference
                                propDemo.inline = true;
                                return {
                                    // TODO: special id for inline demo
                                    id: asset.id,
                                    component,
                                };
                            }
                            // HINT: must use `Object.assign` to keep the reference
                            Object.assign(previewerProps, (await ((_b = techStack.generatePreviewerProps) === null || _b === void 0 ? void 0 : _b.call(techStack, originalProps, techStackOpts))) || originalProps);
                            // md to string for asset metadata
                            // md to html for previewer props
                            if (previewerProps.description) {
                                const { unified } = await import('unified');
                                const { default: remarkParse } = await import('remark-parse');
                                const { default: remarkGfm } = await import('remark-gfm');
                                const { default: remarkRehype } = await import('remark-rehype');
                                const { default: rehypeStringify } = await import('rehype-stringify');
                                const { convert } = require('html-to-text');
                                const result = await unified()
                                    .use(remarkParse)
                                    .use(remarkGfm)
                                    .use(remarkRehype, { allowDangerousHtml: true })
                                    .use(rehypeStringify, { allowDangerousHtml: true })
                                    .process(previewerProps.description);
                                previewerProps.description = String(result.value);
                                asset.description = convert(result.value, {
                                    wordwrap: false,
                                });
                            }
                            // return demo data
                            return {
                                id: asset.id,
                                component,
                                asset: techStack.generateMetadata
                                    ? await techStack.generateMetadata(asset, techStackOpts)
                                    : asset,
                                sources: techStack.generateSources
                                    ? await techStack.generateSources(sources, techStackOpts)
                                    : sources,
                            };
                        }));
                        // save into demos property
                        demosPropData.push({
                            demo: propDemo,
                            previewerProps,
                        });
                    }
                });
                // replace original node, and save it for parse the final real jsx attributes after all deferrers resolved
                // because the final `previewerProps` depends on the async parse result from `parseBlockAsset`
                // but visitor always sync
                replaceNodes.push(node);
                node.children = [];
                if (demosPropData.length === 1) {
                    // single demo
                    node.tagName = DUMI_DEMO_TAG;
                    node.data[DEMO_PROP_VALUE_KEY] = demosPropData[0];
                    node.JSXAttributes = [{ type: 'JSXSpreadAttribute', argument: '' }];
                }
                else {
                    // grid demo
                    node.tagName = DUMI_DEMO_GRID_TAG;
                    node.data[DEMO_PROP_VALUE_KEY] = demosPropData;
                    node.JSXAttributes = [
                        { type: 'JSXAttribute', name: 'items', value: '' },
                    ];
                }
                return SKIP$2;
            }
        });
        // wait for asset data be generated
        await Promise.all(deferrers).then((demos) => {
            // to make sure the order of demos is correct
            vFile.data.demos = demos;
            // parse final value for jsx attributes
            replaceNodes.forEach((node) => {
                const value = JSON.stringify(node.data[DEMO_PROP_VALUE_KEY]);
                if (node.JSXAttributes[0].type === 'JSXAttribute') {
                    node.JSXAttributes[0].value = value;
                }
                else {
                    node.JSXAttributes[0].argument = value;
                }
            });
        });
    };
}

let visit$a;
let EXIT;
let toString$3;
(async () => {
    ({ visit: visit$a, EXIT } = await Promise.resolve().then(function () { return require('./chunks/dep-923c10ef.js'); }));
    ({ toString: toString$3 } = await import('hast-util-to-string'));
})();
/**
 * rehype plugin for extract fallback description from markdown content
 */
function rehypeDesc() {
    return async (tree, vFile) => {
        var _a;
        // skip if user has defined description
        if (!((_a = vFile.data.frontmatter) === null || _a === void 0 ? void 0 : _a.description)) {
            visit$a(tree, 'element', (node) => {
                if (node.tagName === 'p') {
                    const text = toString$3(node).trim();
                    if (text && vFile.data.frontmatter) {
                        vFile.data.frontmatter.description = text;
                        return EXIT;
                    }
                }
            });
        }
    };
}

let visit$9;
let isElement;
let toString$2;
(async () => {
    ({ visit: visit$9 } = await Promise.resolve().then(function () { return require('./chunks/dep-923c10ef.js'); }));
    ({ isElement } = await Promise.resolve().then(function () { return require('./chunks/dep-5205d196.js'); }));
    ({ toString: toString$2 } = await import('hast-util-to-string'));
})();
function rehypeEnhancedTag() {
    return async (tree) => {
        visit$9(tree, 'element', (node, i, parent) => {
            var _a, _b, _c;
            if (
            // node.tagName === 'pre' &&
            isElement((_a = node.children) === null || _a === void 0 ? void 0 : _a[0]) &&
                node.children[0].tagName === 'code') {
                const className = (((_b = node.children[0].properties) === null || _b === void 0 ? void 0 : _b.className) ||
                    []);
                const lang = (_c = className.join('').match(/language-(\w+)(?:$| )/)) === null || _c === void 0 ? void 0 : _c[1];
                parent.children.splice(i, 1, {
                    type: 'element',
                    tagName: 'SourceCode',
                    properties: { lang },
                    children: [
                        {
                            type: 'text',
                            value: toString$2(node.children[0]),
                        },
                    ],
                });
            }
            else if (node.tagName === 'table') {
                // use enhanced Table component
                node.tagName = 'ApiTable';
            }
            else if (node.tagName === 'style') {
                // use dangerouslySetInnerHTML for style tag, to avoid HTML entities be escaped
                node.JSXAttributes = [
                    {
                        type: 'JSXAttribute',
                        name: 'dangerouslySetInnerHTML',
                        value: JSON.stringify({
                            __html: toString$2(node),
                        }),
                    },
                ];
                node.children = [];
            }
        });
    };
}

let visit$8;
// workaround to import pure esm module
(async () => {
    ({ visit: visit$8 } = await Promise.resolve().then(function () { return require('./chunks/dep-923c10ef.js'); }));
})();
function isRelativeUrl(url) {
    return (!url.startsWith('data:image') &&
        !/^((blob:)?\w+:)?\/\//.test(url) &&
        !path.isAbsolute(url));
}
/**
 * rehype plugin to handle img source from local
 */
function rehypeImg() {
    return (tree) => {
        visit$8(tree, 'element', (node) => {
            var _a;
            if (node.tagName === 'img' && typeof ((_a = node.properties) === null || _a === void 0 ? void 0 : _a.src) === 'string') {
                const src = node.properties.src.trim();
                if (src && isRelativeUrl(src)) {
                    delete node.properties.src;
                    node.JSXAttributes = [
                        {
                            type: 'JSXAttribute',
                            name: 'src',
                            value: `require('${decodeURI(src)}')`,
                        },
                    ];
                }
            }
        });
    };
}

let visit$7;
// workaround to import pure esm module
(async () => {
    ({ visit: visit$7 } = await Promise.resolve().then(function () { return require('./chunks/dep-923c10ef.js'); }));
})();
/**
 * Checks if `node` is a demo node
 */
function isDemoNode(node) {
    return ['DumiDemo', 'DumiDemoGrid'].includes(node.tagName);
}
/**
 * Checks if `node` is a reactComponent
 */
function isReactComponent(node) {
    // FIXME: exclude Link, and read from themeData
    return /^[A-Z].+/.test(node.tagName);
}
function rehypeIsolation() {
    return (tree) => {
        visit$7(tree, 'root', (node) => {
            node.children = node.children.reduce((nextChildren, current) => {
                var _a, _b;
                let prevSibling = nextChildren[nextChildren.length - 1];
                if (isDemoNode(current)) {
                    // Do nothing if current node is a demo node
                    nextChildren.push(current);
                }
                else if (
                // <p><Test></Test></p> or <Test></Test>
                (current.tagName === 'p' &&
                    ((_a = current.children) === null || _a === void 0 ? void 0 : _a.length) === 1 &&
                    isReactComponent(current.children[0])) ||
                    isReactComponent(current)) {
                    // solo for user custom component
                    nextChildren.push(current.tagName === 'p'
                        ? (_b = current.children) === null || _b === void 0 ? void 0 : _b[0]
                        : current);
                }
                else {
                    // Ensure the previous sibling is a wrapper element node
                    // So that dumi could append the current node into wrapper
                    if (!prevSibling ||
                        isDemoNode(prevSibling) ||
                        isReactComponent(prevSibling)) {
                        prevSibling = {
                            type: 'element',
                            tagName: 'div',
                            properties: { className: ['markdown'] },
                            children: [],
                        };
                        nextChildren.push(prevSibling);
                    }
                    prevSibling.children.push(current);
                }
                return nextChildren;
            }, []);
        });
    };
}

// import type { JSXElement } from '@umijs/bundler-utils/compiled/@babel/types';
let visitUnist;
let visitEstree;
let toEstree;
let toJs;
let jsx;
const JSX_PROP_PREFIX = '$jsx-prop-';
const JSX_SPREAD_PROP_PREFIX = '$jsx-spread-prop-';
// workaround to import pure esm module
(async () => {
    ({ visit: visitUnist } = await Promise.resolve().then(function () { return require('./chunks/dep-923c10ef.js'); }));
    ({ visit: visitEstree } = await import('estree-util-visit'));
    ({ toEstree } = await import('hast-util-to-estree'));
    ({ toJs, jsx } = await import('estree-util-to-js'));
})();
function getJSXAttrAST(node) {
    const tmpCode = `<a ${node.type === 'JSXAttribute'
        ? `${node.name}={${node.value}}`
        : `{...${node.argument}}`} />`;
    // why babel rather than swc?
    // because babel support to return the standard estree
    const ast = parser__namespace.parseExpression(tmpCode, {
        plugins: ['jsx', 'estree'],
    });
    return ast.openingElement.attributes[0];
}
function rehypeJsxify() {
    this.Compiler = function Compiler(ast) {
        // stub JSX attributes to object properties
        visitUnist(ast, 'element', (node) => {
            var _a;
            (_a = node.JSXAttributes) === null || _a === void 0 ? void 0 : _a.forEach((attr, i) => {
                var _a;
                (_a = node.properties) !== null && _a !== void 0 ? _a : (node.properties = {});
                if (attr.type === 'JSXAttribute') {
                    node.properties[`${JSX_PROP_PREFIX}${attr.name}`] = attr.value;
                }
                else if (attr.type === 'JSXSpreadAttribute') {
                    node.properties[`${JSX_SPREAD_PROP_PREFIX}${i}`] = attr.argument;
                }
            });
        });
        // hast to estree, will strip original `JSXAttributes` property
        const esTree = toEstree(ast, {
            handlers: {
                text: function text(node) {
                    var _a;
                    const value = String(node.value || '');
                    if (!value)
                        return null;
                    return {
                        type: 'JSXExpressionContainer',
                        expression: ((_a = node.data) === null || _a === void 0 ? void 0 : _a.expression) || {
                            type: 'Literal',
                            value,
                        },
                    };
                },
            },
        });
        // transform stub JSX attributes to ast JSX attributes
        visitEstree(esTree, (node) => {
            var _a, _b;
            const isStubJSXAttr = node.type === 'JSXAttribute' &&
                'name' in node &&
                String(node.name.name).startsWith(JSX_PROP_PREFIX);
            const isStubJSXSpreadAttr = node.type === 'JSXAttribute' &&
                'name' in node &&
                String(node.name.name).startsWith(JSX_SPREAD_PROP_PREFIX);
            if (isStubJSXAttr && ((_a = node.value) === null || _a === void 0 ? void 0 : _a.type) === 'Literal') {
                // get JSX attribute ast, and replace original node
                const name = String(node.name.name).slice(JSX_PROP_PREFIX.length);
                const ast = getJSXAttrAST({
                    type: 'JSXAttribute',
                    name,
                    value: String(node.value.value),
                });
                node.type = ast.type;
                node.name = ast.name;
                node.value = ast.value;
            }
            else if (isStubJSXSpreadAttr && ((_b = node.value) === null || _b === void 0 ? void 0 : _b.type) === 'Literal') {
                // get JSX spread attribute ast, and replace original node
                const ast = getJSXAttrAST({
                    type: 'JSXSpreadAttribute',
                    argument: String(node.value.value),
                });
                const copy = node;
                copy.type = ast.type;
                copy.argument = ast.argument;
                delete copy.name;
                delete copy.value;
            }
        });
        // estree to jsx string, and strip the last semicolon
        return toJs(esTree, { handlers: jsx }).value.trim().slice(0, -1);
    };
}

let raw;
let visit$6;
const COMPONENT_NAME_REGEX = /<[A-Z][a-zA-Z\d]*/g;
const COMPONENT_PROP_REGEX = /\s[a-z][a-z\d]*[A-Z]+[a-zA-Z\d]*(=|\s|>)/g;
const COMPONENT_STUB_ATTR = '$tag-name';
const PROP_STUB_ATTR = '-$u';
const PROP_STUB_ATTR_REGEX = new RegExp(`${PROP_STUB_ATTR.replace('$', '\\$')}[a-z]`, 'g');
const CODE_META_STUB_ATTR = '$code-meta';
// workaround to import pure esm module
(async () => {
    ({ visit: visit$6 } = await Promise.resolve().then(function () { return require('./chunks/dep-923c10ef.js'); }));
    ({ raw } = await Promise.resolve().then(function () { return require('./chunks/dep-0c91d723.js'); }));
})();
function rehypeRaw(opts) {
    return (tree, vFile) => {
        visit$6(tree, (node) => {
            var _a, _b;
            if (node.type === 'raw' && COMPONENT_NAME_REGEX.test(node.value)) {
                // mark tagName for all custom react component
                // because the parse5 within hast-util-raw will lowercase all tag names
                node.value = node.value.replace(COMPONENT_NAME_REGEX, (str) => {
                    const tagName = str.slice(1);
                    return `${str} ${COMPONENT_STUB_ATTR}="${tagName}"`;
                });
                // mark all camelCase props for all custom react component
                // because the parse5 within hast-util-raw will lowercase all attr names
                node.value = node.value.replace(COMPONENT_PROP_REGEX, (str) => {
                    return str.replace(/[A-Z]/g, (s) => `${PROP_STUB_ATTR}${s.toLowerCase()}`);
                });
            }
            else if (node.type === 'element' && ((_a = node.data) === null || _a === void 0 ? void 0 : _a.meta)) {
                // save code meta to properties to avoid lost
                // ref: https://github.com/syntax-tree/hast-util-raw/issues/13#issuecomment-912451531
                (_b = node.properties) !== null && _b !== void 0 ? _b : (node.properties = {});
                node.properties[CODE_META_STUB_ATTR] = node.data.meta;
            }
            if (node.type === 'raw' && /<code[^>]*src=[^>]*\/>/.test(node.value)) {
                console.warn(`<code /> is not supported, please use <code></code> instead.
File: ${opts.fileAbsPath}`);
            }
        });
        const newTree = raw(tree, vFile);
        visit$6(newTree, 'element', (node) => {
            var _a, _b;
            if ((_a = node.properties) === null || _a === void 0 ? void 0 : _a[COMPONENT_STUB_ATTR]) {
                // restore tagName for all custom react component
                node.tagName = node.properties[COMPONENT_STUB_ATTR];
                delete node.properties[COMPONENT_STUB_ATTR];
            }
            else if ((_b = node.properties) === null || _b === void 0 ? void 0 : _b[CODE_META_STUB_ATTR]) {
                // restore meta data for code element
                node.data = { meta: node.properties[CODE_META_STUB_ATTR] };
                delete node.properties[CODE_META_STUB_ATTR];
            }
            // restore all camelCase props
            Object.keys(node.properties || {}).forEach((p) => {
                if (PROP_STUB_ATTR_REGEX.test(p)) {
                    const originalName = p.replace(PROP_STUB_ATTR_REGEX, (s) => s.slice(PROP_STUB_ATTR.length).toUpperCase());
                    node.properties[originalName] = node.properties[p];
                    // compatible legacy usage
                    node.properties[originalName.toLowerCase()] = node.properties[p];
                    delete node.properties[p];
                }
            });
        });
        return newTree;
    };
}

let visit$5;
let toString$1;
// workaround to import pure esm module
(async () => {
    ({ visit: visit$5 } = await Promise.resolve().then(function () { return require('./chunks/dep-923c10ef.js'); }));
    ({ toString: toString$1 } = await import('hast-util-to-string'));
})();
const HEADING_TAGS = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
function rehypeSlug() {
    return async (tree, vFile) => {
        const slugger = await import('github-slugger');
        vFile.data.toc = [];
        visit$5(tree, 'element', (node) => {
            var _a, _b;
            if (HEADING_TAGS.includes(node.tagName)) {
                // handle headings in current doc
                const title = toString$1({
                    type: 'element',
                    tagName: node.tagName,
                    // discard text within Badge tag
                    children: node.children.filter((child) => child.type !== 'element' || child.tagName !== 'Badge'),
                }).trim();
                const depth = Number(node.tagName.slice(1));
                const id = slugger.slug(title);
                // add slug to heading node
                node.properties.id = id;
                // add heading node to toc
                vFile.data.toc.push({ id, depth, title });
            }
            else if ([DUMI_DEMO_TAG, DUMI_DEMO_GRID_TAG].includes(node.tagName) &&
                ((_a = node.data) === null || _a === void 0 ? void 0 : _a[DEMO_PROP_VALUE_KEY])) {
                // handle toc from demos
                const demos = [].concat((_b = node.data) === null || _b === void 0 ? void 0 : _b[DEMO_PROP_VALUE_KEY]);
                demos.forEach(({ demo, previewerProps }) => {
                    var _a, _b;
                    // do not collect inline demo & no title demo
                    if (!demo.inline && previewerProps.title) {
                        vFile.data.toc.push({
                            id: slugger.slug(demo.id),
                            depth: ((_b = (_a = vFile.data.frontmatter) === null || _a === void 0 ? void 0 : _a.demo) === null || _b === void 0 ? void 0 : _b.tocDepth) || 3,
                            title: previewerProps.title,
                            // put debug flag to control hide/show in toc
                            ...(previewerProps.debug ? { _debug_demo: true } : {}),
                        });
                    }
                });
            }
        });
    };
}

let visit$4;
let SKIP$1;
// workaround to import pure esm module
(async () => {
    ({ visit: visit$4, SKIP: SKIP$1 } = await Promise.resolve().then(function () { return require('./chunks/dep-923c10ef.js'); }));
})();
function rehypeStrip() {
    return (tree) => {
        visit$4(tree, 'text', (node, index, parent) => {
            // strip all useless break line node, it is means nothing for HTML
            if (/^[\n\r]+$/.test(node.value)) {
                parent === null || parent === void 0 ? void 0 : parent.children.splice(index, 1);
                // skip and re-visit current index
                return [SKIP$1, index];
            }
        });
    };
}

const CONTENT_TEXTS_OBJ_NAME = '$$contentTexts';
let visit$3;
// workaround to import pure esm module
(async () => {
    ({ visitParents: visit$3 } = await Promise.resolve().then(function () { return require('./chunks/dep-11d3cf54.js'); }));
})();
function findParagraphAncestor(ancestors) {
    for (let i = ancestors.length - 1; i >= 0; i--) {
        const node = ancestors[i];
        if ((node.type === 'element' &&
            (['p', 'ul', 'ol'].includes(node.tagName) || isReactComponent(node))) ||
            node.type === 'root') {
            return node;
        }
    }
}
function findClosestTitle(ancestors, node) {
    for (let i = ancestors.length - 1; i >= 0; i--) {
        const parent = ancestors[i];
        const current = ancestors[i + 1] || node;
        // find ancestor siblings from ancestor position to start
        for (let i = parent.children.indexOf(current) - 1; i >= 0; i--) {
            const child = parent.children[i];
            if (child.type === 'element' && HEADING_TAGS.includes(child.tagName)) {
                return child;
            }
        }
    }
}
function rehypeText() {
    return (tree, vFile) => {
        let textId = 0;
        let paraId = 0;
        vFile.data.texts = [];
        visit$3(tree, 'text', (node, ancestors) => {
            var _a, _b, _c, _d;
            var _e;
            const parent = ancestors[ancestors.length - 1];
            // skip text in heading, because heading is already collected in toc data
            if (parent.type !== 'element' || !HEADING_TAGS.includes(parent.tagName)) {
                const paraNode = findParagraphAncestor(ancestors);
                const titleNode = paraNode.type === 'element' && findClosestTitle(ancestors, paraNode);
                let tocIndex = -1;
                // find title index in toc
                if (titleNode) {
                    tocIndex = vFile.data.toc.findIndex(({ id }) => { var _a; return id === ((_a = titleNode.properties) === null || _a === void 0 ? void 0 : _a.id); });
                }
                // generate paragraph id
                (_a = paraNode.data) !== null && _a !== void 0 ? _a : (paraNode.data = {});
                (_b = (_e = paraNode.data).id) !== null && _b !== void 0 ? _b : (_e.id = paraId++);
                // set member expression to text node
                node.data = {
                    expression: {
                        type: 'MemberExpression',
                        start: (_c = node.position) === null || _c === void 0 ? void 0 : _c.start,
                        end: (_d = node.position) === null || _d === void 0 ? void 0 : _d.end,
                        object: {
                            type: 'MemberExpression',
                            computed: true,
                            object: {
                                type: 'Identifier',
                                name: CONTENT_TEXTS_OBJ_NAME,
                            },
                            property: {
                                type: 'Literal',
                                value: textId++,
                            },
                        },
                        property: {
                            type: 'Identifier',
                            name: 'value',
                        },
                    },
                };
                // save text object in vFile
                vFile.data.texts.push({
                    value: node.value,
                    paraId: paraNode.data.id,
                    ...(tocIndex > -1 ? { tocIndex } : {}),
                });
            }
        });
    };
}

let visit$2;
let SKIP;
const VALID_CONTAINER_TYPES = ['info', 'warning', 'success', 'error'];
// workaround to import pure esm module
(async () => {
    ({ visit: visit$2, SKIP } = await Promise.resolve().then(function () { return require('./chunks/dep-923c10ef.js'); }));
})();
function remarkContainer() {
    const data = this.data();
    const micromarkExtensions = data.micromarkExtensions.find(({ flow, text }) => flow && '58' in flow && text && '58' in text);
    // disable textDirective & leafDirective from remark-directive
    // to avoid conflict with real colon symbol in markdown content
    delete micromarkExtensions.text;
    micromarkExtensions.flow['58'].splice(1, 1);
    return (tree) => {
        visit$2(tree, (node, i, parent) => {
            if (node.type === 'containerDirective' &&
                VALID_CONTAINER_TYPES.includes(node.name)) {
                const attrs = Object.entries(node.attributes || {}).reduce((ret, [name, value]) => `${ret} ${value ? `${name}="${value}"` : name}`, '');
                // replace directive node with container node
                parent.children.splice(i, 1, {
                    type: 'html',
                    value: `<Container type="${node.name}"${attrs}>`,
                    position: node.position,
                }, ...(node.children || []).concat({
                    type: 'html',
                    value: '</Container>',
                }));
                return SKIP;
            }
        });
    };
}

const EMBED_OPEN_TAG = '<embed ';
const EMBED_CLOSE_TAG = '</embed>';
let unified;
let remarkParse;
let remarkFrontmatter;
let remarkDirective;
let remarkGfm;
let visit$1;
// workaround to import pure esm module
(async () => {
    ({ visitParents: visit$1 } = await Promise.resolve().then(function () { return require('./chunks/dep-11d3cf54.js'); }));
    ({ unified } = await import('unified'));
    ({ default: remarkParse } = await import('remark-parse'));
    ({ default: remarkFrontmatter } = await import('remark-frontmatter'));
    ({ default: remarkDirective } = await import('remark-directive'));
    ({ default: remarkGfm } = await import('remark-gfm'));
})();
/**
 * remark plugin to replace relative src path
 */
function remarkReplaceSrc(opts) {
    function getEmbedRltPath(value) {
        const { fileAbsPath, parentAbsPath } = opts;
        const absPath = path.resolve(fileAbsPath, '..', value);
        return (winPath(path.relative(path.dirname(parentAbsPath), absPath))
            // add leading ./
            .replace(/^([^.])/, './$1'));
    }
    return (ast) => {
        visit$1(ast, ['html', 'image', 'link'], (node) => {
            switch (node.type) {
                // transform src for code & img, href for a, to the new relative path from parent file
                case 'html':
                    if (/^<(code|img|a)[^>]+(src|href)=('|")\.\.?\//.test(node.value)) {
                        node.value = node.value.replace(/(src|href)=("|')([^]+?)\2/, (_, tag, quote, value) => `${tag}=${quote}${getEmbedRltPath(value)}${quote}`);
                    }
                    break;
                // transform url for markdown image & link, to the new relative path from parent file
                case 'image':
                case 'link':
                    if (/^\.\.?\//.test(node.url)) {
                        node.url = getEmbedRltPath(node.url);
                    }
                    break;
            }
        });
    };
}
/**
 * remark compiler to return raw ast
 */
function remarkRawAST() {
    this.Compiler = function Compiler(ast) {
        // remove yaml node, to avoid override parent file frontmatter
        visit$1(ast, 'yaml', (node, ancestors) => {
            const parent = ancestors[ancestors.length - 1];
            ancestors[ancestors.length - 1].children.splice(parent.children.indexOf(node), 1);
        });
        return ast;
    };
}
function remarkEmbed(opts) {
    const resolver = enhancedResolve.create.sync({
        extensions: ['.md'],
        alias: opts.alias,
    });
    return (tree, vFile) => {
        // initialize field
        vFile.data.embeds = [];
        visit$1(tree, 'html', (node, ancestors) => {
            var _a;
            if (node.value.startsWith(EMBED_OPEN_TAG)) {
                let relatedNodeCount = 1;
                const parent = ancestors[ancestors.length - 1];
                const grandParent = ancestors[ancestors.length - 2];
                const i = parent.children.indexOf(node);
                const src = (_a = node.value.match(/src=("|')([^"']+)\1/)) === null || _a === void 0 ? void 0 : _a[2];
                if (src) {
                    const parsed = url.parse(src);
                    const hash = decodeURIComponent(parsed.hash || '').replace('#', '');
                    const absPath = resolver(path.dirname(opts.fileAbsPath), parsed.pathname);
                    let content = fs.readFileSync(absPath, 'utf-8');
                    // extract content by hash (line range or regexp)
                    if (hash.startsWith('L')) {
                        content = getFileRangeLines(content, hash);
                    }
                    else if (hash.startsWith('RE-')) {
                        content = getFileContentByRegExp(content, hash.slice(3), absPath);
                    }
                    // parse partial content to mdast
                    const { result: mdast, data: { embeds }, } = unified()
                        .use(remarkParse)
                        // for nested embed
                        .use(remarkEmbed, { ...opts, fileAbsPath: absPath })
                        // for strip frontmatter
                        .use(remarkFrontmatter)
                        // apply directive & gfm plugin
                        // why not re-use parent processor?
                        // because directive & gfm is affect on micromark core parser rather than ast
                        // and if they are not applied, the embed ast will be wrong
                        .use(remarkDirective)
                        .use(remarkGfm)
                        // for update relative src path
                        .use(remarkReplaceSrc, {
                        fileAbsPath: absPath,
                        parentAbsPath: opts.fileAbsPath,
                    })
                        // for return raw ast
                        .use(remarkRawAST)
                        .processSync(content);
                    // find the closing tag if there has other nodes between embed tags
                    if (!node.value.endsWith(EMBED_CLOSE_TAG)) {
                        for (let j = i; j < parent.children.length; j++) {
                            const sibling = parent.children[j];
                            const isCloseTag = sibling.type === 'html' && sibling.value === EMBED_CLOSE_TAG;
                            if (isCloseTag) {
                                relatedNodeCount += j - i;
                                break;
                            }
                            else if (j === parent.children.length - 1) {
                                throw new Error(`Missing close tag for \`${node.value}\``);
                            }
                        }
                    }
                    // replace embed tag's parent with new nodes
                    const newParentNodes = [
                        ...mdast.children,
                    ];
                    const before = parent.children.slice(0, i);
                    const after = parent.children.slice(i + relatedNodeCount);
                    // extract to a before paragraph for all children that before embed tag
                    if (before.length) {
                        newParentNodes.unshift({
                            type: 'paragraph',
                            children: before,
                        });
                    }
                    // extract to an after paragraph for all children that before embed tag
                    if (after.length) {
                        newParentNodes.push({
                            type: 'paragraph',
                            children: after,
                        });
                    }
                    // replace parent
                    grandParent.children.splice(grandParent.children.indexOf(parent), 1, ...newParentNodes);
                    // record embed file path for declare loader dependency
                    vFile.data.embeds.push(...[absPath].concat(embeds));
                }
            }
        });
    };
}

// import { getTabKeyFromFile, isTabRouteFile } from '@/features/tabs';
let visit;
let toString;
// workaround to import pure esm module
(async () => {
    ({ visit } = await Promise.resolve().then(function () { return require('./chunks/dep-923c10ef.js'); }));
    ({ toString } = await Promise.resolve().then(function () { return require('./chunks/dep-4b887f49.js'); }).then(function (n) { return n.index; }));
})();
/**
 * guess atom id from filename
 */
function getGuessAtomId(opts) {
    const parsed = path.parse(opts.fileAbsPath);
    // strip modifier from markdown filename, such as $tab-xx, zh-CN & etc.
    const clearFileName = parsed.name.replace(/(?:\.$tab-[^.]+)?(?:\.[^.]+)?(\.[^.]+)$/, '$1');
    // find same name component file
    const atomFile = ['.tsx', '.jsx']
        .map((ext) => path.join(parsed.dir, `${clearFileName}${ext}`))
        .find(fs.existsSync);
    if (atomFile) {
        // generate absolute atom resolve dir
        const atomAbsDir = opts.resolve.atomDirs
            .map(({ dir }) => path.resolve(opts.cwd, dir))
            .sort((a, b) => b.split('/').length - a.split('/').length)
            .find((dir) => atomFile.startsWith(dir));
        // only collect atom files within atom resolve dir
        if (atomAbsDir) {
            return winPath(path.relative(atomAbsDir, atomFile)).replace(/((^|\/)index)?\.\w+$/, '');
        }
    }
}
function remarkMeta(opts) {
    return (tree, vFile) => {
        const guessAtomId = getGuessAtomId(opts);
        // initialize frontmatter
        vFile.data.frontmatter = {
            title: '',
            toc: 'menu',
            filename: winPath(path.relative(opts.cwd, opts.fileAbsPath)),
            ...(guessAtomId && { atomId: guessAtomId }),
        };
        // read frontmatter
        visit(tree, 'yaml', (node) => {
            try {
                Object.assign(vFile.data.frontmatter, yaml.load(node.value));
            }
            catch { }
        });
        // create title readers
        const titleReaders = [
            // use first heading as title
            () => {
                visit(tree, 'heading', (node) => {
                    if (node.depth === 1) {
                        vFile.data.frontmatter.title = toString(node.children);
                    }
                });
            },
            // use filename as title
            () => {
                // if (isTabRouteFile(opts.fileAbsPath)) {
                //   vFile.data.frontmatter!.title = lodash.startCase(
                //     getTabKeyFromFile(opts.fileAbsPath),
                //   );
                // } else {
                const pathWithoutIndex = opts.fileAbsPath.replace(/(\/index([^/]+)?)?\.md$/, '');
                vFile.data.frontmatter.title = lodash.startCase(path.basename(pathWithoutIndex));
                // }
            },
        ];
        // set title
        while (!vFile.data.frontmatter.title && titleReaders.length) {
            titleReaders.shift()();
        }
    };
}

// import type { IParsedBlockAsset } from '@/assetParsers/block';
function applyUnifiedPlugin(opts) {
    const [plugin, options] = Array.isArray(opts.plugin)
        ? opts.plugin
        : [opts.plugin];
    const mod = typeof plugin === 'function'
        ? plugin
        : require(require.resolve(plugin, { paths: [opts.cwd] }));
    const fn = mod.default || mod;
    opts.processor.use(fn, options);
}
var transform = async (raw, opts) => {
    var _a, _b;
    const { unified } = await import('unified');
    const { default: remarkParse } = await import('remark-parse');
    const { default: remarkFrontmatter } = await import('remark-frontmatter');
    const { default: remarkDirective } = await import('remark-directive');
    const { default: remarkBreaks } = await import('remark-breaks');
    const { default: remarkGfm } = await import('remark-gfm');
    const { default: remarkRehype } = await import('remark-rehype');
    const { default: rehypeAutolinkHeadings } = await import('rehype-autolink-headings');
    const { default: rehypeRemoveComments } = await import('rehype-remove-comments');
    const resolver = enhancedResolve.create.sync({
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        alias: opts.alias,
    });
    const processor = unified()
        .use(remarkParse)
        .use(remarkEmbed, { fileAbsPath: opts.fileAbsPath, alias: opts.alias })
        .use(remarkFrontmatter)
        .use(remarkMeta, {
        cwd: opts.cwd,
        fileAbsPath: opts.fileAbsPath,
        resolve: opts.resolve,
    })
        .use(remarkDirective)
        .use(remarkContainer)
        .use(remarkBreaks)
        .use(remarkGfm);
    // // apply extra remark plugins
    (_a = opts.extraRemarkPlugins) === null || _a === void 0 ? void 0 : _a.forEach((plugin) => applyUnifiedPlugin({
        plugin,
        processor,
        cwd: opts.cwd,
    }));
    // apply internal rehype plugins
    processor
        .use(remarkRehype, { allowDangerousHtml: true })
        .use(rehypeRaw, {
        fileAbsPath: opts.fileAbsPath,
    })
        .use(rehypeRemoveComments, { removeConditional: true })
        .use(rehypeStrip)
        .use(rehypeImg)
        .use(rehypeDemo, {
        techStacks: opts.techStacks,
        cwd: opts.cwd,
        fileAbsPath: opts.fileAbsPath,
        resolve: opts.resolve,
        resolver,
    })
        .use(rehypeSlug)
        // .use(rehypeLink, {
        //   fileAbsPath: opts.fileAbsPath,
        //   routes: opts.routes,
        // })
        .use(rehypeAutolinkHeadings)
        .use(rehypeIsolation)
        .use(rehypeEnhancedTag)
        .use(rehypeDesc)
        // collect all texts for content search, must be the last rehype plugin
        .use(rehypeText);
    // apply extra rehype plugins
    (_b = opts.extraRehypePlugins) === null || _b === void 0 ? void 0 : _b.forEach((plugin) => applyUnifiedPlugin({
        plugin,
        processor,
        cwd: opts.cwd,
    }));
    const result = await processor.use(rehypeJsxify).process(raw);
    return {
        content: String(result.value),
        meta: result.data,
    };
};

// import { isTabRouteFile } from '@/features/tabs';
function getDemoSourceFiles(demos = []) {
    return demos.reduce((ret, demo) => {
        if ('sources' in demo) {
            ret.push(...Object.values(demo.sources));
        }
        return ret;
    }, []);
}
function emit(opts, ret) {
    const { demos, embeds, texts } = ret.meta;
    let componentsString = '';
    demos.forEach((demo) => {
        componentsString = `
      ${componentsString}
      '${demo.id}': ${demo.component},
    `;
    });
    // declare embedded files as loader dependency, for re-compiling when file changed
    embeds.forEach((file) => this.addDependency(file));
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
function getDepsCacheKey(deps = []) {
    return JSON.stringify(deps.map((file) => `${file}:${fs.statSync(file).mtimeMs}`));
}
const deferrer = {};
const depsMapping = {};
function mdLoader(content) {
    const opts = this.getOptions();
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
    }
    else if (cacheKey in deferrer) {
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
        ...lodash.omit(opts, ['mode', 'builtins', 'onResolveDemos']),
        fileAbsPath: winPath(this.resourcePath),
    });
    deferrer[cacheKey]
        .then((ret) => {
        // update deps mapping
        depsMapping[this.resourcePath] = ret.meta.embeds.concat(getDemoSourceFiles(ret.meta.demos));
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

exports.default = mdLoader;
