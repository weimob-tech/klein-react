const assert = require('assert');
const path = require('path');
const fs = require('fs');

function camel2Dash(_str) {
  const str = _str[0].toLowerCase() + _str.substr(1);
  return str.replace(/([A-Z])/g, ($1) => `-${$1.toLowerCase()}`);
}

//输出组件md文件
function createMd(name, compPath) {
  // const mdPath = `${compPath}/${camel2Dash(name)}.md`;
  const mdPath = `${compPath}/index.md`;
  const content = `---
title: ${name} - ${name}
nav:
  title: 组件
  path: /components
group:
  path: /
---
# ${name} name

组件描述。

## 何时使用

- 组件在何时使用。

## 代码演示

### 基础示例

这里填写示例说明。

<code src="./demos/basic.tsx" background="#f0f2f5" />

## ${name}_API

| 参数 | 说明 | 类型 | 默认值 |
| :-- | :-- | :-- | :-- |

### `;
  fs.writeFileSync(mdPath, content);
}

//创建组件index.tsx文件
function createCompIndex(name, compPath) {
  const indexTsxPath = `${compPath}/index.tsx`;
  const content = `import ${name} from './${camel2Dash(name)}';

export default ${name};`;
  fs.writeFileSync(indexTsxPath, content);
}

//创建组件
function createComp(name, compPath) {
  const compTsxPath = `${compPath}/${camel2Dash(name)}.tsx`;
  const content = `import React from 'react';

export interface ${name}Props {
  /** 注释将自动更新至md文档的api描述部分 */
  title?: string
}

const ${name}: React.FC<${name}Props> = props => {

  return null
};

export default ${name};
  `;
  fs.writeFileSync(compTsxPath, content);
}

function createBasicDemo(name, demosPath) {
  const basicTsxPath = `${demosPath}/basic.tsx`;
  const content = `import React from 'react';
import { ${name} } from 'klein';

export default () => {
  return (
    <${name} />
  );
};
  `;
  fs.writeFileSync(basicTsxPath, content);
}

//创建style index.less
function createStyleIndex(name, stylePath) {
  const styleIndexJs = `${stylePath}/index.tsx`;
  const styleIndexLess = `${stylePath}/index.less`;
  const styleJsContent = `import './index.less';`;
  const styleLesscontent = `@import '../../style/index';`;
  fs.writeFileSync(styleIndexJs, styleJsContent);
  fs.writeFileSync(styleIndexLess, styleLesscontent);
}

//将输出代码添加至index.ts
function addToIndexTs(name) {
  const indexTs = path.resolve(process.cwd(), 'src/index.ts');
  const fileContent = fs.readFileSync(indexTs, {
    encoding: 'utf-8',
  });
  if (fileContent) {
    const moduleExports = fileContent.trim().split('\n');
    moduleExports.push(
      `export { default as ${name} } from './${camel2Dash(name)}';`,
    );
    fs.writeFileSync(indexTs, `${moduleExports.join('\n')}\n`);
  }
}

//创建组件文件
function addCompDirect(name) {
  const srcPath = path.resolve(process.cwd(), 'src');
  const compPath = `${srcPath}/${camel2Dash(name)}`;
  const demosPath = `${compPath}/demos`;
  const stylePath = `${compPath}/style`;

  assert(
    !fs.existsSync(compPath),
    `${name} has already exited, please choose another name.`,
  );
  fs.mkdirSync(compPath);
  fs.mkdirSync(demosPath);
  fs.mkdirSync(stylePath);

  createMd(name, compPath);
  createComp(name, compPath);
  createCompIndex(name, compPath);
  createBasicDemo(name, demosPath);
  createStyleIndex(name, stylePath);
}

function main() {
  const argv = process.argv;
  const compName = argv[2];
  assert(compName !== undefined, '请输入组件名称，如Button');

  try {
    addCompDirect(compName);
    addToIndexTs(compName);
    console.log('finished...');
  } catch (error) {
    throw new Error(error);
  }
}

main();
