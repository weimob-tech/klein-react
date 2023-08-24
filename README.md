<h1 align="center">Klein Design</h1>

<div align="center">

服务于SaaS行业的设计系统，专注更好的用户体验

[![NPM version][npm-image]][npm-url]
[![NPM downloads][download-image]][download-url]
[![][bundlephobia-image]][bundlephobia-url]
[![][bundlesize-js-image]][unpkg-js-url]

[npm-image]: https://img.shields.io/npm/v/@klein-design/klein-react
[npm-url]: https://www.npmjs.com/package/@klein-design/klein-react
[download-image]: https://img.shields.io/npm/dm/@klein-design/klein-react.svg?style=flat-square
[download-url]: https://www.npmjs.com/package/@klein-design/klein-react
[bundlephobia-image]: https://badgen.net/bundlephobia/minzip/@klein-design/klein-react?style=flat-square
[bundlephobia-url]: https://bundlephobia.com/package/@klein-design/klein-react
[bundlesize-js-image]: https://img.badgesize.io/https:/unpkg.com/@klein-design/klein-react/dist/@klein-design/klein-react.min.js?label=kleinreact.min.js&compression=gzip&style=flat-square
[unpkg-js-url]: https://unpkg.com/browse/@klein-design/klein-react/dist/@klein-design/klein-react.min.js

</div>

## 🎯 介绍

从多年深耕SaaS行业实践中，我们抽象出了一套基础组件。在项目中覆盖了95%以上的页面，实现了1500+的前端页面无UI开发，前端交付质量也得到了大幅提升。同时在这些基础组件的设计上提供了细致的配置选项，以便开发者后续的拓展和定制。开发者可以根据具体需求进行灵活的配置，使组件库与开发者自身项目完美匹配，满足各种定制化的需求。

## ✨ 特性

- 🌈 涵盖了大多数saas业务需求，为开发者提供了丰富的选择。
- 📦 开箱即用的高质量 React 组件。
- 🛡 使用 TypeScript 开发，提供完整的类型定义文件。
- 🌍 国际化语言支持。
- 🎨 强大的主题定制能力。

## 🖥 兼容环境

- 现代浏览器。
- 支持服务端渲染。
- [Electron](https://www.electronjs.org/)

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/electron/electron_48x48.png" alt="Electron" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Electron |
| --- | --- | --- | --- | --- |
| Edge | last 2 versions | last 2 versions | last 2 versions | last 2 versions |

## 📦 安装

```bash
npm i @klein-design/klein-react --save
```

```bash
yarn add @klein-design/klein-react
```

## 🔨 示例

```jsx
import { useState } from "react";
import { Button } from "@klein-design/klein-react";
import "@klein-design/klein-react/dist/@klein-design/klein-react.min.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Button type="primary" onClick={() => setCount((count) => count + 1)}>
      count is {count}
    </Button>
  );
}

export default App;
```

## 🔗 链接

- [首页](https://klein.design.weimob.com)
- [所有组件](https://klein.design.weimob.com/components/button)
- [常见问题](https://klein.design.weimob.com/guide/q&a)
- [设计资源](https://klein.design.weimob.com/guide/resource)

## ⌨️ 本地开发

[开发指南](./dev.md)

## 👥 社区互助

如果您在使用的过程中碰到问题，可以通过下面几个途径寻求帮助。

通过 GitHub Discussions 提问时，建议使用 `Q&A` 标签。

[GitHub Discussions](https://github.com/weimob-tech/klein-react/issues)