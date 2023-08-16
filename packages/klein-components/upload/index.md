---
title: 上传 - Upload
nav:
  title: 组件
  path: /components
group:
  title: 数据录入
---
# 上传 Upload

文件选择和拖拽上传、用于文件上传。

### 基础示例

用户点击按钮弹出文件选择框。

<code src="./demos/basic.tsx"></code>

### 设置头像

上传用户头像。

<code src="./demos/avatar.tsx"></code>

### 禁用上传

禁用上传按钮。

<code src="./demos/upload-disable.tsx"></code>

### 拖拽

支持文件拖拽上传。

<code src="./demos/drag.tsx" background="#f0f2f5"></code>

### 受控支持预览的文件列表

受控模式需要外部更新组件的属性fileList。

<code src="./demos/file-list-controlled.tsx"></code>

### 受控支持替换的文件列表

受控模式需要外部更新组件的属性fileList。

<code src="./demos/file-replace.tsx"></code>

### 最大上传数量

通过 maxCount 限制上传数量当为 1 时，始终用最新上传的代替当前。

<code src="./demos/max-count.tsx"></code>

### 预设图片

属于业务范畴，内部无状态，纯木偶组件。

<code src="./demos/preset.tsx"></code>

### 拖拽排序

可以使用react-dnd实现图片的拖拽排序。

<code src="./demos/file-drag.tsx"></code>

### 图片上传最大数量控制

图片上传至限制值时上按钮消失。

<code src="./demos/picture-card-maxcount.tsx"></code>

### Upload Props

| 参数 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :----- |
| name      | 发到后台的文件参数名 | `string`  | -      |
| headers      | 请求头设置 | `Record<string, string>`  | -      |
| preview      | 是否支持图片预览，该属性开启后单个图片的替换将失效 | `boolean`  | false      |
| disabled      | 禁用上传 | `boolean`  | -      |
| showUploadList      | 是否展示文件列表 | `boolean`  | true      |
| className      | 自定义类名 | `string`  | -      |
| fileList      | 上传文件 | `UploadFile<any>[]`  | -      |
| defaultFileList      | 默认文件列表 | `UploadFile<any>[]`  | -      |
| listType      | 上传文件类型 | `"text"`\|` "picture"`\|` "picture-card"`\|` "drag"`  | text      |
| accept      | 接受上传的文件类型, 详见 input accept Attribute | `string`  | -      |
| action      | 上传的地址 | `string`  | -      |
| tips      | 提示信息 | `ReactNode`  | -      |
| onRemove      | 移除文件 | `((file: UploadFile<any>) => boolean`\|` void)`\|` Promise<boolean`\|` void>`  | -      |
| onChange      | 上传文件改变时的状态 | `((res: ChangeRes<UploadFile<any>>) => void)`  | -      |
| customOnClick      | 完全自定义点击事件，如果传入该属性，则点击upload不会出现系统文件上传弹窗 | `((e: MouseEvent<Element, MouseEvent>, file?: UploadFile<any>) => void)`\|` undefined`  | -      |
| isOnGrayBg      | 是否在灰色背景中使用 | `boolean`  | -      |
| beforeUpload      | 文件上传前的操作 | `((file: RcFile, FileList: RcFile[]) => boolean`\|` PromiseLike<void>)`  | () => true      |
| maxCount      | 文件最大上传数量 | `number`  | -      |
| itemRender      | 自定义上传项 | `((originNode: ReactElement<any, string`\|` ((props: any) => ReactElement<any, string`\|` ...`\|` (new (props: any) => Component<any, any, any>)>`\|` null)`\|` (new (props: any) => Component<any, any, any>)>, file: UploadFile<...>, index: number, fileList?: UploadFile<...>[]) => ReactNode)`\|` undefined`  | -      |
| fileItemComponent      | 通过传入组件的方式自定义上传项 | `FC<ImageItemProps>`  | -      |
| onPreview      | 点击预览图标时的回调 | `((file: UploadFile<any>) => void)`  | -      |
| data      | 上传所需额外参数或返回上传额外参数的方法 | `object`\|` ((file: UploadFile<any>) => object)`  | -      |
| text      | 上传按钮文本 | `ReactNode`  | -      |
| deletable      | 是否隐藏删除按钮 | `boolean`  | true      |
| fit      | 上传后图片显示方式 | `"fill"`\|` "contain"`\|` "cover"`\|` "none"`\|` "scale-down"`  | cover      |


### Dragger Props

| 参数 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :----- |
| name      | 发到后台的文件参数名 | `string`  | -      |
| headers      | 请求头设置 | `Record<string, string>`  | -      |
| preview      | 是否支持图片预览，该属性开启后单个图片的替换将失效 | `boolean`  | -      |
| disabled      | 禁用上传 | `boolean`  | -      |
| showUploadList      | 是否展示文件列表 | `boolean`  | -      |
| className      | 自定义类名 | `string`  | -      |
| fileList      | 上传文件 | `UploadFile<any>[]`  | -      |
| defaultFileList      | 默认文件列表 | `UploadFile<any>[]`  | -      |
| listType      | 上传文件类型 | `"text"`\|` "picture"`\|` "picture-card"`\|` "drag"`  | -      |
| accept      | 接受上传的文件类型, 详见 input accept Attribute | `string`  | -      |
| action      | 上传的地址 | `string`  | -      |
| tips      | 提示信息 | `ReactNode`  | -      |
| onRemove      | 移除文件 | `((file: UploadFile<any>) => boolean`\|` void)`\|` Promise<boolean`\|` void>`  | -      |
| onChange      | 上传文件改变时的状态 | `((res: ChangeRes<UploadFile<any>>) => void)`  | -      |
| isOnGrayBg      | 是否在灰色背景中使用 | `boolean`  | -      |
| beforeUpload      | 文件上传前的操作 | `((file: RcFile, FileList: RcFile[]) => boolean`\|` PromiseLike<void>)`  | -      |
| maxCount      | 文件最大上传数量 | `number`  | -      |
| itemRender      | 自定义上传项 | `((originNode: ReactElement<any, string`\|` ((props: any) => ReactElement<any, string`\|` ...`\|` (new (props: any) => Component<any, any, any>)>`\|` null)`\|` (new (props: any) => Component<any, any, any>)>, file: UploadFile<...>, index: number, fileList?: UploadFile<...>[]) => ReactNode)`\|` undefined`  | -      |
| fileItemComponent      | 通过传入组件的方式自定义上传项 | `FC<ImageItemProps>`  | -      |
| onPreview      | 点击预览图标时的回调 | `(file: UploadFile<any>) => void`  | -      |


