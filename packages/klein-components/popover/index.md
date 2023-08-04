---
title: 气泡卡片 - Popover
nav:
  title: 组件
  path: /components
group:
  title: 数据展示
---
# 气泡卡片 Popover 

需要用户进一步的确认时，在目标元素附近弹出浮层提示，询问用户；和弹出的全屏居中模态对话框相比，交互形式更轻量 组件在何时使用

### 基础示例

基础形式的气泡卡片最小宽度为160，最大宽度为360

<code src="./demos/basic.tsx"></code>

### 不同位置的气泡卡片

通过设置placement属性可以改变气泡的展示位置

<code src="./demos/placement.tsx"></code>

### 文字较多的气泡卡片

这种形式的气泡卡片最小宽度为240，最大宽度为480

<code src="./demos/large.tsx"></code>

### Popover Props

| 参数 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :----- |
| title      | 标题 | `ReactNode`  | -      |
| content      | 卡片内容 | `ReactNode`  | -      |
| size      | 使用较大的气泡卡片 | `"normal"`\|` "large"`  | -      |
| prefixCls      | 类名前缀 | `string`  | -      |
| visible      | 用于手动控制浮层显隐 | `boolean`  | -      |
| width      | 设置宽度 | `number`  | -      |
| white      | 是否使用白底的提示 | `boolean`  | true      |
| overlayClassName      | 弹出提示的类名 | `string`  | -      |
| overlayStyle      | 弹出提示的样式 | `CSSProperties`  | -      |
| overlayInnerStyle      | 弹出提示内容的样式 | `object`  | -      |
| color      | 背景颜色 | `string`  | -      |
| defaultVisible      | 默认显示隐藏状态 | `boolean`  | -      |
| mouseLeaveDelay      | 鼠标移出后延时多少才隐藏 Tooltip，单位：秒 | `number`  | -      |
| mouseEnterDelay      | 鼠标移入后延时多少才显示 Tooltip，单位：秒 | `number`  | -      |
| placement      | 气泡框位置 | `"top"`\|` "left"`\|` "right"`\|` "bottom"`\|` "topLeft"`\|` "topRight"`\|` "bottomLeft"`\|` "bottomRight"`\|` "leftTop"`\|` "leftBottom"`\|` "rightTop"`\|` "rightBottom"`  | -      |
| trigger      | 触发行为，可选 hover \| focus \| click \| contextMenu，可使用数组设置多个触发行为 | `string`\|` string[]`  | -      |
| onVisibleChange      | 显示隐藏的回调 | `((visible: boolean) => void)`  | -      |
| getPopupContainer      | 提示信息挂载点，默认挂载到 body 上 | `((node: HTMLElement) => HTMLElement)`  | -      |


### 