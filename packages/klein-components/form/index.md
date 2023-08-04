---
title: 表单 - Form
nav:
  title: 组件
  path: /components
group:
  title: 数据录入
---
# 表单 Form

表单组件

### 基础示例

表单基础用法、表单的每个formItem默认行高为32px，formItem之间的间距为24px，针对像checkbox这样的元素在formItem内部时不需要32px的行高的情况，可以设置formItem的itemCenter属性为false，使formItem的默认行高为20px

<code src="./demos/basic.tsx"></code>

### 表单布局

三种布局方式

<code src="./demos/layout.tsx"></code>

### 自定义表单校验

支持表单自定义校验

<code src="./demos/customValidate.tsx"></code>

### 内嵌FormItem

这里演示 Form.Item 内有多个元素的使用方式、<Form.Item name="field" /> 只会对它的直接子元素绑定表单功能，例如直接包裹了 Input/Select、如果控件前后还有一些文案或样式装点，或者一个表单项内有多个控件，你可以使用内嵌的 Form.Item 完成；你可以给 Form.Item 自定义 style 进行内联布局，或者添加 noStyle 作为纯粹的无样式绑定组件

```diff
- <Form.Item label="Field" name="field">
-   <Input /> // 直接包裹才会绑定表单
- </Form.Item>
+ <Form.Item label="Field">
+   <Form.Item name="field" noStyle><Input /></Form.Item> // 直接包裹才会绑定表单
+   <span>description</span>
+ </Form.Item>
```

这里展示了三种典型场景：

- Username：输入框后面有描述文案或其他组件，在 Form.Item 内使用 <Form.Item name="field" noStyle /> 去绑定对应子控件

- Address：有两个控件，在 Form.Item 内使用两个 <Form.Item name="field" noStyle /> 分别绑定对应控件

- BirthDate：有两个内联控件，错误信息展示各自控件下，使用两个 <Form.Item name="field" /> 分别绑定对应控件，并修改 style 使其内联布局

> 注意，在 label 对应的 Form.Item 上不要在指定 name 属性，这个 Item 只作为布局作用

<code src="./demos/nestedFormItem.tsx"></code>

### 表单方法调用

通过Form.useForm进行表单数据交互

<code src="./demos/useForm.tsx"></code>

### classComponent中的表单方法调用

在classComponent可以使用ref获取表单实例进行数据交互

<code src="./demos/classComponentUseForm.tsx"></code>

### 动态增减表单项

动态增加、减少表单项、add 方法参数可用于设置初始值

<code src="./demos/dynamic-add-item.tsx"></code> 

### 动态增减嵌套字段

嵌套表单字段需要对 field 进行拓展，将 field.name 和 field.fieldKey 应用于控制字段

<code src="./demos/dynamic-form-items.tsx"></code> 

### 多表单联动

通过 Form.Provider 在表单间处理数据

<code src="./demos/form-context.tsx"></code> 

### 验证提示模板

通过 validateMessages统一提示信息

<code src="./demos/validateMessages.tsx"></code> 

### Form Props

