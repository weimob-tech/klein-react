---
title: 选择器 - Select
nav:
  title: 组件
  path: /components
group:
  title: 数据录入
---

# 选择器 Select

从多个选项中选择一个或多个选项，并呈现选择结果，用于表单数据填写和属性选择、超过 5 个选项才使用（低于 5 个建议使用「单选」，提升用户选择效率）。
- 针对国家、金额、年龄这类较多的选项时，支持手输「自动完成」功能。

### 基本使用

基本使用。

<code src="./demos/basic.tsx"></code>

### 带搜索框

展开后可对选项进行搜索。

<code src="./demos/search.tsx"></code>

<!-- ### 带搜索框及自定义选项

可进行搜索和添加自定义选项

<code src="./demos/searchAdd.tsx"></code> -->

### 搜索远程数据

搜索和远程数据结合。

<code src="./demos/fetch.tsx"></code>

### 下拉加载远程数据

下拉加载远程数据。

<code src="./demos/scrollInfinite.tsx"></code>

### 三种大小

三种大小的选择框，当 size 分别为 large 和 small 时，输入框高度为 40px 和 24px ，默认高度为 32px。

<code src="./demos/size.tsx"></code>

### 多选

多选，从已有条目中选择。

<code src="./demos/multiple.tsx"></code>

### 多选带按钮

多选并包含功能按钮。

<code src="./demos/multipleWithButton.tsx"></code>

### 响应式 maxTagCount

多选下通过响应式布局让选项自动收缩该功能对性能有所消耗，不推荐在大表单场景下使用。

<code src="./demos/maxTagCount.tsx"></code>

### 扩展菜单

使用 dropdownRender 对下拉菜单进行自由扩展。

<code src="./demos/dropdownRender.tsx"></code>

### 扩展菜单删除

使用 dropdownRender 对下拉菜单允许删除。

<code src="./demos/dropdownRenderRemove.tsx"></code>

### 前、后缀

自定义的选择框前、后缀图标。

<code src="./demos/suffixIcon.tsx"></code>

### 自定义选择标签

允许自定义选择标签的样式。

<code src="./demos/tags.tsx"></code>

### 组合模式

允许不同组件组合。

<code src="./demos/combination.tsx"></code>

### 预设长度

允许预设5种长度的select。

<code src="./demos/wSize.tsx"></code>

### Select Props

