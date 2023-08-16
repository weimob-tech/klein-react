---
title: 表格 - Table
nav:
  title: 组件
  path: /components
group:
  title: 数据展示
---

# 表格 Table

表格组件用于展示多条结构类似的数据，可对数据进行排序、筛选、对比或其他自定义操作等复杂行为时。
### 基础示例

基本用法。

<code src="./demos/editCell.tsx"></code>

### 表格无数据

基本用法。

<code src="./demos/empty.tsx"></code>

### 选择和操作

基本用法。

<code src="./demos/row-selection-and-operation.tsx"></code>

### 自定义选择项

通过 `rowSelection.selections` 自定义选择项，默认不显示下拉选项，设为 `true` 时显示默认选择项。

<code src="./demos/row-selection-custom.tsx"></code>

### 筛选和排序

对某一列数据进行筛选，使用列的 `filters` 属性来指定需要筛选菜单的列，`onFilter` 用于筛选当前数据，`filterMultiple` 用于指定多选和单选。
- 对某一列数据进行排序，通过指定列的 `sorter` 函数即可启动排序按钮`sorter: function(rowA, rowB) { ... }`， rowA、rowB 为比较的两个行数据。
- sortDirections: ['ascend' | 'descend']改变每列可用的排序方式，切换排序时按数组内容依次切换，设置在 table props 上时对所有列生效你可以通过设置 `['ascend', 'descend', 'ascend']` 禁止排序恢复到默认状态。
- 使用 `defaultSortOrder` 属性，设置列的默认排序顺序。

<code src="./demos/head.tsx"></code>

### 展开行

当表格内容较多不能一次性完全展示时。

<code src="./demos/expand.tsx"></code>

### 表格行/列合并

表头只支持列合并，使用 column 里的 colSpan 进行设置表格支持行/列合并，使用render里的单元格属性colSpan或者rowSpan设值为0时，设置的表格不会渲染。

<code src="./demos/colspan-rowspan.tsx"></code>

###  带边框

添加表格边框线，页头和页脚。

<code src="./demos/bordered.tsx"></code>

<!-- ### 自定义筛选菜单

通过 `filterDropdown` 自定义的列筛选功能，并实现一个搜索列的示例

<code src="./demos/custom-filter-panel.tsx"></code> -->

### 拖拽排序

使用自定义元素，我们可以集成 react-dnd 来实现拖拽排序。

<code src="./demos/drag-sorting.tsx"></code>

### 拖拽手柄列

拖拽手柄列。

<code src="./demos/drag-sorting-handler.tsx"></code>

### 固定头和列

适合同时展示有大量数据和数据列。

<code src="./demos/fixed-columns-header.tsx"></code>

### 固定列

对于列数很多的数据，可以固定前后的列，横向滚动查看其它数据，需要和 `scroll.x` 配合使用。

<code src="./demos/fixed-columns.tsx"></code>

### 固定表头

方便一页内展示大量数据。

<code src="./demos/fixed-header.tsx"></code>

### 表头分组

使用 `columns[n]` 可以内嵌 `children`，以渲染分组表头。

<code src="./demos/grouping-columns.tsx"></code>

### 可伸缩列

可伸缩列。

<code src="./demos/resizable-column.tsx"></code>

### 开启选择

第一列是联动的选择框可以通过 `rowSelection.type` 属性指定选择类型，默认为 `checkbox`。

<code src="./demos/row-selection.tsx"></code>

### 紧凑型

两种紧凑型的列表，小型列表只用于对话框内。

<code src="./demos/size.tsx"></code>

### 随页面滚动的固定表头和滚动条

对于长表格，需要滚动才能查看表头和滚动条，那么现在可以设置跟随页面固定表头和滚动条。

<code src="./demos/sticky.tsx"></code>

### 单元格自动省略

设置 `column.ellipsis` 可以让单元格内容根据宽度自动省略。

<code src="./demos/ellipsis.tsx"></code>

### 树形数据展示

表格支持树形数据的展示，当数据中有 children 字段时会自动展示为树形表格，如果不需要或配置为其他字段可以用 childrenColumnName 进行配置。
可以通过设置 indentSize 以控制每一层的缩进宽度。

