---
title: 气泡框 - Popconfirm
nav:
  title: 组件
  path: /components
group:
  title: 反馈
---
# 气泡框 Popconfirm

点击元素，弹出气泡式的确认框、目标元素的操作需要用户进一步的确认时，在目标元素附近弹出浮层提示，询问用户。
和 confirm 弹出的全屏居中弹窗相比，交互形式更轻量。

### 基础示例

基本用法。

<code src="./demos/basic.tsx"></code>

### 自定义图标

带图标。

<code src="./demos/popwithIcon.tsx"></code>

### 异步关闭

点击确定后异步关闭气泡确认框。

<code src="./demos/controlled.tsx"></code>

### confirm promise方式关闭

点击确定后异步关闭气泡确认框。

<code src="./demos/confirm-with-promise.tsx"></code>

### Popconfirm Props

| 参数 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :----- |
| placement      | 确认框弹出位置 | `"top"`\|` "left"`\|` "right"`\|` "bottom"`\|` "topLeft"`\|` "topRight"`\|` "bottomLeft"`\|` "bottomRight"`\|` "leftTop"`\|` "leftBottom"`\|` "rightTop"`\|` "rightBottom"`  | -      |
| title      | 确认框的标题 | `ReactNode`  | -      |
| content      | 确认框的描述 | `ReactNode`  | -      |
| color      | 背景颜色 | `string`  | #ffffff      |
| cancelButtonProps      | cancel 按钮 props  | [ButtonProps](/components/button) | -      |
| cancelText      | 取消按钮文字 | `string`  | 取消      |
| okButtonProps      | ok 按钮 props  | [ButtonProps](/components/button) | -      |
| okText      | 确认按钮文字 | `string`  | 确定      |
| icon      | 自定义弹出气泡 Icon 图标 | `ReactNode`  | -      |
| onCancel      | 点击取消的回调 | `((event: MouseEvent<HTMLElement, MouseEvent>) => void)`  | -      |
| onConfirm      | 点击确认的回调 | `((event: MouseEvent<HTMLElement, MouseEvent>) => void)`  | -      |
| visible      | 是否显示气泡确认框 | `boolean`  | -      |
| width      | 自定义宽度 | `number`  | -      |
| prefixCls      | 类名前缀 | `string`  | -      |
| white      | 是否使用白底的提示 | `boolean`  | -      |
| overlayClassName      | 弹出提示的类名 | `string`  | -      |
| overlayStyle      | 弹出提示的样式 | `CSSProperties`  | -      |
| overlayInnerStyle      | 弹出提示内容的样式 | `object`  | -      |
| defaultVisible      | 默认显示隐藏状态 | `boolean`  | -      |
| mouseLeaveDelay      | 鼠标移出后延时多少才隐藏 Tooltip，单位：秒 | `number`  | -      |
| mouseEnterDelay      | 鼠标移入后延时多少才显示 Tooltip，单位：秒 | `number`  | -      |
| trigger      | 触发行为，可选 hover \| focus \| click \| contextMenu，可使用数组设置多个触发行为 | `string`\|` string[]`  | -      |
| onVisibleChange      | 显示隐藏的回调 | `((visible: boolean) => void)`  | -      |
| getPopupContainer      | 提示信息挂载点，默认挂载到 body 上 | `((node: HTMLElement) => HTMLElement)`  | -      |


### 