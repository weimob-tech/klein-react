---
title: 加载中 - Spin
nav:
  title: 组件
  path: /components
group:
  title: 反馈
---

# 加载中 Spin

用于页面和区块的加载中状态、页面局部处于等待异步数据或正在渲染过程时，合适的加载动效会有效缓解用户的焦虑，提高用户体验

### 基础示例

这里填写示例说明

<!-- <code src="./demos/basic.tsx"></code> -->
<!-- <code src="./demos/size.tsx"></code> -->
<!-- <code src="./demos/container.tsx"></code> -->
<!-- <code src="./demos/text.tsx"></code> -->
<code src="./demos/logi.tsx"></code>

### loading 状态

loading 状态改变

<code src="./demos/loading.tsx"></code>

### Spin Props

| 参数 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :----- |
| delay      | 延迟显示加载效果的时间 | `number`  | -      |
| tip      | 自定义加载文案 | `string`  | -      |
| spinning      | 是否是加载中 | `boolean`  | true      |
| size      | 组件尺寸大小 | `"small"`\|` "default"`\|` "large"`  | default      |
| indicator      | 自定义加载图标 | `ReactNode`  | -      |
| className      | 自定义类 | `string`  | -      |
| direction      | 方向 | `"row"`\|` "col"`  | row      |


###
