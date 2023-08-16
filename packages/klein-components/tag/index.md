---
title: 标签 - Tag
nav:
  title: 组件
  path: /components
group:
  title: 数据展示
---

# 标签 Tag

用于标记事物的属性和维度。
进行分类。

### 基础示例

基础使用。

<code src="./demos/basic.tsx"></code>

### 省略用法

超出长度省略。

<code src="./demos/ellipsis.tsx"></code>

### 删除标签

支持标签删除功能。

<code src="./demos/delTag.tsx"></code>

### 不同类型的标签

通过type属性展示不同类型的标签。

<code src="./demos/type.tsx"></code>

### 字号搭配

不同大小标签和字体的搭配建议。

<code src="./demos/basicWithText.tsx"></code>

### 标签可选中

通过checked属性控制选中状态。

<code src="./demos/checkAbleTag.tsx"></code>

### 包含辅助文案

通过help属性定义辅助文案。

<code src="./demos/help.tsx"></code>

### 内容为image

支持背景为图片。

<code src="./demos/image.tsx"></code>

### Tag Props

| 参数 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :----- |
| size      | 尺寸 | `"large"`\|` "medium"`\|` "small"`\|` "xSmall"`  | -      |
| closable      | 标签是否可以关闭 | `boolean`  | -      |
| closeIcon      | 自定义关闭按钮 | `ReactNode`  | -      |
| color      | 标签色 | `string`  | -      |
| visible      | 是否显示标签 | `boolean`  | -      |
| onClose      | 关闭标签后的回调 | `((e: MouseEvent<HTMLElement, MouseEvent>) => void)`  | -      |
| iconNode      | 自定义icon | `ReactNode`  | -      |
| disabled      | 是否禁用 | `boolean`  | -      |
| type      | 类型 | `"line"`\|` "fill"`  | -      |
| width      | 设置宽度超出省略 | `number`  | -      |
| maxWidth      | 设置最大宽度超出省略 | `number`  | -      |


### CheckAbleTag Props

| 参数 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :----- |
| checked      | 是否选中 | `boolean`  | -      |
| help      | 辅助文案 | `ReactNode`  | -      |
| onChange      | 选择事件 | `((tag: string, checked: boolean) => void)`  | -      |
| imageProps      | 设置Image组件属性 | `ImageProps`  | -      |
| size      | 尺寸 | `"large"`\|` "medium"`\|` "small"`\|` "xSmall"`  | -      |
| closable      | 标签是否可以关闭 | `boolean`  | -      |
| closeIcon      | 自定义关闭按钮 | `ReactNode`  | -      |
| color      | 标签色 | `string`  | -      |
| visible      | 是否显示标签 | `boolean`  | -      |
| onClose      | 关闭标签后的回调 | `((e: MouseEvent<HTMLElement, MouseEvent>) => void)`  | -      |
| iconNode      | 自定义icon | `ReactNode`  | -      |
| disabled      | 是否禁用 | `boolean`  | -      |
| type      | 类型 | `"line"`\|` "fill"`  | -      |
| width      | 设置宽度超出省略 | `number`  | -      |
| maxWidth      | 设置最大宽度超出省略 | `number`  | -      |


###
