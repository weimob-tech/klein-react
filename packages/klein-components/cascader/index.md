---
title: 级联选择 - Cascader
nav:
  title: 组件
  path: /components
group:
  title: 数据录入
---

# 级联选择 Cascader

级联选择框。

需要从一组相关联的数据集合进行选择，例如省市区，公司层级，事物分类等。

从一个较大的数据集合中进行选择时，用多级分类进行分隔，方便选择。

比起 Select 组件，可以在同一个浮层中完成选择，有较好的体验。

### 基础示例

基础用法。

<code src="./demos/basic.tsx"></code>

### 支持搜索

通过配置showSearch属性支持数据搜索。

<code src="./demos/search.tsx"></code>

### 禁用选项

通过指定 options 里的 disabled 字段开启禁用功能。

<code src="./demos/disabled.tsx"></code>

### 下拉加载

远程请求下拉加载。

<code src="./demos/scrollInfinite.tsx"></code>

### 动态加载选项

使用 loadData 实现动态加载选项。

<code src="./demos/loadData.tsx"></code>

### 自定义底部

使用 dropdownRender属性实现下拉菜单自由扩展。

<code src="./demos/dropdown-render.tsx"></code>

### 使用默认底部

使用 dropdownFooterContent属性对默认底部内容进行处理。

<code src="./demos/default-dropdownrender.tsx"></code>

### 下拉多选

支持多项选择。

<code src="./demos/mutiple.tsx"></code>

### 多选 + 动态加载选项

在该模式下点选每级菜单选项值都会发生变化。

<code src="./demos/loadDataMutiple.tsx"></code>

### Cascader Props

| 参数 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :----- |
| options      | 可选项数据源 | `optionProps[]`  | -      |
| dropdownMenuColumnWidth      | 下拉菜单每一列的宽度 | `number`  | -      |
| dropdownMenuColumnStyle      | 下拉菜单每一列的样式 | `CSSProperties`  | -      |
| onChange      | 选择完成后的回调 | `((value: unknown, selectedOptions?: CascaderOptionType`\|` MutiCascaderValueType) => void)`\|` undefined`  | -      |
| onInputChange      | search时输入框改变时回调 | `((val: string) => void)`  | -      |
| placeholder      | 输入框占位文本 | `string`  | -      |
| expandTrigger      | loadData触发方式 | `string`  | -      |
| className      | 自定义样式 | `string`  | -      |
| popupVisible      | 控制覆层显示 | `boolean`  | -      |
| onPopupVisibleChange      | 控制覆层的回调 | `((popupVisible: boolean) => void)`  | -      |
| suffixIcon      | 自定义选择筐后续Icon | `ReactNode`  | -      |
| value      | 指定选中项 | `any`  | -      |
| defaultValue      | 默认的选中项 | `any`  | -      |
| inputValue      | 输入框的值 | `any`  | -      |
| autoFocus      | 自动获取焦点 | `boolean`  | -      |
| allowClear      | 允许清除数据 | `boolean`  | true      |
| multiple      | 是否开启多选 | `boolean`  | -      |
| collapse      | 多选情况下是否折叠选中项目 | `number`\|` boolean`  | -      |
| disabled      | 禁用 | `boolean`  | false      |
| loadData      | 用于动态加载选项，无法与 showSearch 一起使用 | `((selectedOptions: any) => void)`  | -      |
| onExpand      | 展开时回调 | `((selectOptions: CascaderOptionType[]) => void)`  | -      |
| readOnly      | 控制输入框是否只读 | `boolean`  | -      |
| changeOnSelect      | 当此项为 true 时，点选每级菜单选项值都会发生变化 | `boolean`  | -      |
| getPopupContainer      | 选择器浮层挂载点，默认挂载到 body 上 | `((triggerNode: HTMLElement) => HTMLElement)`  | -      |
| displayRender      | 选择后展示的渲染函数 | `((label: string[], selectedOptions?: CascaderOptionType[]) => ReactNode)`\|` undefined`  | -      |
| size      | 输入框大小 | `"large"`\|` "medium"`\|` "small"`  | -      |
| dropdownRender      | 自由扩展下拉菜单 | `((menus: ReactNode) => ReactNode)`  | -      |
| scrollInfinite      | 下拉滚动加载 | `((e: UIEvent<HTMLDivElement, UIEvent>, index: number) => void)`  | -      |
| infiniteHasMore      | 是否还有更多下拉内容 | `boolean`  | true      |
| dropdownFooterContent      | 定义下拉菜单默认底部的内容 | `ReactNode`  | -      |
| fieldNames      | 自定义 options 中 label name children 的字段 | `Partial<FilledFieldNamesType>`  | -      |
| maxTagCount      | 最多显示多少个 tag（仅在多选时生效) | `number`  | -      |
| maxTagTextLength      | 最大显示的 tag 文本长度(仅在多选时生效） | `number`  | -      |
| tagRender      | 自定义 tag 内容 render | `((props: TagRenderProps, originNode: ReactNode) => ReactElement<any, string`\|` ((props: any) => ReactElement<any, string`\|` ...`\|` (new (props: any) => Component<any, any, any>)>`\|` null)`\|` (new (props: any) => Component<...>)>)`  | -      |
| showPickerTitle      | 当内容显示不全时显示title | `boolean`  | -      |


### 
