---
title: 快速上手
nav:
  title: 快速上手
  path: /guide
group:
  title:
---

# 快速上手

以下为klein组件库的开发指南。

### 安装

请执行 `npm i react react-dom` 安装 `react >= 16.8` 和 `react-dom >= 16.8` 版本，建议使用 16 及 17 版本。

### 通过CDN使用

通过引入CDN地址来使用klein-react，不过我们不建议这样使用，因为通过CDN地址引入会加载全量的组件，影响页面响应速度。

### 基础使用

以Button组件为例。

```js
import React from "react";
import ReactDOM from "react-dom";
import { Button } from "@klein-design/klein-react";
import "@klein-design/klein-react/dist/@klein-design/klein.min.css";

ReactDOM.render(
  <Button type="primary">Hello Klein</Button>,
  document.querySelector("#root")
);
```

### 按需引入

#### 默认方式

@klein-design/klein-react 的组件默认支持 tree shaking, 使用 `import { Button } from '@klein-design/klein-react'`; 方式引入即可按需加载。

#### 配合babel-plugin-import实现按需引入

#### 安装

```js
npm i babel-plugin-import -D
```

#### 配置

在babel配置中加入。

```js
plugins: [
  [
    'babel-plugin-import',
    {
      libraryName: '@klein-design/klein-react',
      libraryDirectory: 'es',
      style: true, // 样式按需加载
    },
  ],
];
```
