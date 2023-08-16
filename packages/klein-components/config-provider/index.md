---
title: 全局配置 - ConfigProvider
nav:
  title: 组件
  path: /components
group:
  path: /
---

# 全局配置 ConfigProvider

用于全局配置语言，弹出式组件的挂载点，组件前缀等。

<!-- ## 何时使用

- 标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑 -->

### 基础示例

<!-- 这里填写示例说明 -->

<code src="./demos/basic.tsx"></code>

### Config.Provider

| 参数 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :----- |
| locale      | 国际化参数 | `string`  | -      |
| prefix      | 配置所有组件样式前缀 | `string`  | -      |
| getPopupContainer      | 配置弹出组件挂载点 | `((triggerNode?: HTMLElement) => HTMLElement)`\|` undefined`  | -      |
| size      | 配置元素大中小 | `"small"`\|` "medium"`\|` "large"`  | -      |
