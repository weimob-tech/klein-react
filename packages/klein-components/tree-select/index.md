---
title: 树选择 - TreeSelect
nav:
  title: 组件
  path: /components
group:
  title: 数据录入
---
# 树选择 TreeSelect

树型选择控件，可以对树形结构数据进行选择


### 基础示例

树型选择控件

<code src="./demos/basic.tsx" background="#f0f2f5"></code>

### 受控

组件受控

<code src="./demos/controlled.tsx" background="#f0f2f5"></code>

### 支持多选

多选的树选择

<code src="./demos/multiple.tsx" background="#f0f2f5"></code>

### 支持勾选

使用勾选框实现多选功能

<code src="./demos/checkable.tsx" background="#f0f2f5"></code>

### 数据加载

动态加载节点数据

<code src="./demos/loadata.tsx" background="#f0f2f5"></code>

### 支持虚拟滚动

适用于大数据量的情况

<code src="./demos/virtual.tsx" background="#f0f2f5"></code>


### Tree.Select

| 参数 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :----- |
| treeData      | 数据 | `TreeSelectNode[]`  | -      |
| multiple      | 支持多选（当设置 treeCheckable 时自动变为 true） | `boolean`  | false      |
| treeAutoExpandParent      | 自动展开父节点 * | `boolean`  | true      |
| treeSearchValue      | 搜索值 * | `string`  | -      |
| treeCheckable      | 显示 Checkbox | `boolean`  | false      |
| treeDefaultExpandAll      | 默认展开所有树节点 | `boolean`  | -      |
| treeDefaultExpandedKeys      | 默认展开的树节点 | `Key[]`  | -      |
| treeExpandedKeys      | 设置展开的树节点 | `Key[]`  | -      |
| treeIcon      | 自定义树节点图标 | `ReactNode`  | -      |
| treeLine      | 是否展示线条样式 | `boolean`  | -      |
| treeSwitcherIcon      | 树节点切换icon | `string`\|` number`\|` boolean`\|` {}`\|` ReactElement<any, string`\|` ((props: any) => ReactElement<any, string`\|` ...`\|` (new (props: any) => Component<any, any, any>)>`\|` null)`\|` (new (props: any) => Component<...>)>`\|` ... 4 more ...`  | -      |
| onTreeExpand      | 树节点展开时触发 | `((expandedKeys: Key[], info: { expand: boolean; node: TreeNode; }) => void)`  | -      |
| loadData      | 按需加载数据 | `((node: TreeNode, level: number) => Promise<any>)`  | -      |
| treeNodePlaceholder      | 格外的select的options，数据按需加载并且需要搜索时使用 | `number`  | -      |
| removeIcon      | 自定义的多选框清除图标 | `ReactNode`  | -      |
| wSize      | 内置5种select宽度（分别对应96，200，304，408，512） | `"xs"`\|` "sm"`\|` "m"`\|` "l"`\|` "xl"`  | -      |
| size      | 按钮大小 | `"large"`\|` "medium"`\|` "small"`  | -      |
| loading      | 加载状态控制 | `boolean`  | -      |
| showArrow      | 是否显示下拉小箭头 | `boolean`  | -      |
| showSearch      | 使单选模式可搜索 | `boolean`  | -      |
| listHeight      | 设置弹窗滚动高度 | `number`  | -      |
| dropdownClassName      | 下拉菜单的 className 属性 | `string`  | -      |
| suffixIcon      | 自定义的选择框后缀图标 | `ReactNode`  | -      |
| maxTagCount      | 最多显示多少个 tag，响应式模式会对性能产生损耗 | `number`  | -      |
| maxTagTextLength      | 最大显示的 tag 文本长度 | `number`  | -      |
| dropdownStyle      | 下拉菜单的 style 属性 | `CSSProperties`  | -      |
| dropdownRender      | 自定义下拉框内容 | `((menu: ReactNode) => ReactNode)`  | -      |
| tagRender      | 自定义 tag 内容 render | `((props: TagRenderProps, originNode: ReactNode) => ReactElement<any, string`\|` ((props: any) => ReactElement<any, string`\|` ...`\|` (new (props: any) => Component<any, any, any>)>`\|` null)`\|` (new (props: any) => Component<...>)>)`  | -      |
| virtual      | 设置 false 时关闭虚拟滚动 | `boolean`  | true      |
| value      | 指定当前选中的条目 | `string`\|` number`\|` string[]`\|` number[]`\|` LabeledValue`\|` LabeledValue[]`  | -      |
| defaultValue      | 指定默认选中的条目 | `string`\|` number`\|` string[]`\|` number[]`\|` LabeledValue`\|` LabeledValue[]`  | -      |
| bordered      | 是否有边框 | `boolean`  | -      |
| dropdownMatchSelectWidth      | 下拉菜单和选择器同宽默认将设置 min-width，当值小于选择框宽度时会被忽略false 时会关闭虚拟滚动 | `number`\|` boolean`  | true      |
| onClear      | 清除内容时回调 | `(() => void)`  | -      |
| onDeselect      | 取消选中时调用，参数为选中项的 value (或 key) 值，仅在 multiple 或 tags 模式下生效 | `((value: string`\|` number`\|` LabeledValue) => void)`  | -      |
| open      | 是否展开下拉菜单 | `boolean`  | -      |
| allowClear      | 支持清除 | `boolean`  | -      |
| autoFocus      | 默认获取焦点 | `boolean`  | -      |
| defaultOpen      | 是否默认展开下拉菜单 | `boolean`  | -      |
| disabled      | 禁用状态控制 | `boolean`  | -      |
| getPopupContainer      | 提示信息挂载点，默认挂载到 body 上 | `((node?: any) => HTMLElement)`  | -      |
| notFoundContent      | 当下拉列表为空时显示的内容 | `ReactNode`  | -      |
| placeholder      | placeholder | `string`  | -      |
| className      | 自定义className | `string`  | -      |
| style      | 自定义style | `CSSProperties`  | -      |
| onChange      | 选中 option，或 input 的 value 变化时，调用此函数 | `((value: any, option?: any) => void)`  | -      |
| onDropdownVisibleChange      | 展开下拉菜单的回调 | `((open: boolean) => void)`  | -      |
| onSearch      | 文本框值变化时回调 | `((value: string) => void)`  | -      |
| onSelect      | 被选中时调用，参数为选中项的 value (或 key) 值 | `((value?: any, option?: any) => void)`  | -      |


### 
