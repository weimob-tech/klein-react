---
title: 日期选择 - DatePicker
nav:
  title: 组件
  path: /components
group:
  title: 数据录入
---
# 日期选择 DatePicker

输入或选择日期的控件
当用户需要输入一个日期，可以点击标准输入框，弹出日期面板进行选择

### 基础示例

最简单的用法，在浮层中可以选择或者输入日期

<code src="./demos/basic.tsx"></code>

### 范围选择

通过设置 picker 属性，指定范围选择器类型

<code src="./demos/range-picker.tsx"></code>

### 切换不同的选择器

通过选择器切换不同类型的日期选择器

<code src="./demos/switchable.tsx"></code>

### 自定义日期格式

使用 format 属性，可以自定义日期显示格式

<code src="./demos/date-format.tsx"></code>

### 预设时间

可以预设常用的日期范围

<code src="./demos/preset.tsx"></code>

### 共同的 API

以下 API 为 DatePicker、 RangePicker 共享的 API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| allowClear | 是否显示清除按钮 | boolean | true |  |
| autoFocus | 自动获取焦点 | boolean | false |  |
| bordered | 是否有边框 | boolean | true |  |
| className | 选择器 className | string | - |  |
| dateRender | 自定义日期单元格的内容 | function(currentDate: moment, today: moment) => React.ReactNode | - |  |
| disabled | 禁用 | boolean | false |  |
| disabledDate | 不可选择的日期 | (currentDate: moment) => boolean | - |  |
| dropdownClassName | 额外的弹出日历 className | string | - |  |
| getPopupContainer | 定义浮层的容器，默认为 body 上新建 div | function(trigger) | - |  |
| inputReadOnly | 设置输入框为只读（避免在移动设备上打开虚拟键盘） | boolean | false |  |
| locale | 国际化配置 | object | [默认配置](https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json) |  |
| mode | 日期面板的状态（[设置后无法选择年份/月份？](/docs/react/faq#当我指定了-DatePicker/RangePicker-的-mode-属性后，点击后无法选择年份/月份？)） | `time` \| `date` \| `month` \| `year` \| `decade` | - |  |
| open | 控制弹层是否展开 | boolean | - |  |
| panelRender | 自定义渲染面板 | (panelNode) => ReactNode | - |  |
| picker | 设置选择器类型 | `date` \| `week` \| `month` \| `quarter` \| `year` | `date` | `quarter`:  |
| placeholder | 输入框提示文字 | string \| \[string, string] | - |  |
| popupStyle | 额外的弹出日历样式 | CSSProperties | {} |  |
| size | 输入框大小，`large` 高度为 40px，`small` 为 24px，默认是 32px | `large` \| `middle` \| `small` | - |  |
| style | 自定义输入框样式 | CSSProperties | {} |  |
| suffixIcon | 自定义的选择框后缀图标 | ReactNode | - |  |
| onOpenChange | 弹出日历和关闭日历的回调 | function(open) | - |  |
| onPanelChange | 日历面板切换的回调 | function(value, mode) | - |  |

### 共同的方法

| 名称 | 描述 | 版本 |
| --- | --- | --- |
| blur() | 移除焦点 |  |
| focus() | 获取焦点 |  |

### DatePicker

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| defaultPickerValue | 默认面板日期 | [moment](http://momentjs.com/) | - |  |
| defaultValue | 默认日期，如果开始时间或结束时间为 `null` 或者 `undefined`，日期范围将是一个开区间 | [moment](http://momentjs.com/) | - |  |
| disabledTime | 不可选择的时间 | function(date) | - |  |
| format | 设置日期格式，为数组时支持多格式匹配，展示以第一个为准配置参考 [moment.js](http://momentjs.com/)，支持[自定义格式](#components-date-picker-demo-format) | string \| (value: moment) => string \| (string \| (value: moment) => string)\[] | `YYYY-MM-DD` |  |
| renderExtraFooter | 在面板中添加额外的页脚 | (mode) => React.ReactNode | - |  |
| showNow | 当设定了 `showTime` 的时候，面板是否显示“此刻”按钮 | boolean | - |  |
| showTime | 增加时间选择功能 | Object \| boolean | [TimePicker Options](/components/time-picker/#API) |  |
| showTime.defaultValue | 设置用户选择日期时默认的时分秒，[例子](#components-date-picker-demo-disabled-date) | [moment](http://momentjs.com/) | moment() |  |
| showToday | 是否展示“今天”按钮 | boolean | true |  |
| value | 日期 | [moment](http://momentjs.com/) | - |  |
| onChange | 时间发生变化的回调 | function(date: moment, dateString: string) | - |  |
| onOk | 点击确定按钮的回调 | function() | - |  |
| onPanelChange | 日期面板变化时的回调 | function(value, mode) | - |  |

### DatePicker\[picker=year]

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| defaultPickerValue | 默认面板日期 | [moment](http://momentjs.com/) | - |  |
| defaultValue | 默认日期 | [moment](http://momentjs.com/) | - |  |
| format | 展示的日期格式，配置参考 [moment.js](http://momentjs.com/) | string | `YYYY` |  |
| renderExtraFooter | 在面板中添加额外的页脚 | () => React.ReactNode | - |  |
| value | 日期 | [moment](http://momentjs.com/) | - |  |
| onChange | 时间发生变化的回调，发生在用户选择时间时 | function(date: moment, dateString: string) | - |  |

### DatePicker\[picker=quarter]

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| defaultPickerValue | 默认面板日期 | [moment](http://momentjs.com/) | - |  |
| defaultValue | 默认日期 | [moment](http://momentjs.com/) | - |  |
| format | 展示的日期格式，配置参考 [moment.js](http://momentjs.com/) | string | `YYYY-\QQ` |  |
| renderExtraFooter | 在面板中添加额外的页脚 | () => React.ReactNode | - |  |
| value | 日期 | [moment](http://momentjs.com/) | - |  |
| onChange | 时间发生变化的回调，发生在用户选择时间时 | function(date: moment, dateString: string) | - |  |

### DatePicker\[picker=month]

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| defaultPickerValue | 默认面板日期 | [moment](http://momentjs.com/) | - |  |
| defaultValue | 默认日期 | [moment](http://momentjs.com/) | - |  |
| format | 展示的日期格式，配置参考 [moment.js](http://momentjs.com/) | string | `YYYY-MM` |  |
| monthCellRender | 自定义的月份内容渲染方法 | function(date, locale): ReactNode | - |  |
| renderExtraFooter | 在面板中添加额外的页脚 | () => React.ReactNode | - |  |
| value | 日期 | [moment](http://momentjs.com/) | - |  |
| onChange | 时间发生变化的回调，发生在用户选择时间时 | function(date: moment, dateString: string) | - |  |

### DatePicker\[picker=week]

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| defaultPickerValue | 默认面板日期 | [moment](http://momentjs.com/) | - |  |
| defaultValue | 默认日期 | [moment](http://momentjs.com/) | - |  |
| format | 展示的日期格式，配置参考 [moment.js](http://momentjs.com/) | string | `YYYY-wo` |  |
| renderExtraFooter | 在面板中添加额外的页脚 | (mode) => React.ReactNode | - |  |
| value | 日期 | [moment](http://momentjs.com/) | - |  |
| onChange | 时间发生变化的回调，发生在用户选择时间时 | function(date: moment, dateString: string) | - |  |

### RangePicker

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| allowEmpty | 允许起始项部分为空 | \[boolean, boolean] | \[false, false] |  |
| dateRender | 自定义日期单元格的内容 | function(currentDate: moment, today: moment, info: { range: `start` \| `end` }) => React.ReactNode | - |  |
| defaultPickerValue | 默认面板日期 | [moment](http://momentjs.com/)\[] | - |  |
| defaultValue | 默认日期 | [moment](http://momentjs.com/)\[] | - |  |
| disabled | 禁用起始项 | \[boolean, boolean] | - |  |
| disabledTime | 不可选择的时间 | function(date: moment, partial: `start` \| `end`) | - |  |
| format | 展示的日期格式 | string | `YYYY-MM-DD HH:mm:ss` |  |
| ranges | 预设时间范围快捷选择 | { \[range: string]: [moment](http://momentjs.com/)\[] } \| { \[range: string]: () => [moment](http://momentjs.com/)\[] } | - |  |
| renderExtraFooter | 在面板中添加额外的页脚 | () => React.ReactNode | - |  |
| separator | 设置分隔符 | string | `~` |  |
| showTime | 增加时间选择功能 | Object\|boolean | [TimePicker Options](/components/time-picker/#API) |  |
| showTime.defaultValue | 设置用户选择日期时默认的时分秒，[例子](#components-date-picker-demo-disabled-date) | [moment](http://momentjs.com/)\[] | \[moment(), moment()] |  |
| value | 日期 | [moment](http://momentjs.com/)\[] | - |  |
| onCalendarChange | 待选日期发生变化的回调| function(dates: \[moment, moment], dateStrings: \[string, string], info: { range:`start`\|`end` }) | - |  |
| onChange | 日期范围发生变化的回调 | function(dates: \[moment, moment], dateStrings: \[string, string]) | - |  |

### FAQ: 日历选择器显示英文问题
可以先检查下入口文件import 'moment/locale/zh-cn'有没有引入这个代码，另外的话检查下本地momentjs的版本，得用2.29.1版本;

