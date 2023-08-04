---
title: 滑动输入条 - Slider
nav:
  title: 组件
  path: /components
group:
  title: 数据录入
---

# 滑动条 Slider

滑动型输入器，展示当前值和可选范围、当用户需要在数值区间/自定义区间内进行选择时，可为连续或离散值

### 基础示例

基本滑动条、当 `range` 为 `true` 时，渲染为双滑块；当 `disabled` 为 `true` 时，滑块处于不可用状态

<code src="./demos/basic.tsx"></code>

### 带输入框的滑块

<code src="./demos/input-number.tsx" ></code>

### 带 icon 的滑块

滑块左右可以设置图标来表达业务含义

<code src="./demos/icon-slider.tsx" ></code>

### 自定义提示的滑块

使用 `tooltip.formatter` 可以格式化 `Tooltip` 的内容，设置 `tooltip.formatter={null}`，则隐藏 `Tooltip`

<code src="./demos/tip-formatter.tsx" ></code>

### 事件

当 Slider 的值发生改变时，会触发 `onChange` 事件，并把改变后的值作为参数传入在 `onmouseup` 时，会触发 `onAfterChange` 事件，并把当前值作为参数传入

<code src="./demos/event.tsx"></code>

### 垂直

垂直方向的 Slider

<code src="./demos/vertical.tsx"></code>

### 反向

设置`reverse`可以将滑动条置反

<code src="./demos/reverse.tsx"></code>

### 控制 ToolTip 的显示

当 `tooltip.open` 为 `true` 时，将始终显示 ToolTip；反之则始终不显示，即使在拖动、移入时也是如此

<code src="./demos/show-tooltip.tsx"></code>

### 范围可拖拽

可以设置 `range.draggableTrack`，使得范围刻度整体可拖拽

<code src="./demos/dragableTrack.tsx"></code>

### 带标签的滑块

使用 `marks` 属性标注分段式滑块，使用 `value` / `defaultValue` 指定滑块位置当 `included=false` 时，表明不同标记间为并列关系当 `step=null` 时，Slider 的可选值仅有 `marks` 标出来的部分

<code src="./demos/mark.tsx"></code>

### Slider Props

| 参数 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :----- |
| range      | 双滑块模式 | `boolean`\|` SliderRange`  | false      |
| value      | 设置当前取值当 range 为 false 时，使用 number，否则用 [number, number] | `number`\|` [number, number]`  | -      |
| defaultValue      | 设置初始取值当 range 为 false 时，使用 number，否则用 [number, number] | `number`\|` [number, number]`  | 0      |
| onChange      | 当 Slider 的值发生改变时，会触发 onChange 事件，并把改变后的值作为参数传入 | `((value: [number, number]) => void)`\|` ((value: number) => void)`  | -      |
| onAfterChange      | 与 onmouseup 触发时机一致，把当前值作为参数传入 | `((value: [number, number]) => void)`\|` ((value: number) => void)`  | -      |
| reverse      | 反向坐标轴 | `boolean`  | false      |
| min      | 最小值 | `number`  | 0      |
| max      | 最大值 | `number`  | 100      |
| step      | 步长，取值必须大于 0，并且可被 (max - min) 整除当 marks 不为空对象时，可以设置 step 为 null，此时 Slider 的可选值仅有 marks 标出来的部分 | `number`\|` null`  | 1      |
| marks      | 刻度标记，key 的类型必须为 number 且取值在闭区间 [min, max] 内，每个标签可以单独设置样式 | `Record<ReactText, string`\|` number`\|` boolean`\|` {}`\|` ReactElement<any, string`\|` ((props: any) => ReactElement<any, string`\|` ...`\|` (new (props: any) => Component<any, any, any>)>`\|` null)`\|` (new (props: any) => Component<...>)>`\|` ... 4 more ...>`\|` undefined`  | -      |
| dots      | 是否只能拖拽到刻度上 | `boolean`  | false      |
| included      | marks 不为空对象时有效，值为 true 时表示值为包含关系，false 表示并列 | `boolean`  | true      |
| disabled      | 值为 true 时，滑块为禁用状态 | `boolean`  | false      |
| vertical      | 值为 true 时，Slider 为垂直方向 | `boolean`  | false      |
| tooltip      | 设置 Tooltip 相关属性 | `SliderTooltipProps`  | -      |
| getTooltipPopupContainer      | Tooltip 渲染父节点，默认渲染到 body 上 | `((triggerNode: HTMLElement) => HTMLElement)`  | () => document.body      |


## range

| 参数           | 说明                 | 类型      | 默认值 |
| :------------- | :------------------- | :-------- | :----- |
| draggableTrack | 范围刻度是否可被拖拽 | `boolean` | false  |

## 方法

| 方法    | 说明     |
| :------ | :------- |
| blur()  | 移除焦点 |
| focus() | 获取焦点 |


### SliderTooltip Props

| 参数 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :----- |
| prefixCls      | 类名前缀 | `string`  | -      |
| arrowPointAtCenter      | 箭头是否指向元素中心 | `boolean`  | -      |
| monitorWindowResize      | 是否监听窗口变化 | `boolean`  | -      |
| white      | 是否使用白底的提示 | `boolean`  | -      |
| overlayClassName      | 弹出提示的类名 | `string`  | -      |
| overlayStyle      | 弹出提示的样式 | `CSSProperties`  | -      |
| overlayInnerStyle      | 弹出提示内容的样式 | `object`  | -      |
| color      | 背景颜色 | `string`  | -      |
| defaultVisible      | 默认显示隐藏状态 | `boolean`  | -      |
| visible      | 显示隐藏状态 | `boolean`  | -      |
| mouseLeaveDelay      | 鼠标移出后延时多少才隐藏 Tooltip，单位：秒 | `number`  | -      |
| mouseEnterDelay      | 鼠标移入后延时多少才显示 Tooltip，单位：秒 | `number`  | -      |
| title      | 标题 | `ReactNode`  | -      |
| placement      | 气泡框位置 | `"top"`\|` "left"`\|` "right"`\|` "bottom"`\|` "topLeft"`\|` "topRight"`\|` "bottomLeft"`\|` "bottomRight"`\|` "leftTop"`\|` "leftBottom"`\|` "rightTop"`\|` "rightBottom"`  | -      |
| trigger      | 触发行为，可选 hover \| focus \| click \| contextMenu，可使用数组设置多个触发行为 | `string`\|` string[]`  | -      |
| onVisibleChange      | 显示隐藏的回调 | `((visible: boolean) => void)`  | -      |
| getPopupContainer      | 提示信息挂载点，默认挂载到 body 上 | `((node: HTMLElement) => HTMLElement)`  | -      |


### 