<code src="./demos/tree-data.tsx"></code>

### Table

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| :--- | :--- | :--- | :--- | :---- |
| bordered | 是否展示外边框和列边框 | boolean | false |  |
| outlineBordered | 是否展示外边框无列边框 | boolean | false |  |
| emptyText | 自定义空态状态展示 | reactNode |  |  |
| columns | 表格列的配置描述，具体项见下表 | ColumnsType\[] | - |  |
| components | 覆盖默认的 table 元素 | TableComponents | - |  |
| dataSource | 数据数组 | object\[] | - |  |
| expandable | 配置展开属性 | expandable | - |  |
| footer | 表格尾部 | function(currentPageData) | - |  |
| getPopupContainer | 设置表格内各类浮层的渲染节点，如筛选菜单 | (triggerNode) => HTMLElement | () => TableHtmlElement |  |
| loading | 页面是否加载中 | boolean \| [Spin Props](/components/spin/#API) | false |  |
| locale | 默认文案设置，目前包括排序、过滤、空数据文案 | object | filterConfirm: `确定` <br> filterReset: `重置` <br> 默认值 |  |
| pagination | 分页器，参考 [pagination](/components/pagination/) 文档，设为 false 时不展示和进行分页 | object | - |  |
| rowClassName | 表格行的类名 | function(record, index): string | - |  |
| rowKey | 表格行 key 的取值，可以是字符串或一个函数 | string \| function(record): string | `key` |  |
| rowSelection | 表格行是否可选择，配置项 | object | - |  |
| scroll | 表格是否可滚动，也可以指定滚动区域的宽、高，配置项 | object | - |  |
| showHeader | 是否显示表头 | boolean | true |  |
| showSorterTooltip | 表头是否显示下一次排序的 tooltip 提示当参数类型为对象时，将被设置为 Tooltip 的属性 | boolean \| [Tooltip props](/components/tooltip/) | true |  |
| size | 表格大小 | `default` \| `middle` \| `small` | default |  |
| sortDirections | 支持的排序方式，取值为 `ascend` `descend` | Array | \[`ascend`, `descend`] |  |
| sticky | 设置粘性头部和滚动条 | boolean \| `{offsetHeader?: number, offsetScroll?: number, getContainer?: () => HTMLElement}` | - | 4.6.0 (getContainer: 4.7.0) |
| summary | 总结栏 | (currentData) => ReactNode | - |  |
| tableLayout | 表格元素的 table-layout 属性，设为 `fixed` 表示内容不会影响列的布局 | - \| `auto` \| `fixed` | 无<hr />固定表头/列或使用了 `column.ellipsis` 时，默认值为 `fixed` |  |
| title | 表格标题 | function(currentPageData) | - |  |
| onChange | 分页、排序、筛选变化时触发 | function(pagination, filters, sorter, extra: { currentDataSource: \[], action: `paginate` \| `sort` \| `filter` }) | - |  |
| onHeaderRow | 设置头部行属性 | function(columns, index) | - |  |
| onRow | 设置行属性 | function(record, index) | - |  |

### onRow 用法

适用于onRow、onHeaderRow、onCell、onHeaderCell。

```js
<Table
  onRow={record => {
    return {
      onClick: event => {}, // 点击行
      onDoubleClick: event => {},
      onContextMenu: event => {},
      onMouseEnter: event => {}, // 鼠标移入行
      onMouseLeave: event => {},
    };
  }}
  onHeaderRow={(columns, index) => {
    return {
      onClick: () => {}, // 点击表头行
    };
  }}
/>
```


### Column

列描述数据对象，是 Columns 中的一项，Column 使用相同的 API。

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| :--- | :-------- | :-------- | :--- | :--- |
| align | 设置列的对齐方式 | `left` \| `right` \| `center` | `left` |  |
| className | 列样式类名 | string | - |  |
| colSpan | 表头列合并,设置为 0 时，不渲染 | number | - |  |
| dataIndex | 列数据在数据项中对应的路径，支持通过数组查询嵌套路径 | string \| string\[] | - |  |
| defaultFilteredValue | 默认筛选值 | string\[] | - |  |
| defaultSortOrder | 默认排序顺序 | `ascend` \| `descend` | - |  |
| editable | 是否可编辑 | boolean | false |  |
| ellipsis | 超过宽度将自动省略，暂不支持和排序筛选一起使用<br />设置为 `true` 或 `{ showTitle?: boolean }` 时，表格布局将变成 `tableLayout="fixed"` | boolean \| { showTitle?: boolean } | false | showTitle: 4.3.0 |
| filterDropdown | 可以自定义筛选菜单，此函数只负责渲染图层，需要自行编写各种交互 | ReactNode \| (props: FilterDropdownProps) => ReactNode | - |  |
| filterDropdownVisible | 用于控制自定义筛选菜单是否可见 | boolean | - |  |
| filtered | 标识数据是否经过过滤，筛选图标会高亮 | boolean | false |  |
| filteredValue | 筛选的受控属性，外界可用此控制列的筛选状态，值为已筛选的 value 数组 | string\[] | - |  |
| filterIcon | 自定义 filter 图标 | ReactNode \| (filtered: boolean) => ReactNode | false |  |
| filterMultiple | 是否多选 | boolean | true |  |
| filters | 表头的筛选菜单项 | object\[] | - |  |
| fixed | （IE 下无效）列是否固定，可选 true (等效于 left) `left` `right` | boolean \| string | false |  |
| key | React 需要的 key，如果已经设置了唯一的 `dataIndex`，可以忽略这个属性 | string | - |  |
| render | 生成复杂数据的渲染函数，参数分别为当前行的值，当前行数据，行索引，@return 里面可以设置表格 行/列合并 | function(text, record, index) {} | - |  |
| responsive | 响应式 breakpoint 配置列表未设置则始终可见 | Breakpoint\[] | - | 4.2.0 |
| shouldCellUpdate | 自定义单元格渲染时机 | (record, prevRecord) => boolean | - | 4.3.0 |
| showSorterTooltip | 表头显示下一次排序的 tooltip 提示, 覆盖 table 中 `showSorterTooltip` | boolean \| [Tooltip props](/components/tooltip/#API) | true |  |
| sortDirections | 支持的排序方式，覆盖 `Table` 中 `sortDirections`， 取值为 `ascend` `descend` | Array | \[`ascend`, `descend`] |  |
| sorter | 排序函数，本地排序使用一个函数(参考 Array.sort 的 compareFunction)，需要服务端排序可设为 true | function \| boolean | - |  |
| sortOrder | 排序的受控属性，外界可用此控制列的排序，可设置为 `ascend` `descend` false | boolean \| string | - |  |
| title | 列头显示文字（函数用法 `3.10.0` 后支持） | ReactNode \| ({ sortOrder, sortColumn, filters }) => ReactNode | - |  |
| width | 列宽度（指定了也不生效？） | string \| number | - |  |
| onCell | 设置单元格属性 | function(record, rowIndex) | - |  |
| onFilter | 本地模式下，确定筛选的运行函数 | function | - |  |
| onFilterDropdownVisibleChange | 自定义筛选菜单可见变化时调用 | function(visible) {} | - |  |
| onHeaderCell | 设置头部单元格属性 | function(column) | - |  |

### ColumnGroup

| 参数  | 说明         | 类型      | 默认值 |
| :----- | :------------ | :--------- | :------ |
| title | 列头显示文字 | ReactNode | -      |

### pagination

分页的配置项。

| 参数 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :---- |
| position | 指定分页显示的位置， 取值为`topLeft` \| `topCenter` \| `topRight` \|`bottomLeft` \| `bottomCenter` \| `bottomRight` | Array | \[`bottomRight`] |

更多配置项，请查看 [`Pagination`](/components/pagination/)

### expandable

展开功能的配置。

| 参数 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :---- |
| childrenColumnName | 指定树形结构的列名 | string | children |
| columnWidth | 自定义展开列宽度 | string \| number | - |
| defaultExpandAllRows | 初始时，是否展开所有行 | boolean | false |
| defaultExpandedRowKeys | 默认展开的行 | string\[] | - |
| expandedRowClassName | 展开行的 className | function(record, index, indent): string | - |
| expandedRowKeys | 展开的行，控制属性 | string\[] | - |
| expandedRowRender | 额外的展开行 | function(record, index, indent, expanded): ReactNode | - |
| expandIcon | 自定义展开图标，参考示例| function(props): ReactNode | - |
| expandIconColumnIndex | 自定义展开按钮的列顺序，`-1` 时不展示 | number | - |
| expandRowByClick | 通过点击行来展开子行 | boolean | false |
| indentSize | 展示树形数据时，每层缩进的宽度，以 px 为单位 | number | 15 |
| rowExpandable | 设置是否允许行展开 | (record) => boolean | - |
| onExpand | 点击展开图标时触发 | function(expanded, record) | - |
| onExpandedRowsChange | 展开的行变化时触发 | function(expandedRows) | - |

### rowSelection

选择功能的配置。

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| :--- | :--- | :--- | :--- | :--- |
| checkStrictly | checkable 状态下节点选择完全受控（父子数据选中状态不再关联） | boolean | true | 4.4.0 |
| columnTitle | 自定义列表选择框标题 | ReactNode | - |  |
| columnWidth | 自定义列表选择框宽度 | string \| number | `32px` |  |
| fixed | 把选择框列固定在左边 | boolean | - |  |
| getCheckboxProps | 选择框的默认属性配置 | function(record) | - |  |
| hideSelectAll | 隐藏全选勾选框与自定义选择项 | boolean | false | 4.3.0 |
| preserveSelectedRowKeys | 当数据被删除时仍然保留选项的 `key` | boolean | - | 4.4.0 |
| renderCell | 渲染勾选框，用法与 Column 的 `render` 相同 | function(checked, record, index, originNode) {} | - | 4.1.0 |
| selectedRowKeys | 指定选中项的 key 数组，需要和 onChange 进行配合 | string\[] \| number\[] | \[] |  |
| defaultSelectedRowKeys | 默认选中项的 key 数组 | string\[] \| number\[] | \[] |  |
| selections | 自定义选择项 配置项, 设为 `true` 时使用默认选择项 | object\[] \| boolean | true |  |
| type | 多选/单选 | `checkbox` \| `radio` | `checkbox` |  |
| onChange | 选中项发生变化时的回调 | function(selectedRowKeys, selectedRows) | - |  |
| onSelect | 用户手动选择/取消选择某行的回调 | function(record, selected, selectedRows, nativeEvent) | - |  |
| onSelectAll | 用户手动选择/取消选择所有行的回调 | function(selected, selectedRows, changeRows) | - |  |
| onSelectInvert | 用户手动选择反选的回调 | function(selectedRowKeys) | - |  |
| onSelectNone | 用户清空选择的回调 | function() | - |  |

### scroll

| 参数 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| scrollToFirstRowOnChange | 当分页、排序、筛选变化后是否滚动到表格顶部 | boolean | - |
| x | 设置横向滚动，也可用于指定滚动区域的宽，可以设置为像素值，百分比，true 和 'max-content' | string \| number \| true | - |
| y | 设置纵向滚动，也可用于指定滚动区域的高，可以设置为像素值 | string \| number | - |

### selection

| 参数     | 说明                       | 类型                        | 默认值 |
| :-------- | :-------------------------- | :--------------------------- | :------ |
| key      | React 需要的 key，建议设置 | string                      | -      |
| text     | 选择项显示的文字           | ReactNode                   | -      |
| onSelect | 选择项点击回调             | function(changeableRowKeys) | -      |

### 在 TypeScript 中使用

```js
import { Table } from 'klein';
import { ColumnsType } from 'klein/es/table';

interface User {
  key: number;
  name: string;
}

const columns: ColumnsType<User> = [
  {
    key: 'name',
    title: 'Name',
    dataIndex: 'name',
  },
];

const data: User[] = [
  {
    key: 0,
    name: 'Jack',
  },
];

export default () => (
  <>
    <Table<User> columns={columns} dataSource={data} />
    /* 使用 JSX 风格的 API */
    <Table<User> dataSource={data}>
      <Table.Column<User> key="name" title="Name" dataIndex="name" />
    </Table>
  </>
);
