---
title: 按钮 - Button
nav:
  title: 组件
  path: /components
group:
  title: 通用
---

# 按钮 Button

按钮用于开始一个即时操作、标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。


### 按钮类型

按钮总共有primary，default，dashed，link四种类型。

<code src="./demos/basic.tsx"></code>

### 按钮大小

按钮默认有大中小三个尺寸。

<code src="./demos/size.tsx"></code>

### 带icon的按钮

<code src="./demos/icon.tsx"></code>

### 幽灵按钮

幽灵按钮背景变为透明。

<code src="./demos/ghost.tsx"></code>

### 不可点击按钮

按钮disabled不可点击。

<code src="./demos/disabled.tsx"></code>

### 加载状态

设置按钮的加载状态。

<code src="./demos/loading.tsx"></code>

### 危险按钮

危险按钮。

<code src="./demos/danger.tsx"></code>

### Button Props

| 参数 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :----- |
| type      | 按钮类型 | `"link"`\|` "default"`\|` "primary"`\|` "dashed"`  | default      |
| size      | 按钮大小 | `"large"`\|` "medium"`\|` "small"`  | -      |
| disabled      | 禁用状态控制 | `boolean`  | -      |
| loading      | 加载状态控制 | `boolean`  | -      |
| href      | 如果设置href属性将会使用a标签 | `string`  | -      |
| className      | 自定义className | `string`  | -      |
| htmlType      | 原生button type | `"submit"`\|` "reset"`\|` "button"`  | button      |
| danger      | 设置危险按钮 | `boolean`  | false      |
| success      | 设置成功按钮（目前只适用于ghost幽灵按钮） | `boolean`  | -      |
| warning      | 设置警告按钮（目前只适用于ghost幽灵按钮） | `boolean`  | -      |
| ghost      | 是否为幽灵按钮 | `boolean`  | false      |
| icon      | 设置按钮的图标 | `ReactNode`  | -      |
| onClick      | 点击回调事件 | `(((event: MouseEvent<HTMLElement, MouseEvent>) => void) & ((event: MouseEvent<any, MouseEvent>) => void))`  | -      |


### 
