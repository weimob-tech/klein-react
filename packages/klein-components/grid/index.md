---
title: 栅格 - Grid
nav:
  title: 24栅格
  path: /components
group:
  title: 布局
---

# 栅格 Grid

基于flex的栅格化布局，row定义行，col定义列。

### 基础栅格

使用单一的一组 Row 和 Col 栅格组件，就可以创建一个基本的栅格系统，所有列（Col）必须放在 Row 内。

<code src="./demos/basic.tsx"></code>

### 响应式栅格

如果要支持响应式，可以写成 { xs: 8, sm: 16, md: 24, lg: 32 }。
如果需要垂直间距，可以写成数组形式 [水平间距, 垂直间距] [16, { xs: 8, sm: 16, md: 24, lg: 32 }]。

<code src="./demos/responsive.tsx"></code>

### Col Props

| 参数 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :----- |
| span      | 栅格占位格数 | `number`  | -      |
| prefixCls      | 自定义类名前缀 | `string`  | -      |
| flex      | flex布局属性 | `string`\|` number`  | -      |
| offset      | 栅格左侧的间隔格数，输入为px，em，rem，%等类型的字符串时为即为输入值 | `string`\|` number`  | -      |


### Row Props

| 参数 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :----- |
| justify      | 水平排列方式 | `"start"`\|` "end"`\|` "center"`\|` "space-around"`\|` "space-between"`  | start      |
| align      | 垂直对齐方式 | `"top"`\|` "middle"`\|` "bottom"`\|` "stretch"`  | -      |
| gutter      | 栅格间隔 | `number`\|` Partial<Record<Breakpoint, number>>`\|` GutterContent[]`  | -      |
| prefixCls      | 自定义类名前缀 | `string`  | -      |


###
