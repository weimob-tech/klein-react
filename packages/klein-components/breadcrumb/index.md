---
title: 面包屑 - Breadcrumb
nav:
  title: 组件
  path: /components
group:
  title: 导航
---

# 面包屑 Breadcrumb

显示当前页面在系统层级结构中的位置，并能向上返回

当系统拥有超过两级以上的层级结构时；当需要告知用户『你在哪里』时；当需要向上导航的功能时 进行使用


### 基础示例

基础用法

<code src="./demos/basic.tsx"></code>

### 自定义分隔符

通过separator属性自定义分隔符

<code src="./demos/sepatarator.tsx"></code>

### 分隔符

通过`Breadcrumb.Separator`来使用分隔符

<code src="./demos/separatorItem.tsx"></code>

### 自定义icon

在每一项前添加icon

<code src="./demos/icon.tsx"></code>
### Breadcrumb Props

| 参数       | 说明                | 类型        | 默认值 |
| :--------- | :------------------ | :---------- | :----- |
| routes     | router 的路由栈信息 | `any[]`     | -      |
| params     | 路由的参数          | `any`       | -      |
| itemRender | router 的路由栈信息 | `ReactNode` | -      |
| separator  | 自定义分隔符        | `ReactNode` | -      |

### Breadcrumb.item

| 参数      | 说明         | 类型                     | 默认值 |
| :-------- | :----------- | :----------------------- | :----- |
| className | 自定义类名   | `string`                 | -      |
| href      | 链接的目的地 | `string`                 | -      |
| onClick   | 点击事件     | `(e:MouseEvent) => void` | -      |

### Breadcrumb.Separator

| 参数     | 说明           | 类型        | 默认值 |
| :------- | :------------- | :---------- | :----- |
| children | 要显示的分隔符 | `ReactNode` | '/'    |
