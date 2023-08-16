---
title: 分割线 - Divider
nav:
  title: 组件
  path: /components
group:
  title: 布局
---
# 分割线 Divider

分割线，需要分割两个元素时使用。

### 横向分割线

默认为横向分割线。

<code src="./demos/basic.tsx"></code>

### 纵向分割线

设置`direction='col'`表现为纵向分割线。

<code src="./demos/col-divider.tsx"></code>

### Divider Props

| 参数 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :----- |
| direction      | 分割线方向 | `string`  | row      |
| className      | 自定义类名 | `string`  | -      |
| style      | 自定义样式 | `CSSProperties`  | -      |
| dashed      | 是否是虚线 | `boolean`  | -      |
| length      | 长度 | `number`  | -      |
| spacing      | 控制上下或者左右间距 | `number`  | -      |


### 