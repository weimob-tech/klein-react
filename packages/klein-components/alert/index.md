---
title: 警告提示 - Alert
nav:
  title: 组件
  path: /components
group:
  title: 反馈
---

# 警告提示 Alert

用于页面中展示重要的提示信息、当某个页面需要向用户显示警告的信息时。
非浮层的静态展现形式，始终展现，不会自动消失，用户可以点击关闭。
### 基本用法

<code src="./demos/basic.tsx"></code>

### 自定义消息格式

<code src="./demos/message.tsx"></code>

### 自定义关闭按钮

<code src="./demos/closable.tsx"></code>

### 显示图标

<code src="./demos/showIcon.tsx"></code>

### 提示辅助内容

<code src="./demos/withDescription.tsx"></code>

### 操作按钮

<code src="./demos/action.tsx"></code>

### Alert Props

| 参数        | 说明                                | 类型                                                 | 默认值 |
| :---------- | :---------------------------------- | :--------------------------------------------------- | :----- |
| type        | 警告提示的样式，支持四种样式        | `"success"`\|` "info"`\|` "warning"`\|` "error"`     | info   |
| message     | 警告提示内容                        | `ReactNode`                                          | -      |
| description | 警告提示辅助内容                    | `ReactNode`                                          | -      |
| closable    | 是否显示关闭按钮                    | `boolean`                                            | false  |
| closeText   | 自定义关闭按钮                      | `ReactNode`                                          | -      |
| showIcon    | 是否显示 icon                       | `boolean`                                            | false  |
| icon        | 自定义图标，showIcon 为 true 时有效 | `ReactNode`                                          | -      |
| action      | 操作按钮                            | `ReactNode`                                          | -      |
| className   | 自定义 className                    | `string`                                             | -      |
| style       | 自定义 style                        | `CSSProperties`                                      | -      |
| onClose     | 关闭时的回调函数                    | `((event: MouseEvent<Element, MouseEvent>) => void)` | -      |

###