| 参数 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :----- |
| name      | 表单名称 | `string`  | klein-form      |
| form      | 经 Form.useForm() 创建的 form 控制实例，不提供时会自动创建 | `FormInstance<any>`  | -      |
| initialValues      | 表单默认值，只有初始化以及重置时生效 | `Store`  | -      |
| onFinish      | 提交表单且数据验证成功后回调事件 | `((values: any) => void)`  | -      |
| onFinishFailed      | 提交表单且数据验证失败后回调事件 | `((errorInfo: ValidateErrorEntity<any>) => void)`  | -      |
| scrollToFirstError      | 提交失败时滚动到第一个错误字段 | `boolean`  | false      |
| layout      | 布局方式 | `"horizontal"`\|` "vertical"`\|` "inline"`  | horizontal      |
| labelCol      | label 标签布局，属性同栅格布局[<Col\>](/components/grid/#col)组件 | `ColProps`  | -      |
| wrapperCol      | 需要为输入控件设置布局样式时，属性同栅格布局[<Col\>](/components/grid/#col)组件 | `ColProps`  | -      |
| onValuesChange      | 字段值更新时触发回调事件 | `((changedValues: any, values: any) => void)`  | -      |
| onFieldsChange      | 字段更新时触发回调事件 | `((changedFields: FieldData[], allFields: FieldData[]) => void)`  | -      |
| validateMessages      | 验证提示模板  | [见下文] | -      |


### Form.Item

| 参数 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :----- |
| label      | label 标签的文本 | `ReactNode`  | -      |
| required      | 字段是否必填 | `boolean`  | -      |
| itemCenter      | 控制label文本是否垂直居中，控制formItem的默认行高是否为32px | `boolean`  | true      |
| labelWidth      | 自定义label固定宽度 | `number`  | -      |
| tips      | formItem错误提示 | `ReactNode`  | -      |
| trigger      | 设置收集字段值变更的时机 | `string`  | onChange      |
| name      | formItem字段名  | `string`  \|  `number`\|`(string` \| `number)[]` | -      |
| rules      | 设置字段的校验逻辑 | `Rule[]`  | -      |
| shouldUpdate      | 自定义formItem更新逻辑 | `boolean`\|` ((prevValues: any, nextValues: any, info: { source?: string; }) => boolean)`\|` undefined`  | -      |
| dependencies      | 定义字段依赖关系 | `NamePath[]`  | -      |
| validateTrigger      | 设置字段校验时机 | `string`\|` false`\|` string[]`  | onChange      |
| initialValue      | 设置子元素默认值，Form 的 initialValues权重更高 | `any`  | -      |
| getValueFromEvent      | 设置子元素默认值，Form 的 initialValues权重更高 | `((value?: any) => any)`  | -      |
| valuePropName      | 子节点的值的属性，如 Switch 的是 'checked'该属性为 getValueProps 的封装，自定义 getValueProps 后会失效 | `string`  | -      |
| htmlFor      | 设置子元素 label htmlFor 属性 | `string`  | -      |
| noStyle      | 不带任何样式 | `boolean`  | -      |
| labelCol      | label 标签布局，属性同栅格布局 [<Col\>](/components/grid/#col) 组件 | `ColProps`  | -      |
| wrapperCol      | 需要为输入控件设置布局样式时，属性同栅格布局 [<Col\>](/components/grid/#col) 组件 | `ColProps`  | -      |
| tooltip      | 设置表单项提示信息，直接使用tooltip=‘hello word’这种形式则使用默认的icon，也可以传入对象进行自定义{icon: null, ...tooltipProps} | `string`\|` number`\|` boolean`\|` {}`\|` ReactElement<any, string`\|` ((props: any) => ReactElement<any, string`\|` ...`\|` (new (props: any) => Component<any, any, any>)>`\|` null)`\|` (new (props: any) => Component<...>)>`\|` ... 4 more ...`  | -      |
| popover      | 设置表单项提示信息，直接使用popover={{title: '大家好', content: 'hello world'}}这种形式则使用默认的icon，也可以传入对象进行自定义{icon: null, ...popoverProps} | `PopoverObjectType`  | -      |
| validateFirst      | 当某一规则校验不通过时，是否停止剩下的规则的校验设置 parallel 时会并行校验 | `boolean`\|` "parallel"`  | -      |
| messageVariables      | 默认验证字段的信息 | `Record<string, string>`  | -      |
| extra      | 额外的提示信息 | `ReactNode`  | -      |


### ValidateMessages

Form 为验证提供了[默认的错误提示信息](https://github.com/react-component/field-form/blob/master/src/utils/messages.ts)，你可以通过配置 `validateMessages` 属性，修改对应的提示模板

```js
const validateMessages = {
  required: "'${name}' 是必选字段",
  // ...
};

<Form validateMessages={validateMessages} />;
```


### 
