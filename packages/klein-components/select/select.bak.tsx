import React from 'react';
import classNames from 'classnames';
import getIcons from './utils/iconUtil';
import { ConfigContext } from '../config-provider/context';
import { RcSelect } from '../components';
import omit from '../components/rc-util/omit';

const SelectRc = RcSelect.default;
const { Option, OptGroup } = RcSelect;

export interface OutSelectProps extends ForAutoCompleteProps {
  /** 自定义的多选框清除图标 */
  removeIcon?: React.ReactNode;
  /** 内置5种select宽度（分别对应96，200，304，408，512） */
  wSize?: 'xs' | 'sm' | 'm' | 'l' | 'xl';
  /** 按钮大小 */
  size?: 'large' | 'medium' | 'small';
  /** 加载状态控制 */
  loading?: boolean;
  /** 是否显示下拉小箭头 */
  showArrow?: boolean;

  prefix?: string;
  suffix?: string;
  /** 使单选模式可搜索 */
  showSearch?: boolean;
  /** 搜索时对筛选结果项的排序函数, 类似Array.sort里的 compareFunction */
  filterSort?: (optionA: typeof Option, optionB: typeof Option) => number;
  /** 自定义多选时当前选中的条目图标 */
  menuItemSelectedIcon?: React.ReactNode;
  /** 设置弹窗滚动高度 */
  listHeight?: number;
  /** 下拉菜单的 className 属性 */
  dropdownClassName?: string;
  /** 自定义的选择框后缀图标 */
  suffixIcon?: React.ReactNode;
  /** 最多显示多少个 tag，响应式模式会对性能产生损耗 */
  maxTagCount?: number;
  /** 最大显示的 tag 文本长度 */
  maxTagTextLength?: number;
  /** 自定义下拉框内容 */
  dropdownRender?: (menu: React.ReactElement) => React.ReactElement;
  /** 设置 Select 的模式为多选或标签 */
  mode?: 'multiple' | 'tags';
  /** 自定义 tag 内容 render */
  tagRender?: (props: TagRenderProps) => React.ReactElement;
  /** 设置 false 时关闭虚拟滚动 */
  virtual?: boolean;
  /** 在 tags 和 multiple 模式下自动分词的分隔符 */
  tokenSeparators?: string[];
  /** 指定当前选中的条目 */
  value?: ValueType;
  /** 指定默认选中的条目 */
  defaultValue?: ValueType;
  optionFilterProp?: string;
  /** 是否有边框 */
  bordered?: boolean;
  /** 下拉菜单和选择器同宽。默认将设置 min-width，当值小于选择框宽度时会被忽略。false 时会关闭虚拟滚动 */
  dropdownMatchSelectWidth?: boolean | number;
  /** 清除内容时回调 */
  onClear?: () => void;
  /** 取消选中时调用，参数为选中项的 value (或 key) 值，仅在 multiple 或 tags 模式下生效 */
  onDeselect?: (value: string | number | LabeledValue) => void;
  /** 按键按下时回调 */
  onInputKeyDown?: (value?: any) => void;
  /** 鼠标移入时回调 */
  onMouseEnter?: (value?: any) => void;
  /** 鼠标移出时回调 */
  onMouseLeave?: (value?: any) => void;
  /** 下拉列表滚动时的回调 */
  onPopupScroll?: (value?: any) => void;
  /** 下拉选项可删除 */
  removeOption?: (value?: any) => void;
  /** 回填到选择框的 Option 的属性值，默认是 Option 的子元素。 */
  optionLabelProp?: React.ReactNode;
  /** 是否展开下拉菜单 */
  open?: boolean;
  /** 是否把每个选项的 label 包装到 value 中，会把 Select 的 value 类型从 string 变为 { value: string, label: ReactNode } 的格式。 */
  labelInValue?: boolean;
}

export interface ForAutoCompleteProps {
  /** 支持清除 */
  allowClear?: boolean;
  /** 默认获取焦点 */
  autoFocus?: boolean;
  /** 是否默认展开下拉菜单 */
  defaultOpen?: boolean;
  /** 禁用状态控制 */
  disabled?: boolean;
  /** 是否根据输入项进行筛选。当其为一个函数时，会接收 inputValue option 两个参数，当 option 符合筛选条件时，应返回 true，反之则返回 false */
  filterOption?:
    | boolean
    | ((inputValue: string, option: typeof Option) => boolean);
  /** 数据化配置选项内容，相比 jsx 定义会获得更好的渲染性能 */
  options?: {
    label?: number | string | LabeledValue;
    value: number | string | LabeledValue;
  }[];
  /** 提示信息挂载点，默认挂载到 body 上 */
  getPopupContainer?: (node?: any) => HTMLElement;
  /** 当下拉列表为空时显示的内容 */
  notFoundContent?: React.ReactNode;
  /** placeholder */
  placeholder?: string;
  /** 自定义className */
  className?: string;
  /** 自定义style */
  style?: React.CSSProperties;
  /** 失去焦点时回调 */
  onBlur?: (value?: any) => void;
  /** 获得焦点时回调 */
  onFocus?: (value?: any) => void;
  /** 选中 option，或 input 的 value 变化时，调用此函数 */
  onChange?: (value: any, option?: any) => void;
  /** 展开下拉菜单的回调 */
  onDropdownVisibleChange?: (open: boolean) => void;
  /** 文本框值变化时回调 */
  onSearch?: (value: string) => void;
  /** 被选中时调用，参数为选中项的 value (或 key) 值 */
  onSelect?: (value?: any, option?: typeof Option) => void;
}

