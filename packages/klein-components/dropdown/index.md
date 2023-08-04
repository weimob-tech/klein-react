---
title: 下拉菜单 - Dropdown
nav:
  title: 组件
  path: /components
group:
  title: 导航
---
  
# 下拉菜单 Dropdown

向下弹出的列表、当页面上的操作命令过多时，用此组件可以收纳操作元素；点击或移入触点，会出现一个下拉菜单、可在列表中进行选择，并执行相应的命令

### 基础示例

点击显示

<code src="./demos/basic.tsx"></code>

### 触发方式

通过trigger属性控制弹框触发方式

<code src="./demos/click.tsx"></code>

### 多级菜单

传入的菜单里有多个层级

<code src="./demos/moreMenu.tsx"></code>

### 弹出位置

支持多个位置弹出

<code src="./demos/dir.tsx"></code>

### 显示受控

通过visible属性控制弹层的显示隐藏

<code src="./demos/visible.tsx"></code>

### Dropdown Props

| 参数 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :----- |
| onVisibleChange      | 显示隐藏时的回调 | `((visible: boolean) => void)`  | -      |
| visible      | 控制显示隐藏 | `boolean`  | -      |
| disabled      | 是否禁用 | `boolean`  | -      |
| getPopupContainer      | 菜单渲染父节点默认渲染到 body 上 | `((triggerNode: HTMLElement) => HTMLElement)`  | -      |
| placement      | 菜单弹出位置 | `"topLeft"`\|` "topCenter"`\|` "topRight"`\|` "bottomLeft"`\|` "bottomCenter"`\|` "bottomRight"`  | -      |
| overlayClassName      | 下拉根元素的类名称 | `string`  | -      |
| overlayStyle      | 下拉根元素的样式 | `CSSProperties`  | -      |
| arrow      | 是否有箭头 | `boolean`  | -      |
| trigger      | 触发方式 | `("click"`\|` "hover"`\|` "contextMenu")[]`  | ['click']      |
| overlay      | 下拉框的内容  | React.ReactElement  \|  ()=>React.ReactElement | -      |
| hasBottomLine      | 是否有下划线 | `boolean`  | -      |


### Index Props

| 参数 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :----- |
| arrow      | 是否有箭头 | `boolean`  | -      |
| trigger      | 触发方式 | `("click"`\|` "hover"`\|` "contextMenu")[]`  | -      |
| overlay      | 下拉框的内容  | React.ReactElement  \|  ()=>React.ReactElement | -      |
| hasBottomLine      | 是否有下划线 | `boolean`  | -      |

