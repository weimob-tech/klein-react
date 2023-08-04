---
title: 多选框 - Checkbox
nav:
  title: 组件
  path: /components
group:
  title: 数据录入
---

# 多选框 Checkbox

多选框、单独使用可以表示两种状态之间的切换，和 switch 类似；区别在于切换 switch 会直接触发状态改变，而 checkbox 一般用于状态标记，需要和提交操作配合

### 基本用法
<code src="./demos/basic.tsx"  ></code>

### 不可用
<code src="./demos/disabled.tsx"></code>

### 全选状态
<code src="./demos/check-all.tsx"></code>

### 组合checkbox
<code src="./demos/checkbox-group.tsx"></code>

### Checkbox Props

| 参数 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :----- |
| indeterminate      | 设置 indeterminate 状态，只负责样式控制 | `boolean`  | false      |
| prefixCls      | 自定义样式前缀 | `string`  | -      |
| className      | 自定义class | `string`  | -      |
| defaultChecked      | 初始是否选中 | `boolean`  | -      |
| checked      | 指定当前是否选中 | `boolean`  | -      |
| style      | 自定义样式 | `CSSProperties`  | -      |
| disabled      | 失效状态 | `boolean`  | -      |
| onChange      | 变化时回调函数 | `((e: CheckboxChangeEvent) => void)`  | -      |
| autoFocus      | 自动获取焦点 | `boolean`  | -      |


### Checkbox.Group

| 参数 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :----- |
| name      | Group名称 | `string`  | -      |
| defaultValue      | 默认选中的选项 | `CheckboxValueType[]`  | -      |
| value      | 指定选中的选项 | `CheckboxValueType[]`  | -      |
| onChange      | 变化时回调函数 | `((checkedValue: CheckboxValueType[]) => void)`  | -      |
| direction      | 控制内部checkbox是纵向还是横向排列 | `"vertical"`\|` "horizontal"`  | -      |
| prefixCls      | 自定义样式前缀 | `string`  | -      |
| className      | 自定义class | `string`  | -      |
| options      | 指定可选项 | `(string`\|` CheckboxOptionType)[]`  | []      |
| disabled      | 是否整组失效 | `boolean`  | -      |
| style      | 自定义样式 | `CSSProperties`  | -      |


### 
