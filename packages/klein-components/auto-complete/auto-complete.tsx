import React, { useRef } from 'react';
import classNames from 'classnames';
import type { ForAutoCompleteProps} from '../select/select';
import Select, { Option } from '../select/select';
import { ConfigContext } from '../config-provider/context';
import toArray from '../components/rc-util/Children/toArray';

const InnerSelect = Select as any;

export interface OptionsItemObject {
  value: string;
  label: string;
}
export type OptionsItemType = OptionsItemObject | React.ReactNode;

export interface AutoCompleteProps extends ForAutoCompleteProps {
  /** 是否展开下拉菜单 */
  open?: boolean;
  /** 是否默认展开下拉菜单 */
  defaultOpen?: boolean;
  /** 指定当前选中的条目 */
  value?: string;
  /** 指定默认选中的条目 */
  defaultValue?: string;
  /** 是否默认高亮第一个选项 */
  defaultActiveFirstOption?: boolean;
  /** 下拉菜单的 className 属性 */
  dropdownClassName?: string;
  /** 拉菜单和选择器同宽。默认将设置 min-width，当值小于选择框宽度时会被忽略。false 时会关闭虚拟滚动 */
  dropdownMatchSelectWidth?: boolean | number;
  /** 提示信息挂载点，默认挂载到 body 上 */
  getPopupContainer?: (node?: HTMLElement) => HTMLElement;
}

function isSelectOptionOrSelectOptGroup(child: any): Boolean {
  return child?.type?.isSelectOption || child?.type?.isSelectOptGroup;
}

const AutoComplete: React.FC<AutoCompleteProps> = React.forwardRef<
  unknown,
  AutoCompleteProps
>((props, ref) => {
  const { getPrefixClassName } = React.useContext(ConfigContext);
  const autoCompleteRef = (ref as any) || useRef<HTMLElement>(null);
  const autoCompleteCls = getPrefixClassName('select');

  const { className, children, style, ...restProps } = props;
  const endCls = classNames(`${autoCompleteCls}-auto-complete`, className);

  const childNodes: React.ReactElement[] = toArray(children);

  // ============================= Input =============================
  let customizeInput: React.ReactElement | undefined;

  if (
    childNodes.length === 1 &&
    React.isValidElement(childNodes[0]) &&
    !isSelectOptionOrSelectOptGroup(childNodes[0])
  ) {
    [customizeInput] = childNodes;
  }

  const getInputElement = customizeInput
    ? (): React.ReactElement => customizeInput!
    : undefined;

  let optionChildren: React.ReactNode;
  if (childNodes.length && isSelectOptionOrSelectOptGroup(childNodes[0])) {
    optionChildren = children;
  } else {
    optionChildren = [];
  }

  const comProp = {
    ref: autoCompleteRef,
    showSearch: true,
    showArrow: false,
    className: endCls,
    prefixCls: autoCompleteCls,
    style,
    ...restProps,
  };

  return (
    <InnerSelect mode="combobox" {...comProp} {...{ getInputElement }}>
      {optionChildren}
    </InnerSelect>
  );
});

type AutoCompleteWithOption = typeof AutoComplete & {
  Option: typeof Option;
};

(AutoComplete as AutoCompleteWithOption).Option = Option;

AutoComplete.displayName = 'AutoComplete';

AutoComplete.defaultProps = {
  allowClear: false,
  autoFocus: false,
};

export { Option };

export default AutoComplete;
