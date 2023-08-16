---
title: 分页 - Pagination
nav:
  title: 组件
  path: /components
group:
  title: 导航
---

# 分页 Pagination

采用分页的形式分隔长列表，每次只加载一个页面；
当加载/渲染所有数据将花费很多时间时；
可切换页码浏览数据。

### 基础分页
<code src="./demos/basic.tsx"></code>

### 改变每页展示条目
<code src="./demos/lessItem.tsx"></code>

### 不展示总页数
<code src="./demos/footerCount.tsx"></code>

<!-- ### 更多分页 -->
<!-- <code src="./demos/more-page.tsx"></code> -->

### 跳转
<code src="./demos/page-jumper.tsx"></code>

### 迷你
<code src="./demos/mini.tsx"></code>

### 简约
<code src="./demos/simple.tsx"></code>

### 总数
<code src="./demos/show-total.tsx"></code>

### 自定义上一步｜下一步｜前后5页跳转
<code src="./demos/item-render.tsx"></code>

### 受控的页码
<code src="./demos/current-control.tsx"></code>


### Pagination Props

| 参数 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :----- |
| footerCount      | 分页按钮数量 配置此项会固定显示分页按钮 | `number`  | -      |
| size      | 大小 | `"default"`\|` "mini"`\|` "small"`  | default      |
| current      | 当前页 | `number`  | -      |
| defaultPageSize      | 默认每页条数 | `number`  | 10      |
| pageSize      | 每页多少条 | `number`  | -      |
| disabled      | 是否禁用 | `boolean`  | false      |
| showQuickJumper      | 是否可以快速跳转至某页 | `boolean`  | false      |
| total      | 数据总数 | `number`  | 0      |
| simple      | 当添加该属性时，显示为简单分页 | `boolean`  | false      |
| itemRender      | 可用于自定义修改page的前一页，后一页，前5页，后5页的元素内容 | `((page: number, type: "page"`\|` "prev"`\|` "next"`\|` "jump-prev"`\|` "jump-next", originalElement: ReactNode) => ReactNode)`  | -      |
| showTotal      | 用于显示数据总量和当前数据顺序 | `((total: number, range: number[]) => ReactNode)`  | -      |
| onChange      | 页码改变的回调，参数是改变后的页码及每页条数 | `((page: number, pageSize: number) => void)`  | -      |
| className      | 自定义样式类 | `string`  | -      |
| showSizeChanger      | TODO 依赖Select组件 是否展示 pageSize 切换器，当 total 大于 50 时默认为 true | `boolean`  | -      |
| onShowSizeChange      | TODO pageSize变化的回调 | `((current?: number, size?: number`\|` undefined) => void)`\|` undefined`  | -      |
| hideOnSinglePage      | 只有一页时是否隐藏分页器 | `boolean`  | false      |
| pageSizeOptions      | 指定每页可以显示多少条 | `number[]`  | -      |
| showLessItems      | 是否显示较少页面内容 | `boolean`  | -      |
| leftRightItemOne      | 配合showLessItems使用，只显示选中项间隔为1的左右两项，不包含首页和末尾页 | `boolean`  | -      |


### 
