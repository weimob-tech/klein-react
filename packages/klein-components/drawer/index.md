---
title: 抽屉 - Drawer
nav:
  title: 组件
  path: /components
group:
  title: 反馈
---
# 抽屉 Drawer

屏幕边缘滑出的浮层面板
## 何时使用

抽屉从父窗体边缘滑入，覆盖住部分父窗体内容；用户在抽屉内操作时不必离开当前任务，操作完成后，可以平滑地回到原任务


### 基础示例

基础示例.

<code src="./demos/basic.tsx"></code>

### 位置示例

自定义展示位置

<code src="./demos/direction.tsx"></code>

### 尺寸大小

可选择尺寸大小.

<code src="./demos/size.tsx"></code>

### Drawer Props

| 参数 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :----- |
| destroyOnClose      | 关闭时销毁 Drawer 里的子元素 | `boolean`  | -      |
| closable      | 是否显示右上角的关闭按钮 | `boolean`  | -      |
| headerStyle      | 用于设置 Drawer 头部的样式 | `CSSProperties`  | -      |
| bodyStyle      | 可用于设置 Drawer 内容部分的样式 | `CSSProperties`  | -      |
| footerStyle      | 用于设置 Drawer 脚部的样式 | `CSSProperties`  | -      |
| style      | 可用于设置 Drawer 最外层容器的样式，包括 mask | `CSSProperties`  | -      |
| visible      | Drawer 是否可见 | `boolean`  | -      |
| drawerStyle      | 用于设置 Drawer 弹出层的样式 | `CSSProperties`  | -      |
| footer      | 抽屉的页脚 | `ReactNode`  | -      |
| onClose      | 点击遮罩层或右上角叉或取消按钮的回调 | `((e: any) => void)`  | -      |
| closeIcon      | 自定义关闭图标 | `ReactNode`  | -      |
| mask      | 是否展示遮罩 | `boolean`  | -      |
| maskClosable      | 点击蒙层是否允许关闭 | `boolean`  | -      |
| className      | 样式名称 | `string`  | -      |
| size      | 样式名称 | `"small"`\|` "medium"`\|` "large"`  | -      |
| zIndex      | 设置 Drawer 的 z-index | `number`  | -      |
| keyboard      | 是否支持键盘 esc 关闭 | `boolean`  | -      |
| width      | 宽度 | `string`\|` number`  | -      |
| height      | 在 placement 为 top 或 bottom 时使用 | `string`\|` number`  | -      |
| getContainer      | 指定 Drawer 挂载的 HTML 节点, false 为挂载在当前 dom | `string`\|` false`\|` HTMLElement`\|` getContainerFunc`  | -      |
| placement      | 抽屉的方向 | `"top"`\|` "right"`\|` "bottom"`\|` "left"`  | -      |


### 