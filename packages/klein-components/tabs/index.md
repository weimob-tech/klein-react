---
title: 选项卡 - Tabs
nav:
  title: 组件
  path: /components
group:
  title: 数据展示
---

# 选项卡 Tabs
选项卡切换组件提供平级的区域将大块内容进行收纳和展现，保持界面整洁。

### 基础示例
<code src="./demos/basic.tsx"></code>
<!-- <code src="./demos/disabled.tsx"></code> -->

### 有icon Tabs
<code src="./demos/icon.tsx"></code>

### 卡片模式

<code src="./demos/card.tsx"></code>

### 尺寸大小

<code src="./demos/size.tsx"></code>

### 更多标签页

<code src="./demos/more.tsx"></code>

### 支持编辑的标签页

<code src="./demos/editable.tsx"></code>


### Tabs Props

| 参数 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :----- |
| activeKey      | 当前激活 tab 面板的 key | `string`\|` number`  | -      |
| size      | 尺寸 | `"small"`\|` "middle"`\|` "large"`  | -      |
| defaultActiveKey      | 默认激活 tab 面板的 key | `string`  | -      |
| onChange      | 改变回调 | `((activeKey: ReactText) => void)`  | -      |
| onTabClick      | 点击回调 | `((activeKey: ReactText) => void)`  | -      |
| type      | 页签的基本样式，可选 line、card 类型 | `"line"`\|` "card"`  | line      |
| moreIcon      | 自定义折叠 icon | `ReactNode`  | -      |
| renderTabBar      | 替换TabBar，用于二次封装标签头	 | `(props: any, DefaultTabBar: React.ComponentType) => React.ReactElement` | -      |
| tabLine      | 控制是否显示tabs下的横线 | `boolean`  | -      |
| editable      | tabpane是否允许新增删除 | `boolean`  | -      |
| hideAdd      | 是否隐藏添加按钮 | `boolean`  | -      |
| addIcon      | 自定义新增icon | `ReactNode`  | -      |
| isHoverClose      | 删除icon是否hover展示 | `boolean`  | -      |
| deleteIcon      | 自定义删除icon | `ReactNode`  | -      |
| destroyInactiveTabPane      | 被隐藏时是否销毁 DOM 结构 | `boolean`  | -      |
| onEdit      | 新增和删除页签的回调，仅在editable为true时有效 | `((e: string`\|` MouseEvent<Element, MouseEvent>`\|` KeyboardEvent<Element>, action: "add"`\|` "remove") => void)`  | -      |


### Tabs.TabPane

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| key | 对应 activeKey | string | - |
| tab | 选项卡头显示文字 | React.ReactNode | - |
| disabled | 是否禁用 | boolean | - |

### 
