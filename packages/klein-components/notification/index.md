---
title: 通知 - Notification
nav:
  title: 组件
  path: /components
group:
  title: 反馈
---

# 通知提醒框 Notification

全局消息通知、需要通知全局消息时使用

### 基础示例

基本用法，弹窗将在4.5s后自动关闭

<code src="./demos/basic.tsx"></code>

### 带有图标的通知

通知左侧带有图标

<code src="./demos/noti-type.tsx"></code>

### 带有边框颜色的通知

通知左侧带有边框颜色

<code src="./demos/noti-withBorder.tsx"></code>

### 带有默认按钮的通知

通知右下方带有按钮

<code src="./demos/noti-withBtn.tsx"></code>

### 自定义按钮的通知

自定义通知右下方的按钮

<code src="./demos/noti-customBtn.tsx"></code>

### 更新消息内容

通知弹窗的唯一标识key 来更新当前弹窗的内容

<code src="./demos/noti-withKey.tsx"></code>

### 不同方向弹出通知框

通过设置placement属性来控制通知框弹出位置

<code src="./demos/noti-withPlacement.tsx"></code>

### Notification Props

| 参数 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :----- |
| message      | 通知消息标题 | `string`  | -      |
| description      | 通知内容 | `string`  | -      |
| className      | 自定义样式类名 | `string`  | -      |
| showBtns      | 显示底部按钮 | `boolean`  | -      |
| btn      | 自定义按钮 | `ReactNode`  | -      |
| showColorBorder      | 是否显示左侧颜色边框 | `boolean`  | -      |
| insStyle      | 自定义通知弹出最外层内联样式 | `Object`  | -      |
| style      | 自定义container内联样式 | `object`  | {    right: 24,    top: 24,  }      |
| key      | 当前通知唯一标志 | `string`  | -      |
| placement      | 弹窗弹出的位置 | `"topLeft"`\|` "topRight"`\|` "bottomLeft"`\|` "bottomRight"`  | topRight      |
| cancel      | 关闭通知的回调 | `(() => void)`  | -      |
| confirm      | 确认的回调 | `(() => void)`  | -      |


## Notification全局配置

| 参数 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :----- |
| duration      | 自动关闭时间, 默认为4.5s, 为null则消息通知不会自动消失 | `number`    | -      |
| getContainer      | 配置渲染节点的输出位置 | `(() => HTMLElement)`    | -      |


###
