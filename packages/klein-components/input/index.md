---
title: 输入框 - Input
nav:
  title: 组件
  path: /components
group:
  title: 数据录入
---

# 输入框 Input

用户通过鼠标或键盘输入字符、需要用户输入表单域内容时。

### 基本用法
<code src="./demos/basic.tsx"></code>

### 三种尺寸
<code src="./demos/size.tsx"></code>

### 5种内置宽度尺寸
<code src="./demos/w-size.tsx"></code>

### 复合型输入框
<code src="./demos/addon.tsx"></code>

### 前缀和后缀
<code src="./demos/affix.tsx"></code>

### 展示字数统计
<code src="./demos/showCount.tsx"></code>

### 一键清空
<code src="./demos/clearable.tsx"></code>

### 文本域
<code src="./demos/textarea.tsx"></code>

### 搜索框
<code src="./demos/search.tsx"></code>

### 输入框组合
<code src="./demos/group.tsx"></code>

### Input Props

| 参数 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :----- |
| placeholder      | 输入框占位文本 | `string`  | -      |
| defaultValue      | 输入框默认内容 | `any`  | -      |
| value      | 输入框内容 | `any`  | -      |
| disabled      | 禁用状态控制 | `boolean`  | false      |
| type      | text，textarea 和其他原生`input`的`type`值 | `string`  | text      |
| showCount      | 显示输入字数 | `boolean`\|` ((count: number, maxLength?: number) => string)`\|` undefined`  | -      |
| maxLength      | 最大输入长度 | `number`  | -      |
| chineseCalc      | 是否开启中文字符数按比例计算 | `boolean`  | false      |
| proportion      | 控制一个中文所占字符数 | `number`  | 2      |
| prefix      | 输入框前缀元素 | `ReactNode`  | -      |
| suffix      | 输入框后缀元素 | `ReactNode`  | -      |
| addonBefore      | 输入框前置复合元素 | `ReactNode`  | -      |
| addonAfter      | 输入框后置复合元素 | `ReactNode`  | -      |
| wSize      | 内置5种输入框宽度（分别对应96，200，304，408，512） | `"xs"`\|` "sm"`\|` "m"`\|` "l"`\|` "xl"`  | -      |
| size      | 输入框大小 | `"large"`\|` "medium"`\|` "small"`  | -      |
| className      | 自定义className | `string`  | -      |
| bordered      | 显示边框 | `boolean`  | true      |
| style      | 自定义style | `CSSProperties`  | -      |
| onChange      | 输入框内容变化时的回调 | `((e: ChangeEvent<HTMLInputElement>, len: number) => void)`  | -      |
| onPressEnter      | 按下回车时的回调 | `((event: KeyboardEvent<HTMLInputElement>) => void)`  | -      |


### Textarea Props

| 参数 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :----- |
| placeholder      | 输入框占位文本 | `string`  | -      |
| defaultValue      | 输入框默认内容 | `string`  | -      |
| chineseCalc      | 是否开启中文字符数按比例计算 | `boolean`  | -      |
| proportion      | 控制一个中文所占字符数 | `number`  | 2      |
| value      | 输入框内容 | `any`  | -      |
| disabled      | 禁用状态控制 | `boolean`  | false      |
| showCount      | 显示输入字数 | `boolean`\|` ((count: number, maxLength?: number) => string)`\|` undefined`  | -      |
| maxLength      | 最大输入长度 | `number`  | -      |
| className      | 自定义className | `string`  | -      |
| size      | 内置三种宽度的textarea | `"small"`\|` "medium"`\|` "large"`  | -      |
| style      | 自定义style | `CSSProperties`  | -      |
| textareaStyle      | 自定义textarea style | `CSSProperties`  | -      |
| onChange      | 输入框内容变化时的回调 | `((e: ChangeEvent<HTMLTextAreaElement>, len: number) => void)`  | -      |
| onPressEnter      | 按下回车的回调 | `((event: KeyboardEvent<HTMLTextAreaElement>) => void)`  | -      |


### Search Props

| 参数 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :----- |
| loading      | 搜索中 | `boolean`  | -      |
| enterButton      | 自定义搜索按钮 | `ReactNode`  | -      |
| onSearch      | 输入框内容变化时的回调 | `((value: string, event?: MouseEvent<HTMLElement, MouseEvent>`\|` KeyboardEvent<HTMLInputElement>) => void)`\|` undefined`  | -      |
| placeholder      | 输入框占位文本 | `string`  | -      |
| defaultValue      | 输入框默认内容 | `any`  | -      |
| value      | 输入框内容 | `any`  | -      |
| disabled      | 禁用状态控制 | `boolean`  | -      |
| type      | text，textarea 和其他原生`input`的`type`值 | `string`  | -      |
| showCount      | 显示输入字数 | `boolean`\|` ((count: number, maxLength?: number) => string)`\|` undefined`  | -      |
| maxLength      | 最大输入长度 | `number`  | -      |
| prefix      | 输入框前缀元素 | `ReactNode`  | -      |
| suffix      | 输入框后缀元素 | `ReactNode`  | -      |
| addonBefore      | 输入框前置复合元素 | `ReactNode`  | -      |
| addonAfter      | 输入框后置复合元素 | `ReactNode`  | -      |
| wSize      | 内置5种输入框宽度（分别对应96，200，304，408，512） | `"xs"`\|` "sm"`\|` "m"`\|` "l"`\|` "xl"`  | -      |
| size      | 输入框大小 | `"large"`\|` "medium"`\|` "small"`  | -      |
| className      | 自定义className | `string`  | -      |
| bordered      | 显示边框 | `boolean`  | -      |
| style      | 自定义style | `CSSProperties`  | -      |
| onChange      | 输入框内容变化时的回调 | `((event: ChangeEvent<HTMLInputElement>) => void)`  | -      |
| onPressEnter      | 按下回车时的回调 | `((event: KeyboardEvent<HTMLInputElement>) => void)`  | -      |


### Group Props

| 参数 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :----- |
| compact      | 是否用紧凑模式 | `boolean`  | false      |
| size      | Input.Group 中所有的 Input 的大小 | `"large"`\|` "default"`\|` "small"`  | default      |
| className      | 自定义className | `string`  | -      |
| style      | 自定义style | `CSSProperties`  | -      |


### 
