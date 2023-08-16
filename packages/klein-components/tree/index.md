---
title: 树形控件 - Tree
nav:
  title: 组件
  path: /components
group:
  title: 数据展示
---
# 树形控件 Tree

用于承载有父子关系的结构化内容，例如文件夹、组织架构等层级较多的内容，树可以完整展现他们的层级关系，并具有展开、收起、选择等交互功能。

### 基础示例
<code src="./demos/basic.tsx" background="#f0f2f5"></code>

### 数据按需加载

<code src="./demos/loadData.tsx" background="#f0f2f5"></code>

### 树形组件

<code src="./demos/verticalTreeBasic.tsx" background="#f0f2f5"></code>

### 数据按需加载

<code src="./demos/verticalTreeLoadData.tsx" background="#f0f2f5"></code>

### 支持拖拽

<code src="./demos/verticalTreeDraggable.tsx" background="#f0f2f5"></code>

### 自定义图标

<code src="./demos/verticalTreeCustomIcon.tsx" background="#f0f2f5"></code>

### 自定义展开图标

<code src="./demos/verticalTreeSwicthIcon.tsx" background="#f0f2f5"></code>

### 展示连接线

<code src="./demos/verticalTreeShowLine.tsx" background="#f0f2f5"></code>

### 搜索树

<code src="./demos/verticalTreeSearchList.tsx" background="#f0f2f5"></code>

### 虚拟滚动

<code src="./demos/verticalTreeVritual.tsx" background="#f0f2f5"></code>


### HorizontalTree Props

| 参数 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :----- |
| columnWidth      | 列宽度 | `number`  | -      |
| columnStyle      | 列样式 | `CSSProperties`  | -      |
| checkedKeys      | (受控）选中复选框的树节点 | `Key[][]`  | -      |
| defaultCheckedKeys      | 默认选中复选框的树节点 | `Key[][]`  | -      |
| onCheck      | 勾选树节点触发 | `((keys: Key[][], info: CheckedInfo) => void)`  | -      |
| onSelect      | 点击树节点触发 | `((selectedKeys: Key[], info: SelectedInfo, checkedKeys?: Key[][]) => void)`\|` undefined`  | -      |
| showIcon      | 是否显示自定义icon | `boolean`  | -      |
| checkable      | 节点前添加 Checkbox 复选框 | `boolean`  | -      |
| fieldNames      | 自定义节点 title、key、children 的字段 | `FieldNames`  | -      |
| treeData      | treeNodes 数据 | `DataNode[]`  | -      |
| direction      | 树节点展开的方向 | `"horizontal"`\|` "vertical"`  | -      |
| multiple      | 支持点选多个节点 | `boolean`  | -      |
| switcherIcon      | 自定义树节点的展开/折叠图标 | `string`\|` number`\|` boolean`\|` {}`\|` ReactElement<any, string`\|` ((props: any) => ReactElement<any, string`\|` ...`\|` (new (props: any) => Component<any, any, any>)>`\|` null)`\|` (new (props: any) => Component<...>)>`\|` ... 4 more ...`  | -      |
| loadData      | 异步加载数据 | `((node: TreeNode, level: number) => Promise<any>)`  | -      |


### VerticalTree Props

| 参数 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :----- |
| allLineClickable      | 当一整行点击时触发check或者select效果 | `boolean`  | -      |
| showSearch      | 是否展示搜索框, 无法配合按需加载使用 | `boolean`  | -      |
| searchValue      | 搜索框的值 | `any`  | -      |
| searchListType      | 搜索时的展示类型 | `"tree-list"`\|` "list"`  | tree-list      |
| hover      | 树节点hover时的样式 | `"longtest"`\|` "medium"`\|` "shortest"`  | longtest      |
| draggable      | 是否支持拖拽 | `boolean`  | -      |
| height      | 设置虚拟滚动容器高度 | `number`  | -      |
| virtual      | 设置 false 时关闭虚拟滚动 | `boolean`  | true      |
| showLine      | 是否显示连接线 | `boolean`  | -      |
| defaultExpandAll      | 默认全部展开 | `boolean`  | -      |
| customSearch      | 自定义search的表现形式 | `boolean`  | -      |
| autoExpandParent      | 自动展开父级 | `boolean`  | false      |
| placeholder      | search输入框placeholder | `string`  | -      |
| renderTreeNode      | 搜索框值变化时的回调 | `((node: TreeNode) => ReactNode)`  | -      |
| onSearchChange      | 搜索框值变化时的回调 | `((value: string, list?: ReactNode[]) => void)`\|` undefined`  | -      |
| onCheck      | 勾选树节点触发 | `((keys: Key[], info: CheckedInfo) => void)`  | -      |
| onSearchListSelect      | 点击搜索项时的回调 | `((path: ReactNode[], e: MouseEvent<HTMLDivElement, MouseEvent>) => void)`  | -      |
| showIcon      | 是否显示自定义icon | `boolean`  | -      |
| checkable      | 节点前添加 Checkbox 复选框 | `boolean`  | false      |
| fieldNames      | 自定义节点 title、key、children 的字段 | `FieldNames`  | -      |
| treeData      | treeNodes 数据 | `DataNode[]`  | -      |
| direction      | 树节点展开的方向 | `"horizontal"`\|` "vertical"`  | -      |
| multiple      | 支持点选多个节点 | `boolean`  | false      |
| switcherIcon      | 自定义树节点的展开/折叠图标 | `string`\|` number`\|` boolean`\|` {}`\|` ReactElement<any, string`\|` ((props: any) => ReactElement<any, string`\|` ...`\|` (new (props: any) => Component<any, any, any>)>`\|` null)`\|` (new (props: any) => Component<...>)>`\|` ... 4 more ...`  | -      |
| selectedKeys      | （受控）设置选中的树节点（横向树形组件不存在该属性） | `Key[]`  | -      |
| checkedKeys      | （受控）选中复选框的树节点 | `Key[]`  | -      |
| expandedKeys      | （受控）展开的树节点 | `Key[]`  | -      |
| defaultSelectedKeys      | 默认选中的树节点（横向树形组件不存在该属性） | `Key[]`  | -      |
| defaultCheckedKeys      | 默认选中复选框的树节点 | `Key[]`  | -      |
| defaultExpandedKeys      | 默认展开的树节点 | `Key[]`  | -      |
| loadData      | 异步加载数据 | `((node: TreeNode, level: number) => Promise<any>)`  | -      |
| onSelect      | 点击树节点触发 | `((selectedKeys: Key[], info: SelectedInfo, checkedKeys?: Key[][]) => void)`\|` undefined`  | -      |
| onExpand      | 展开树节点触发 | `((expandedKeys: Key[], info: { expand: boolean; node: TreeNode; }) => void)`  | -      |
| onDrop      | drop 触发时调用 | `((info: DropInfo) => void)`  | -      |
| onDragEnd      | dragend 触发时调用 | `((info: DragInfo) => void)`  | -      |
| onDragEnter      | dragenter 触发时调用 | `((info: DragInfo) => void)`  | -      |
| onDragLeave      | dragleave 触发时调用 | `((info: DragInfo) => void)`  | -      |
| onDragOver      | dragover 触发时调用 | `((info: DragInfo) => void)`  | -      |
| onDragStart      | 开始拖拽时调用 | `((info: DragInfo) => void)`  | -      |


### 
