---
title: 头像 - Avatar
nav:
  title: 组件
  path: /components
group:
  title: 数据展示
---

# 头像 Avatar

用来代表用户或事物，支持图片或字符

### 头像加载
基础用法
<code src="./demos/basic.tsx"  ></code>

### 加载状态回调
通过onLoad及onError回调事件获取头像加载状态
<code src="./demos/load.tsx"  ></code>

### 不同类型的头像
支持字符，图片
<code src="./demos/type.tsx"  ></code>

### Avatar Props

| 参数      | 说明                     | 类型                                          | 默认值 |
| :-------- | :----------------------- | :-------------------------------------------- | :----- |
| shape     | 指定头像形状             | `"circle"`\|` "square"`                       | circle |
| size      | 设置头像大小             | `number`\|` "small"`\|` "medium"`\|` "large"` | medium |
| src       | 头像资源地址             | `string`                                      | -      |
| style     | 自定义 style             | `CSSProperties`                               | -      |
| className | 自定义 className         | `string`                                      | -      |
| alt       | 图片无法显示时的替代文本 | `string`                                      | -      |
| onError   | 加载失败的事件           | `(() => void)`                                | -      |
| onLoad    | 加载完成的事件           | `(() => void)`                                | -      |

###
