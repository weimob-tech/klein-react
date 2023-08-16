---
title: 提示 - ToolTip
nav:
  title: 组件
  path: /components
group:
  title: 反馈
---

# 提示 ToolTip

文字提示气泡框、主要用于提示一些简单的文本信息，可用于代替浏览器自带的title提示。

### 基础示例

基本用法。

<code src="./demos/basic.tsx"></code>

### 箭头指向中心

设置了 arrowPointAtCenter 后，箭头将指向目标元素的中心。

<code src="./demos/arrowPointAtCenter.tsx"></code>

### ToolTip 弹出位置

共有12个方向。

<code src="./demos/placement.tsx"></code>

### 自定义颜色

<code src="./demos/color.tsx"></code>

### Tooltip Props

| 参数 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :----- |
| prefixCls      | 类名前缀 | `string`  | -      |
| arrowPointAtCenter      | 箭头是否指向元素中心 | `boolean`  | false      |
| white      | 是否使用白底的提示 | `boolean`  | -      |
| overlayClassName      | 弹出提示的类名 | `string`  | -      |
| overlayStyle      | 弹出提示的样式 | `CSSProperties`  | -      |
| overlayInnerStyle      | 弹出提示内容的样式 | `object`  | -      |
| color      | 背景颜色 | `string`  | -      |
| defaultVisible      | 默认显示隐藏状态 | `boolean`  | -      |
| visible      | 显示隐藏状态 | `boolean`  | -      |
| mouseLeaveDelay      | 鼠标移出后延时多少才隐藏 Tooltip，单位：秒 | `number`  | 0.1      |
| mouseEnterDelay      | 鼠标移入后延时多少才显示 Tooltip，单位：秒 | `number`  | 0.1      |
| title      | 标题 | `ReactNode`  | -      |
| placement      | 气泡框位置 | `"top"`\|` "left"`\|` "right"`\|` "bottom"`\|` "topLeft"`\|` "topRight"`\|` "bottomLeft"`\|` "bottomRight"`\|` "leftTop"`\|` "leftBottom"`\|` "rightTop"`\|` "rightBottom"`  | top      |
| trigger      | 触发行为，可选 hover \| focus \| click \| contextMenu，可使用数组设置多个触发行为 | `string`\|` string[]`  | ['hover']      |
| onVisibleChange      | 显示隐藏的回调 | `((visible: boolean) => void)`  | -      |
| getPopupContainer      | 提示信息挂载点，默认挂载到 body 上 | `((node: HTMLElement) => HTMLElement)`  | -      |


###
