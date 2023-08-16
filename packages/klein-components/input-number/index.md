---
title: 数字输入框 - InputNumber
nav:
  title: 组件
  path: /components
group:
  title: 数据录入
---

# 数字输入框 InputNumber

通过鼠标或键盘，输入范围内的数值、当需要获取标准数值时。

### 基础示例

数字输入框。

<code src="./demos/basic.tsx"  ></code>

### 三种大小

组件支持三种尺寸：large | medium | small，可通过 size 属性传入。

<code src="./demos/size.tsx"  ></code>

### 高精度小数

通过 stringMode 开启高精度小数支持，onChange 事件将返回 string 类型。

<code src="./demos/stringMode.tsx"  ></code>

### 格式化展示

通过 formatter 格式化数字，以展示具有具体含义的数据，往往需要配合 parser 一起使用。

<code src="./demos/formatter.tsx"  ></code>

### 键盘行为

使用 keyboard 属性可以控制键盘行为。

<code src="./demos/keyboard.tsx"  ></code>

### 超出边界

当通过受控将 value 超出边界时，提供警告样式。

<code src="./demos/overstep.tsx"  ></code>

### 输入框上添加后置复合元素

通过addonAftre添加后置复合元素。

<code src="./demos/addonAfter.tsx"  ></code>

### Input.Number

| 参数 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :----- |
| size      | 输入框大小 | `"large"`\|` "medium"`\|` "small"`  | -      |
| className      | 自定义className | `string`  | -      |
| style      | 自定义style | `CSSProperties`  | -      |
| bordered      | 是否有边框 | `Boolean`  | true      |
| readOnly      | 是否只读 | `Boolean`  | -      |
| disabled      | 禁用 | `Boolean`  | -      |
| autoFocus      | 自动获取焦点 | `Boolean`  | -      |
| keyboard      | 是否启用键盘快捷行为 | `Boolean`  | -      |
| max      | 最大值 | `string`\|` number`  | -      |
| min      | 最小值 | `string`\|` number`  | -      |
| value      | 当前值 | `string`\|` number`  | -      |
| defaultValue      | 初始值 | `string`\|` number`  | -      |
| precision      | 数值精度，配置 formatter 时会以 formatter 为准 | `number`  | -      |
| step      | 每次改变步数，可以为小数 | `string`\|` number`  | -      |
| stringMode      | 字符值模式，开启后支持高精度小数同时 onChange 将返回 string 类型 | `Boolean`  | -      |
| formatter      | 指定输入框展示值的格式 | `((value: ReactText) => string)`  | -      |
| parser      | 指定从 formatter 里转换回数字的方式，和 formatter 搭配使用 | `((value: string) => ReactText)`  | -      |
| onChange      | 输入框内容变化时的回调 | `((val?: string`\|` number) => void)`\|` undefined`  | -      |
| onBlur      | 输入框失去焦点时的回调 | `((val?: string`\|` number) => void)`\|` undefined`  | -      |
| onFocus      | 输入框获取焦点时的回调 | `((val?: string`\|` number) => void)`\|` undefined`  | -      |
| onPressEnter      | 按下回车时的回调 | `((event: KeyboardEvent<HTMLInputElement>) => void)`  | -      |
| controls      | 是否显示上下箭头 | `boolean`  | -      |
| onStep      | 点击上下箭头的回调 | `((value: number, info: { offset: number; type: "up"`\|` "down"; }) => void)`  | -      |
| addonBefore      | 输入框前置复合元素 | `ReactNode`  | -      |
| addonAfter      | 输入框后置复合元素 | `ReactNode`  | -      |


<!-- ## FAQ

#### 为什么 showStepHandler 属性没了？
这是为了无缝对接 antd ，现在把 showStepHandler 属性替换成了 controls 属性 -->

### 
