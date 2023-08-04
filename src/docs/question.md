---
title: 常见问题
nav:
  title: 常见问题
  path: /question
group:
  title:
---

# 常见问题

在使用klein组件库时可能会遇到以下问题

### 在使用类似Select的组件时弹出框不随滚动条滚动

设置getPopupContainer属性将弹出层挂载到滚动的容器内即可

### DatePicker等日历选择器显示英文

首先在入口文件引入`import 'moment/locale/zh-cn'`，其次请保证本地moment.js版本为2.29.1

### 组件样式前缀是否支持自定义

支持，通过`ConfigProvider`全局替换组件样式前缀
```js
import { ConfigProvider } from "@wemo-ui/klein";

ReactDOM.render(
  <ConfigProvider prefix="weimob"><App /></ConfigProvider>,
  document.querySelector("#root")
);
```

### Popover, Tooltip, Popconfirm, Trigger 在包裹自定义组件时弹层无法显示？
可以在自定义组件外层包裹一个`div`元素
```js
<Tooltip>
  <div>
    <MyComponent />
  </div>
</Tooltip>
```

### 如何在webpack中定制主题
原理上是使用 less 提供的 modifyVars 的方法进行less变量的覆盖
```js
// webpack.config.js
module.exports = {
  rules: [{
    test: /\.less$/,
    use: [{
      loader: 'style-loader',
    }, {
      loader: 'css-loader',
    }, {
      loader: 'less-loader',
+     options: {
+       lessOptions: { // 如果使用less-loader@5，请移除 lessOptions 这一级直接配置选项
+         modifyVars: {
+           'brand-color': '#1DA57A',
+           'title-color': '#1DA57A',
+           'border-radius-basic': '2px',
+         },
+         javascriptEnabled: true,
+       },
+     },
    }],
    // ...other rules
  }],
  // ...other config
}
```





