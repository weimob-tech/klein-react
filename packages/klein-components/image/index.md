---
title: 图片 - Image
nav:
  title: 组件
  path: /components
group:
  title: 数据展示
---

# 图片 Image

### 基础示例

图片显示方式，支持object-fit所有属性

<code src="./demos/basic.tsx"></code>

### 容错处理

图片加载失败时显示状态，也可以通过 fallback 属性加载自定义图片

<code src="./demos/error.tsx"></code>

### 多张图片

显示多张图片并支持切换

<code src="./demos/images.tsx"></code>

### 相册模式

从一张图片点开相册

<code src="./demos/preview.tsx"></code>

### 功能按钮

支持放大缩小等功能

<code src="./demos/functions.tsx"></code>

### Image Props

| 参数     | 说明             | 类型                                                     | 默认值 |
| :------- | :--------------- | :------------------------------------------------------- | :----- |
| alt      | 图片描述         | `string`                                                 | -      |
| width    | 图片宽度         | `number`                                                 | -      |
| height   | 图片高度         | `number`                                                 | -      |
| functions  | 显示放大缩小等功能，传入函数自定义功能按钮         | `boolean` \| `(funcs: React.ReactNode[]) => React.ReactNode[]`  | false      |
| preview  | 预览参数         | `boolean`                                                | true   |
| src      | 图片地址         | `string`                                                 | -      |
| fit      | 确定图片如何适应容器框，同原生 object-fit | `fill` \| `contain` \| `cover` \| `none` \| `scale-down`                                                 | -      |
| fallback | 加载失败容错地址 | `string`                                                 | -      |
| multiple | 多张预览         | `boolean`                                                | -      |
| images   | 多张图片列表     | `PreviewImageProps[]`                                    | -      |
| id       | 图片唯一值       | `string`\|` number`                                      | -      |
| onError  | 错误回调         | `((e: SyntheticEvent<HTMLImageElement, Event>) => void)` | -      |

### Image.Preview

| 参数 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :----- |
| images      | 图片列表 | `PreviewImageProps[]`  | -      |


###
