---
title: 单选框 - Radio
nav:
  title: 组件
  path: /components
group:
  title: 数据录入
---

# 单选框 Radio

单选框、用于在多个备选项中选中单个状态。

- 和 Select 的区别是，Radio 所有选项默认可见，方便用户在比较中选择，因此选项不宜过多。

### 组件展示
<code src="./demos/basic.tsx"></code>

### 基本用法
<code src="./demos/danger.tsx"></code>

### 不可用
<code src="./demos/disabled.tsx"></code>

### options配置使用
<code src="./demos/radiogroup-options.tsx"></code>

### 按钮样式
<code src="./demos/radiobutton.tsx"></code>

### 实色填底
<code src="./demos/radiobutton-solid.tsx"></code>

### Radio Props

| 参数 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :----- |
| showType      | 显示类型 | `string`  | -      |
| prefixCls      | 自定义样式前缀 | `string`  | -      |
| className      | 自定义class | `string`  | -      |
| defaultChecked      | 初始是否选中 | `boolean`  | -      |
| checked      | 指定当前是否选中 | `boolean`  | -      |
| style      | 自定义样式 | `CSSProperties`  | -      |
| disabled      | 失效状态 | `boolean`  | -      |
| onChange      | 变化时回调函数 | `((e: RadioChangeEvent) => void)`  | -      |
| autoFocus      | 自动获取焦点 | `boolean`  | -      |


### Radio.Button

| 参数 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :----- |
| prefixCls      | 自定义样式前缀 | `string`  | -      |
| className      | 自定义class | `string`  | -      |
| defaultChecked      | 初始是否选中 | `boolean`  | -      |
| checked      | 指定当前是否选中 | `boolean`  | -      |
| style      | 自定义样式 | `CSSProperties`  | -      |
| disabled      | 失效状态 | `boolean`  | -      |
| onChange      | 变化时回调函数 | `((e: RadioChangeEvent) => void)`  | -      |
| autoFocus      | 自动获取焦点 | `boolean`  | -      |


### Radio.Group

| 参数 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :----- |
| defaultValue      | 选项组默认值 | `any`  | -      |
| value      | 选项组value | `any`  | -      |
| name      | name属性 | `string`  | -      |
| onChange      | 选项组回调 | `((e: RadioChangeEvent) => void)`  | -      |
| optionType      | 选项子项类型 | `"default"`\|` "button"`  | -      |
| buttonStyle      | 选项按钮样式 | `"outline"`\|` "solid"`  | -      |
| size      | 大小，只对按钮样式生效 | `"default"`\|` "large"`\|` "small"`  | -      |
| direction      | 控制内部radio是纵向还是横向排列 | `"vertical"`\|` "horizontal"`  | -      |
| rowProps      | 支持基础组件row的所有属性 | `RowProps`  | -      |
| prefixCls      | 自定义样式前缀 | `string`  | -      |
| className      | 自定义class | `string`  | -      |
| options      | 指定可选项 | `(string`\|` CheckboxOptionType)[]`  | -      |
| disabled      | 是否整组失效 | `boolean`  | -      |
| style      | 自定义样式 | `CSSProperties`  | -      |


### 