| 参数 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :----- |
| removeIcon      | 自定义的多选框清除图标 | `ReactNode`  | -      |
| wSize      | 内置5种select宽度（分别对应96，200，304，408，512） | `"xs"`\|` "sm"`\|` "m"`\|` "l"`\|` "xl"`  | -      |
| size      | 按钮大小 | `"large"`\|` "medium"`\|` "small"`  | -      |
| loading      | 加载状态控制 | `boolean`  | false      |
| showArrow      | 是否显示下拉小箭头 | `boolean`  | -      |
| showSearch      | 使单选模式可搜索 | `boolean`  | -      |
| filterSort      | 搜索时对筛选结果项的排序函数, 类似Array.sort里的 compareFunction | `((optionA: any, optionB: any) => number)`  | -      |
| menuItemSelectedIcon      | 自定义多选时当前选中的条目图标 | `ReactNode`  | -      |
| listHeight      | 设置弹窗滚动高度 | `number`  | -      |
| dropdownClassName      | 下拉菜单的 className 属性 | `string`  | -      |
| suffixIcon      | 自定义的选择框后缀图标 | `ReactNode`  | -      |
| maxTagCount      | 最多显示多少个 tag，响应式模式会对性能产生损耗 | `number`  | -      |
| maxTagTextLength      | 最大显示的 tag 文本长度 | `number`  | -      |
| dropdownStyle      | 下拉菜单的 style 属性 | `CSSProperties`  | -      |
| dropdownRender      | 自定义下拉框内容 | `((menu: ReactNode) => ReactNode)`  | -      |
| mode      | 设置 Select 的模式为多选或标签 | `"multiple"`\|` "tags"`  | -      |
| tagRender      | 自定义 tag 内容 render | `((props: TagRenderProps, originNode: ReactNode) => ReactElement<any, string`\|` ((props: any) => ReactElement<any, string`\|` ...`\|` (new (props: any) => Component<any, any, any>)>`\|` null)`\|` (new (props: any) => Component<...>)>)`  | -      |
| virtual      | 设置 false 时关闭虚拟滚动 | `boolean`  | true      |
| tokenSeparators      | 在 tags 和 multiple 模式下自动分词的分隔符 | `string[]`  | -      |
| value      | 指定当前选中的条目 | `string`\|` number`\|` string[]`\|` number[]`\|` LabeledValue`\|` LabeledValue[]`  | -      |
| defaultValue      | 指定默认选中的条目 | `string`\|` number`\|` string[]`\|` number[]`\|` LabeledValue`\|` LabeledValue[]`  | -      |
| bordered      | 是否有边框 | `boolean`  | true      |
| dropdownMatchSelectWidth      | 下拉菜单和选择器同宽默认将设置 min-width，当值小于选择框宽度时会被忽略false 时会关闭虚拟滚动 | `number`\|` boolean`  | true      |
| onClear      | 清除内容时回调 | `(() => void)`  | -      |
| onDeselect      | 取消选中时调用，参数为选中项的 value (或 key) 值，仅在 multiple 或 tags 模式下生效 | `((value: string`\|` number`\|` LabeledValue) => void)`  | -      |
| onInputKeyDown      | 按键按下时回调 | `((value?: any) => void)`  | -      |
| onMouseEnter      | 鼠标移入时回调 | `((value?: any) => void)`  | -      |
| onMouseLeave      | 鼠标移出时回调 | `((value?: any) => void)`  | -      |
| onPopupScroll      | 下拉列表滚动时的回调 | `((e: UIEvent<HTMLDivElement, UIEvent>, currentNode: HTMLDivElement, currentIndex: number) => void)`  | -      |
| removeOption      | 下拉选项可删除 | `((value?: any) => void)`  | -      |
| optionLabelProp      | 回填到选择框的 Option 的属性值，默认是 Option 的子元素 | `ReactNode`  | -      |
| open      | 是否展开下拉菜单 | `boolean`  | -      |
| labelInValue      | 是否把每个选项的 label 包装到 value 中，会把 Select 的 value 类型从 string 变为 { value: string, label: ReactNode } 的格式 | `boolean`  | -      |
| scrollInfinite      | 下拉加载 | `(() => void)`  | -      |
| infiniteHasMore      | 是否还有更多下拉内容 | `boolean`  | true      |
| itemindex      | 添加 options 时默认选中的option项 | `number`  | -      |
| allowClear      | 支持清除 | `boolean`  | false      |
| autoFocus      | 默认获取焦点 | `boolean`  | -      |
| defaultOpen      | 是否默认展开下拉菜单 | `boolean`  | -      |
| disabled      | 禁用状态控制 | `boolean`  | -      |
| filterOption      | 是否根据输入项进行筛选当其为一个函数时，会接收 inputValue option 两个参数，当 option 符合筛选条件时，应返回 true，反之则返回 false | `boolean`\|` ((inputValue: string, option: any) => boolean)`  | true      |
| options      | 数据化配置选项内容，相比 jsx 定义会获得更好的渲染性能 | `{ label?: string`\|` number`\|` LabeledValue; value: string`\|` number`\|` LabeledValue; }[]`\|` undefined`  | -      |
| getPopupContainer      | 提示信息挂载点，默认挂载到 body 上 | `((node?: any) => HTMLElement)`  | -      |
| notFoundContent      | 当下拉列表为空时显示的内容 | `ReactNode`  | -      |
| placeholder      | placeholder | `string`  | -      |
| className      | 自定义className | `string`  | -      |
| style      | 自定义style | `CSSProperties`  | -      |
| onBlur      | 失去焦点时回调 | `((value?: any) => void)`  | -      |
| onFocus      | 获得焦点时回调 | `((value?: any) => void)`  | -      |
| onChange      | 选中 option，或 input 的 value 变化时，调用此函数 | `((value: any, option?: any) => void)`  | -      |
| onDropdownVisibleChange      | 展开下拉菜单的回调 | `((open: boolean) => void)`  | -      |
| onSearch      | 文本框值变化时回调 | `((value: string) => void)`  | -      |
| onSelect      | 被选中时调用，参数为选中项的 value (或 key) 值 | `((value?: any, option?: any) => void)`  | -      |

### Option Props
| 参数 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :----- 
| disabled      | 是否禁用 | `boolean`  | -      |
| value      | 默认根据此属性值进行筛选	 | `number | string`  | -      |
| className      | Option 器类名	 | `string`  | -      |
| title      | 选项上的原生 title 提示	 | `string`  | -      |
| removeable      | 选项是否可删除	 | `boolean`  | -      |

### 
