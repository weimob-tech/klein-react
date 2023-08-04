---
title: 弹窗 - Modal
nav:
  title: 组件
  path: /components
group:
  title: 反馈
---
# 弹窗 Modal

模态对话框，在浮层中显示，避免打扰用户的操作流程、需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 Modal 在当前页面正中打开一个浮层，承载相应的操作

### 基础示例

提供两种基本类型的弹窗，当弹窗内容十分复杂时请传入modalStyle=“expansion”

<code src="./demos/basic.tsx"></code>

### 弹窗存在最大高度

不希望弹窗超出窗口区域时候请设置弹窗的maxHeight属性

<code src="./demos/max-height.tsx"></code>

### 不同尺寸大小的弹窗

提供三种内置宽度大小的弹窗组件，分别为320，400，480

<code src="./demos/size.tsx"></code>

### title|content为空时的弹窗

设置title|content为空

<code src="./demos/no-title.tsx"></code>

### 垂直居中

设置centered为true使弹窗垂直居中

<code src="./demos/vertical-center.tsx"></code>

### 通过方法调用弹窗

提供成功，错误，警告，信息提示等四种状态的弹窗

<code src="./demos/actions.tsx"></code>

### 手动更新和移除

手动更新和关闭 Modal.method 方式创建的对话框

<code src="./demos/updateAndDestroy.tsx"></code>

### 方法调用且内容居中的弹窗

方法调用且内容居中的弹窗

<code src="./demos/actions-center.tsx"></code>

### promise延迟关闭弹窗

通过onOk或者onCancel返回promise来延迟关闭弹窗

<code src="./demos/actions-btnTrigger.tsx"></code>


### ModalFunctionComp Props

| 参数 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :----- |
| wrapClassName      | 对话框外层容器的类名 | `string`  | -      |
| afterClose      | 关闭Modal后的回调 | `(() => void)`  | -      |
| modalStyle      | 内置两种弹窗样式，expansion使用于弹窗内容较多的情况 | `"default"`\|` "expansion"`  | default      |
| bodyStyle      | Modal body的样式 | `CSSProperties`  | -      |
| cancelText      | 取消按钮文字 | `string`  | 取消      |
| cancelButtonProps      | 取消按钮props  | [ButtonProps](/components/button) | -      |
| centered      | 是否垂直居中展示 | `boolean`  | true      |
| contentCentered      | 内容是否居中展示 | `boolean`  | -      |
| closable      | 是否展示关闭icon | `boolean`  | true      |
| closeIcon      | 自定义关闭图标 | `ReactNode`  | -      |
| confirmLoading      | 确定按钮是否loading | `boolean`  | -      |
| destroyOnClose      | 关闭时销毁 Modal 里的子元素 | `boolean`  | false      |
| footer      | 底部内容，当不需要默认底部按钮时，可以设为 footer={null} | `ReactNode`  | -      |
| getContainer      | 指定 Modal 挂载的 HTML 节点, false 为挂载在当前 dom | `string`\|` boolean`\|` HTMLElement`\|` (() => HTMLElement)`  | -      |
| keyboard      | 是否支持键盘esc关闭 | `boolean`  | -      |
| maskClosable      | 点击遮罩是否关闭 | `boolean`  | -      |
| maskStyle      | 遮罩样式 | `CSSProperties`  | -      |
| mask      | 是否展示遮罩 | `boolean`  | -      |
| okText      | 确认按钮文字 | `string`  | -      |
| okButtonProps      | 确定按钮props  | [ButtonProps](/components/button) | -      |
| okType      | 确认按钮类型 | `string`  | -      |
| title      | 标题 | `ReactNode`  | -      |
| visible      | 对话框是否可见 | `boolean`  | -      |
| width      | 宽度 | `string`\|` number`  | -      |
| size      | 提供的三种默认的弹窗尺寸 | `"large"`\|` "medium"`\|` "small"`  | medium      |
| maxHeight      | 弹窗是否存在最大高度 | `boolean`  | false      |
| top      | 设置弹窗到顶部的距离 | `number`  | -      |
| zIndex      | Modal的z-index | `number`  | 1000      |
| onOk      | 点击确定回调 | `((e?: MouseEvent<HTMLButtonElement, MouseEvent>) => void)`\|` undefined`  | -      |
| onCancel      | 点击遮罩层或右上角叉或取消按钮的回调 | `((e?: MouseEvent<HTMLButtonElement, MouseEvent>) => void)`\|` undefined`  | -      |