### Preset Props

| 参数 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :----- |
| onReset      | 重置回调 | `(() => void)`  | -      |
| actionTips      | 自定义下载文字 | `ReactNode`  | -      |
| showReset      | 是否展示重置按钮 | `boolean`  | true      |
| fileUrl      | 预设图片路径 | `string`  | -      |
| name      | 发到后台的文件参数名 | `string`  | -      |
| headers      | 请求头设置 | `Record<string, string>`  | -      |
| preview      | 是否支持图片预览，该属性开启后单个图片的替换将失效 | `boolean`  | -      |
| disabled      | 禁用上传 | `boolean`  | -      |
| showUploadList      | 是否展示文件列表 | `boolean`  | -      |
| className      | 自定义类名 | `string`  | -      |
| fileList      | 上传文件 | `UploadFile<any>[]`  | -      |
| defaultFileList      | 默认文件列表 | `UploadFile<any>[]`  | -      |
| listType      | 上传文件类型 | `"text"`\|` "picture"`\|` "picture-card"`\|` "drag"`  | -      |
| accept      | 接受上传的文件类型, 详见 input accept Attribute | `string`  | -      |
| action      | 上传的地址 | `string`  | -      |
| tips      | 提示信息 | `ReactNode`  | -      |
| onRemove      | 移除文件 | `((file: UploadFile<any>) => boolean`\|` void)`\|` Promise<boolean`\|` void>`  | -      |
| onChange      | 上传文件改变时的状态 | `((res: ChangeRes<UploadFile<any>>) => void)`  | -      |
| isOnGrayBg      | 是否在灰色背景中使用 | `boolean`  | -      |
| beforeUpload      | 文件上传前的操作 | `((file: RcFile, FileList: RcFile[]) => boolean`\|` PromiseLike<void>)`  | -      |
| maxCount      | 文件最大上传数量 | `number`  | -      |
| itemRender      | 自定义上传项 | `((originNode: ReactElement<any, string`\|` ((props: any) => ReactElement<any, string`\|` ...`\|` (new (props: any) => Component<any, any, any>)>`\|` null)`\|` (new (props: any) => Component<any, any, any>)>, file: UploadFile<...>, index: number, fileList?: UploadFile<...>[]) => ReactNode)`\|` undefined`  | -      |
| fileItemComponent      | 通过传入组件的方式自定义上传项 | `FC<ImageItemProps>`  | -      |
| onPreview      | 点击预览图标时的回调 | `(file: UploadFile<any>) => void`  | -      |


### FileList Props

| 参数 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :----- |
| name      | 发到后台的文件参数名 | `string`  | -      |
| headers      | 请求头设置 | `Record<string, string>`  | -      |
| preview      | 是否支持图片预览，该属性开启后单个图片的替换将失效 | `boolean`  | -      |
| disabled      | 禁用上传 | `boolean`  | -      |
| showUploadList      | 是否展示文件列表 | `boolean`  | -      |
| className      | 自定义类名 | `string`  | -      |
| fileList      | 上传文件 | `UploadFile<any>[]`  | -      |
| defaultFileList      | 默认文件列表 | `UploadFile<any>[]`  | -      |
| listType      | 上传文件类型 | `"text"`\|` "picture"`\|` "picture-card"`\|` "drag"`  | -      |
| accept      | 接受上传的文件类型, 详见 input accept Attribute | `string`  | -      |
| action      | 上传的地址 | `string`  | -      |
| tips      | 提示信息 | `ReactNode`  | -      |
| onRemove      | 移除文件 | `((file: UploadFile<any>) => boolean`\|` void)`\|` Promise<boolean`\|` void>`  | -      |
| onChange      | 上传文件改变时的状态 | `((res: ChangeRes<UploadFile<any>>) => void)`  | -      |
| isOnGrayBg      | 是否在灰色背景中使用 | `boolean`  | -      |
| beforeUpload      | 文件上传前的操作 | `((file: RcFile, FileList: RcFile[]) => boolean`\|` PromiseLike<void>)`  | -      |
| maxCount      | 文件最大上传数量 | `number`  | -      |
| itemRender      | 自定义上传项 | `((originNode: ReactElement<any, string`\|` ((props: any) => ReactElement<any, string`\|` ...`\|` (new (props: any) => Component<any, any, any>)>`\|` null)`\|` (new (props: any) => Component<any, any, any>)>, file: UploadFile<...>, index: number, fileList?: UploadFile<...>[]) => ReactNode)`\|` undefined`  | -      |
| fileItemComponent      | 通过传入组件的方式自定义上传项 | `FC<ImageItemProps>`  | -      |
| onPreview      | 点击预览图标时的回调 | `((file: UploadFile<any>) => void)`  | -      |


### 
