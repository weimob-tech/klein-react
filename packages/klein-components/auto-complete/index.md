---
title: 自动完成 - AutoComplete
nav:
  title: 组件
  path: /components
group:
  title: 数据录入
---

# 自动完成 AutoComplete

输入框自动完成功能、一般在以下情况使用：
- 需要一个输入框而不是选择器
- 需要输入建议/辅助提示

和 Select 的区别是：
- AutoComplete 是一个带提示的文本输入框，用户可以自由输入，关键词是辅助输入
- Select 是在限定的可选项中进行选择，关键词是选择

### 基础示例

基本使用，通过 options 设置自动完成的数据源

<code src="./demos/basic.tsx"></code>

### 自定义选项

也可以直接传 AutoComplete.Option 作为 AutoComplete 的 children，而非使用 options

<code src="./demos/options.tsx"></code>

### 自定义组件

自定义输入组件

<code src="./demos/customComponent.tsx"></code>

### 查询模式: 确定类目

查询模式: 确定类目 示例

<code src="./demos/searchWithCategory.tsx"></code>

### 查询模式: 不确定类目

查询模式: 不确定类目 示例

<code src="./demos/searchWithoutCategory.tsx"></code>

### Auto.Complete

| 参数                     | 说明                                                                                                                                 | 类型                                                                                                         | 默认值 |
| :----------------------- | :----------------------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------- | :----- |
| open                     | 是否展开下拉菜单                                                                                                                     | `boolean`                                                                                                    | -      |
| defaultOpen              | 是否默认展开下拉菜单                                                                                                                 | `boolean`                                                                                                    | -      |
| value                    | 指定当前选中的条目                                                                                                                   | `string`                                                                                                     | -      |
| defaultValue             | 指定默认选中的条目                                                                                                                   | `string`                                                                                                     | -      |
| defaultActiveFirstOption | 是否默认高亮第一个选项                                                                                                               | `boolean`                                                                                                    | -      |
| dropdownClassName        | 下拉菜单的 className 属性                                                                                                            | `string`                                                                                                     | -      |
| dropdownMatchSelectWidth | 拉菜单和选择器同宽默认将设置 min-width，当值小于选择框宽度时会被忽略false 时会关闭虚拟滚动                                       | `number`\|` boolean`                                                                                         | -      |
| getPopupContainer        | 提示信息挂载点，默认挂载到 body 上                                                                                                   | `((node?: HTMLElement) => HTMLElement)`\|` undefined`                                                        | -      |
| allowClear               | 支持清除                                                                                                                             | `boolean`                                                                                                    | false  |
| autoFocus                | 默认获取焦点                                                                                                                         | `boolean`                                                                                                    | false  |
| disabled                 | 禁用状态控制                                                                                                                         | `boolean`                                                                                                    | -      |
| filterOption             | 是否根据输入项进行筛选当其为一个函数时，会接收 inputValue option 两个参数，当 option 符合筛选条件时，应返回 true，反之则返回 false | `boolean`\|` ((inputValue: string, option: any) => boolean)`                                                 | -      |
| options                  | 数据化配置选项内容，相比 jsx 定义会获得更好的渲染性能                                                                                | `{ label?: string`\|` number`\|` LabeledValue; value: string`\|` number`\|` LabeledValue; }[]`\|` undefined` | -      |
| notFoundContent          | 当下拉列表为空时显示的内容                                                                                                           | `ReactNode`                                                                                                  | -      |
| placeholder              | placeholder                                                                                                                          | `string`                                                                                                     | -      |
| className                | 自定义 className                                                                                                                     | `string`                                                                                                     | -      |
| style                    | 自定义 style                                                                                                                         | `CSSProperties`                                                                                              | -      |
| onBlur                   | 失去焦点时回调                                                                                                                       | `((value?: any) => void)`                                                                                    | -      |
| onFocus                  | 获得焦点时回调                                                                                                                       | `((value?: any) => void)`                                                                                    | -      |
| onChange                 | 选中 option，或 input 的 value 变化时，调用此函数                                                                                    | `((value: any, option?: any) => void)`                                                                       | -      |
| onDropdownVisibleChange  | 展开下拉菜单的回调                                                                                                                   | `((open: boolean) => void)`                                                                                  | -      |
| onSearch                 | 文本框值变化时回调                                                                                                                   | `((value: string) => void)`                                                                                  | -      |
| onSelect                 | 被选中时调用，参数为选中项的 value (或 key) 值                                                                                       | `((value?: any, option?: any) => void)`                                                                      | -      |

###
