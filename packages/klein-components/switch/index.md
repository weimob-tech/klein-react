---
title: 开关 - Switch
nav:
  title: 组件
  path: /components
group:
  title: 数据录入
---

# 开关 Switch

开关选择器、需要表示开关状态的切换时。

### 基本用法
<code src="./demos/basic.tsx"></code>

### 三种大小
<code src="./demos/size.tsx"></code>

### 禁用状态
<code src="./demos/disabled.tsx"></code>

### 回调函数
<code src="./demos/callback.tsx"></code>

### 加载状态
<code src="./demos/loading.tsx"></code>

### Switch Props

| 参数 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :----- |
| size      | 开关大小 | `"large"`\|` "medium"`\|` "small"`  | medium      |
| className      | 自定义className | `string`  | -      |
| style      | 自定义style | `CSSProperties`  | -      |
| checked      | 指定当前选中状态 | `boolean`  | -      |
| defaultChecked      | 初始状态 | `boolean`  | false      |
| checkedChildren      | 选中时显示的内容 | `ReactNode`  | -      |
| unCheckedChildren      | 未选中时显示的内容 | `ReactNode`  | -      |
| disabled      | 是否禁用 | `boolean`  | false      |
| loading      | 控制加载状态 | `boolean`  | false      |
| onChange      | 变化时的回调事件 | `((checked: boolean, event: MouseEvent) => void)`  | -      |


###