### Modal.method()#
包括：

- Modal.info

- Modal.success

- Modal.error

- Modal.warning

以上函数调用后，会返回一个引用，可以通过该引用更新和关闭弹窗

```js
const modal = Modal.info();

modal.update({
  title: '修改的标题',
  content: '修改的内容',
});

modal.update(prevConfig => ({
  ...prevConfig,
  title: `${prevConfig.title}（新）`,
}));

modal.destroy();

```

以上均为一个函数，参数为 object，具体属性如下：

### ActionsModal Props

| 参数 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :----- |
| width      | 宽度 | `number`  | -      |
| content      | 提示内容 | `ReactNode`  | -      |
| icon      | 自定义图标 | `ReactNode`  | -      |
| onOk      | 点击确定回调 | `((e?: MouseEvent<HTMLButtonElement, MouseEvent>) => void)`\|` undefined`  | -      |
| onCancel      | 点击遮罩层或右上角叉或取消按钮的回调 | `((e?: MouseEvent<HTMLButtonElement, MouseEvent>) => void)`\|` undefined`  | -      |
| wrapClassName      | 对话框外层容器的类名 | `string`  | -      |
| afterClose      | 关闭Modal后的回调 | `(() => void)`  | -      |
| modalStyle      | 内置两种弹窗样式，expansion使用于弹窗内容较多的情况 | `"default"`\|` "expansion"`  | -      |
| bodyStyle      | Modal body的样式 | `CSSProperties`  | -      |
| cancelText      | 取消按钮文字 | `string`  | 取消      |
| cancelButtonProps      | 取消按钮props  | [ButtonProps](/components/button) | -      |
| centered      | 是否垂直居中展示 | `boolean`  | true      |
| contentCentered      | 内容是否居中展示 | `boolean`  | -      |
| closable      | 是否展示关闭icon | `boolean`  | -      |
| closeIcon      | 自定义关闭图标 | `ReactNode`  | -      |
| confirmLoading      | 确定按钮是否loading | `boolean`  | -      |
| destroyOnClose      | 关闭时销毁 Modal 里的子元素 | `boolean`  | -      |
| footer      | 底部内容，当不需要默认底部按钮时，可以设为 footer={null} | `ReactNode`  | -      |
| getContainer      | 指定 Modal 挂载的 HTML 节点, false 为挂载在当前 dom | `string`\|` boolean`\|` HTMLElement`\|` (() => HTMLElement)`  | -      |
| keyboard      | 是否支持键盘esc关闭 | `boolean`  | -      |
| maskClosable      | 点击遮罩是否关闭 | `boolean`  | -      |
| maskStyle      | 遮罩样式 | `CSSProperties`  | -      |
| mask      | 是否展示遮罩 | `boolean`  | -      |
| okText      | 确认按钮文字 | `string`  | -      |
| okButtonProps      | 确定按钮props  | [ButtonProps](/components/button) | -      |
| okType      | 确认按钮类型 | `string`  | -      |
| title      | 标题 | `ReactNode`  | -      |
| visible      | 对话框是否可见 | `boolean`  | -      |
| size      | 提供的三种默认的弹窗尺寸 | `"large"`\|` "medium"`\|` "small"`  | medium      |
| maxHeight      | 弹窗是否存在最大高度 | `boolean`  | -      |
| top      | 设置弹窗到顶部的距离 | `number`  | -      |
| zIndex      | Modal的z-index | `number`  | -      |


### 
