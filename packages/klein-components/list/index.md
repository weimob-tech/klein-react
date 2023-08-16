---
title: 通用列表 - List
nav:
  title: 组件
  path: /components
group:
  title: 数据展示
---
# 通用列表 List
最基础的列表展示，可承载文字、列表、图片、段落，常用于后台数据展示页面。


### 基础示例

基础列表。

<code src="./demos/basic.tsx"></code>

<!-- ### 列表-带小图

<code src="./demos/smallicon.tsx"></code> -->

<!-- ### 列表-带大图

<code src="./demos/bigicon.tsx"></code> -->

<!-- ### 列表-竖排

<code src="./demos/columList.tsx"></code> -->

### List.Item

| 参数 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :----- |
| actions      | 列表操作组，根据 itemLayout 的不同, 位置在卡片底部或者最右侧 | `ReactNode[]`    | -      |
| extra      | 额外内容, 通常用在 itemLayout 为 vertical 的情况下, 展示右侧内容; horizontal 展示在列表元素最右侧 | `ReactNode`    | -      |


### List Props

| 参数 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :----- |
| dataSource      | 列表数据源 | `any[]`    | []      |
| itemLayout      | 设置 List.Item 布局, 设置成 vertical 则竖直样式显示, 默认横排 | `string`    | horizontal      |
| loadMore      | 加载更多 | `ReactNode`    | -      |
| pagination      | 对应的 pagination 配置, 设置 false 不显示 | `boolean`\|` object`    | -      |
| renderItem      | 当 renderItem 自定义渲染列表项有效时，自定义每一行的 key 的获取方式 | `((item: string`\|` object) => ReactNode)`    | -      |
| size      | list 的尺寸 | `"default"`\|` "large"`\|` "small"`    | default      |
| split      | 是否展示分割线 | `boolean`    | true      |
| direction      | 列表方向 | `string`    | horizontal      |
| locale      | 自定义空状态 | `React.ReactNode`    |       |


### 
