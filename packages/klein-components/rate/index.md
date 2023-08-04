---
title: 评分 - Rate
nav:
  title: 组件
  path: /components
group:
  title: 数据录入
---
# 评分 Rate

评分组件

### 基础示例

<code src="./demos/basic.tsx" background="#f0f2f5"></code>

### 允许半选

<code src="./demos/allow-half.tsx" background="#f0f2f5"></code>

### 带文案

<code src="./demos/desc.tsx" background="#f0f2f5"></code>

### 显示提示信息

<code src="./demos/tooltips.tsx" background="#f0f2f5"></code>

### 只读

<code src="./demos/disabled.tsx" background="#f0f2f5"></code>

### 支持清除评分

<code src="./demos/allow-clear.tsx" background="#f0f2f5"></code>

### 自定义字符

<code src="./demos/character.tsx" background="#f0f2f5"></code>

### 自定义评分长度

<code src="./demos/count.tsx" background="#f0f2f5"></code>

### Rate Props

| 参数 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :----- |
| allowClear      | 是否允许再次点击后清除 | `boolean`  | -      |
| allowHalf      | 是否允许半选 | `boolean`  | false      |
| autoFocus      | 自动获取焦点 | `boolean`  | -      |
| character      | 自定义字符 | `ReactNode`  | -      |
| className      | 自定义样式类名 | `string`  | -      |
| count      | star 总数 | `number`  | 5      |
| defaultValue      | 默认值 | `number`  | -      |
| disabled      | 只读，无法进行交互 | `boolean`  | -      |
| style      | 自定义样式对象 | `CSSProperties`  | -      |
| tooltips      | 自定义每项的提示信息 | `string[]`  | -      |
| value      | 当前数，受控值 | `number`  | -      |
| onBlur      | 失去焦点时的回调 | `((event: (event: FocusEvent<Element>) => void) => void)`  | -      |
| onChange      | 选择时的回调 | `((value: number) => void)`  | -      |
| onFocus      | 获取焦点时的回调 | `((event: (event: FocusEvent<Element>) => void) => void)`  | -      |
| onHoverChange      | 鼠标经过时数值变化的回调 | `((value: number) => void)`  | -      |
| onShowChange      | 当前回显的值变化的回调 | `((value: number) => void)`  | -      |
| onKeyDown      | onKeyDown | `((event: (event: KeyboardEvent<Element>) => void) => void)`  | -      |


### 