interface TagRenderProps {
  closable?: boolean;
  disabled?: boolean;
  label?: React.ReactNode;
  onClose?: (
    event?: React.MouseEvent<HTMLElement, MouseEvent> | undefined,
  ) => void;
  value?: string | string[] | number | number[] | LabeledValue | LabeledValue[];
}

type RawValue = string | number;

type ValueType =
  | string
  | string[]
  | number
  | number[]
  | LabeledValue
  | LabeledValue[];

export interface LabeledValue {
  key?: string;
  value?: RawValue;
  label?: React.ReactNode;
  [params: string]: any;
}

/* eslint-disable no-shadow */
enum wrapSize {
  small = 'sm',
  medium = '',
  large = 'lg',
}

export interface IconMap {
  clearIcon?: React.ReactNode;
  suffixIcon?: React.ReactNode;
  itemIcon?: React.ReactNode;
  removeIcon?: React.ReactNode;
}

export interface GetIconProps {
  suffixIcon?: React.ReactNode;
  clearIcon?: React.ReactNode;
  menuItemSelectedIcon?: React.ReactNode;
  loading?: boolean;
  multiple?: boolean;
  removeIcon?: React.ReactNode;
  prefixCls?: string;
  preCls: string;
  size?: string;
}

export type SelectProps = OutSelectProps & {
  prefixCls?: string;
};

const Select: React.FC<SelectProps> = React.forwardRef<unknown, SelectProps>(
  (props, ref) => {
    const { getPrefixClassName, getPopupContainer, size } = React.useContext(
      ConfigContext,
    );
    const resultRef = (ref as any) || React.useRef<HTMLElement>(null);

    const {
      className,
      value,
      prefixCls,
      size: customSize,
      wSize,
      removeIcon,
      mode,
      showSearch,
      prefix,
      suffix,
      notFoundContent,
      dropdownRender,
      bordered,
      dropdownMatchSelectWidth,
      getPopupContainer: selectGetPopupContainer,
      ...restProps
    } = props;
    const endSize = customSize || size;

    const selectCls = getPrefixClassName('select', prefixCls);

    const isMultiple = mode === 'multiple' || mode === 'tags';

    const extendsIconProps: GetIconProps = Object.assign({}, props, {
      multiple: isMultiple,
      preCls: selectCls,
    });
    const iconMap = getIcons(extendsIconProps);

    const sizeSuffixCls = wrapSize[endSize as 'large' | 'medium' | 'small'];
    const endCls = classNames(
      sizeSuffixCls && `${selectCls}-${sizeSuffixCls}`,
      !bordered && `${selectCls}-borderless`,
      prefix && `${selectCls}-prefix`,
      suffix && `${selectCls}-suffix`,
      wSize && `${selectCls}-width-${wSize}`,
      className,
    );

    // issue about select dropdown cannot show in radio 
    const handelClick = (e: any) => {
      e.preventDefault();
      e.stopPropagation();
    };

    const comProps = {
      value,
      ref: resultRef,
      inputIcon: iconMap.suffixIcon,
      clearIcon: iconMap.clearIcon,
      menuItemSelectedIcon: iconMap.itemIcon,
      removeIcon: iconMap.removeIcon,
      notFoundContent,
      dropdownRender,
      prefix,
      suffix,
      className: endCls,
      ...restProps,
    };
    const omitComProps = omit(comProps, ['suffixIcon']);

    return (
      <SelectRc
        onClick={handelClick}
        prefixCls={selectCls}
        mode={mode}
        showSearch={isMultiple || showSearch}
        dropdownMatchSelectWidth={dropdownMatchSelectWidth}
        getPopupContainer={selectGetPopupContainer || getPopupContainer}
        {...omitComProps}
      />
    );
  },
);

type SelectWithOption = typeof Select & {
  Option: typeof Option;
  OptGroup: typeof OptGroup;
};

(Select as SelectWithOption).Option = Option;
(Select as SelectWithOption).OptGroup = OptGroup;

Select.displayName = 'Select';

Select.defaultProps = {
  allowClear: false,
  // autoFocus: false,
  showSearch: false,
  // size: 'medium',
  bordered: true,
  filterOption: true,
  loading: false,
  virtual: true,
  // listHeight: 256,
  dropdownMatchSelectWidth: true,
};

export { Option, OptGroup };
export default Select;
