---
title: 空状态 - Empty
nav:
  title: 组件
  path: /components
group:
  title: 数据展示
---

# 空态 Empty

没有对应的数据内容时，呈现出的一种空状态。

### 基础示例

基础示例

<code src="./demos/basic.tsx"></code>

### 空态 没有文案

<code src="./demos/nodescribe.tsx"></code>

### 自定义描述文案

<code src="./demos/description.tsx"></code>

### 尺寸大小

尺寸大小，size 分别为 middle 和 small ，默认为 middle

<code src="./demos/size.tsx"></code>

### Empty Props

| 参数 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :----- |
| description      | 自定义描述内容 | `ReactNode`  | -      |
| image      | 设置显示图片，为 string 时表示自定义图片地址 | `ReactNode`  | -      |
| imageStyle      | 图片样式 | `CSSProperties`  | -      |
| className      | 自定义className | `string`  | -      |
| size      | 图标尺寸 | `"small"`\|` "middle"`  | middle      |
| type      | 图标类型 | `"goods"`\|` "activity"`\|` "data"`\|` "fail"`\|` "success"`\|` "rule"`\|` "organization"`  | -      |


###
