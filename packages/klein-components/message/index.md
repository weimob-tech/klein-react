---
title: 消息通知 - Message
nav:
  title: 组件
  path: /components
group:
  title: 反馈
---
# 全局提示 Message

全局展示操作反馈信息、在不希望用户执行操作时中断用户前提下、显示一条简短的成功消息

### 基础示例

四种类型的消息提示

<code src="./demos/basic.tsx"></code>

### 自定义message消失时间

设置message消失时间为10s

<code src="./demos/duration.tsx"></code>

### 设置message消失回调

<code src="./demos/onClose.tsx"></code>

### 自定义message样式

<code src="./demos/customStyle.tsx"></code>

### 更新消息内容

可以通过唯一的 key 来更新内容

<code src="./demos/messageWithKey.tsx"></code>

### 限制message数量

配置最大显示数, 超过限制时，最早的消息会被自动关闭

<code src="./demos/maxCount.tsx"></code>

## message总共有如下四种调用方式：

- message.success(content, [duration], onClose)

- message.error(content, [duration], onClose)

- message.info(content, [duration], onClose)

- message.warning(content, [duration], onClose)


| 参数 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :----- |
| content      | 消息内容 | `string`    | -      |
| duration      | 延迟时间 | `number`    | 2s     |
| onClose      | 组件关闭时的回调 | `() => void`    | -      |

## 也可以对象的形式传递参数：

- message.open(config)

- message.success(config)

- message.error(config)

- message.info(config)

- message.warning(config)

## 如下为config的参数：

| 参数 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :----- |
| content      | 消息内容 | `string`  | -      |
| className      | 自定义样式类名 | `string`  | -      |
| duration      | 自动关闭的延时，单位秒设为 0 时不自动关闭 | `number`  | 3      |
| icon      | 自定义icon | `ReactNode`  | -      |
| key      | 当前message的唯一标志 | `string`  | -      |
| style      | 自定义内联样式 | `CSSProperties`  | -      |
| zIndex      | 控制z-index | `number`  | -      |
| onClose      | message关闭时的回调函数 | `(() => void)`  | -      |


### 