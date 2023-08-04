---
title: 菜单 - Menu
nav:
  title: 组件
  path: /components
group:
  title: 导航
---

# 菜单 Menu

为页面和功能提供导航的菜单列表
顶部导航：水平的顶部导航菜单
<!-- 侧边导航：包含内嵌式菜单、垂直菜单这两种导航，并且都有深色模式和浅色模式； -->

### 顶部导航

水平的顶部导航菜单

<code src="./demos/basic.tsx"></code>

### Menu Props

| 参数                 | 说明                               | 类型                                       | 默认值   |
| :------------------- | :--------------------------------- | :----------------------------------------- | :------- |
| theme                | 主题色                             | `"light"`\|` "dark"`                       | light    |
| mode                 | 菜单类型                           | `"vertical"`\|` "horizontal"`\|` "inline"` | vertical |
| prefixCls            | 自定义样式前缀                     | `string`                                   | -        |
| className            | 自定义 className                   | `string`                                   | -        |
| style                | 自定义 style                       | `CSSProperties`                            | -        |
| inlineCollapsed      | inline 时菜单是否收起状态          | `boolean`                                  | -        |
| expandIcon           | 自定义展开图标                     | `ReactNode`                                | -        |
| defaultOpenKeys      | 初始展开的 SubMenu 菜单项 key 数组 | `string[]`                                 | -        |
| defaultSelectedKeys  | 初始选中的菜单项 key 数组          | `string[]`                                 | -        |
| inlineIndent         | inline 模式的菜单缩进宽度          | `number`                                   | 26       |
| selectedKeys         | 当前选中的菜单项 key 数组          | `string[]`                                 | -        |
| openKeys             | 当前展开的 SubMenu 菜单项 key 数组 | `string[]`                                 | -        |
| multiple             | 是否允许多选                       | `boolean`                                  | false    |
| triggerSubMenuAction | SubMenu 展开/关闭的触发行为        | `"hover`\|` click"`                        | -        |
| onClick              | 点击 MenuItem 调用此函数           | `((e: EventProps) => void)`                | -        |
| onDeselect           | 取消选中时调用，仅在 multiple 生效 | `((e: EventProps) => void)`                | -        |
| onOpenChange         | SubMenu 展开/关闭的回调            | `((openKeys: string[]) => void)`           | -        |
| onSelect             | 被选中时调用                       | `((e: EventProps) => void)`                | -        |

### MenuItem Props

| 参数 | 说明            | 类型     | 默认值 |
| :--- | :-------------- | :------- | :----- |
| key  | item 的唯一标志 | `string` | -      |

<!-- ### SubMenuItem Props

| 参数 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :----- | -->

###
