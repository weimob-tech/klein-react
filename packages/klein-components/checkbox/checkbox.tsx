import * as React from 'react';
import cx from 'classnames';
import { RcCheckbox } from '../components';
import { GroupContext } from './checkbox-group';
import { ConfigContext } from '../config-provider/context';

export interface AbstractCheckboxProps<T> {
  /** 自定义样式前缀 */
  prefixCls?: string;
  /** 自定义class */
  className?: string;
  /** 初始是否选中 */
  defaultChecked?: boolean;
  /** 指定当前是否选中 */
  checked?: boolean;
  /** 自定义样式 */
  style?: React.CSSProperties;
  /** 失效状态 */
  disabled?: boolean;
  name?: string;
  /** 变化时回调函数 */
  onChange?: (e: T) => void;
  value?: any;
  /** 自动获取焦点 */
  autoFocus?: boolean;
  onMouseEnter?: React.MouseEventHandler;
  onMouseLeave?: React.MouseEventHandler;
  skipGroup?: boolean;
  children?: React.ReactNode;
}
export interface CheckboxChangeEventTarget extends CheckboxProps {
  /** 指定当前是否选中 */
  checked: boolean;
}

export interface CheckboxChangeEvent {
  target: CheckboxChangeEventTarget;
  stopPropagation: () => void;
  preventDefault: () => void;
  nativeEvent: MouseEvent;
}

export interface CheckboxProps
  extends AbstractCheckboxProps<CheckboxChangeEvent> {
  /** 设置 indeterminate 状态，只负责样式控制 */
  indeterminate?: boolean;
}
const InternalCheckbox: React.ForwardRefRenderFunction<
  unknown,
  CheckboxProps
> = (
  {
    prefixCls,
    className,
    children,
    indeterminate = false,
    style,
    onMouseEnter,
    onMouseLeave,
    skipGroup = false,
    ...restProps
  },
  ref,
) => {
  const { getPrefixClassName } = React.useContext(ConfigContext);
  const checkboxGroup = React.useContext(GroupContext);

  const prevValue = React.useRef(restProps.value);

  React.useEffect(() => {
    checkboxGroup?.registerValue(restProps.value);
  }, []);

  React.useEffect(() => {
    if (skipGroup) {
      return;
    }
    if (restProps.value !== prevValue.current) {
      checkboxGroup?.cancelValue(prevValue.current);
      checkboxGroup?.registerValue(restProps.value);
    }
    return () => checkboxGroup?.cancelValue(restProps.value);
  }, [restProps.value]);

  const checkboxCls = getPrefixClassName('checkbox', prefixCls);
  const checkboxProps: CheckboxProps = { ...restProps };
  if (checkboxGroup && !skipGroup) {
    checkboxProps.onChange = (...args) => {
      if (restProps.onChange) {
        restProps.onChange(...args);
      }
      if (checkboxGroup.toggleOption) {
        checkboxGroup.toggleOption({ label: children, value: restProps.value });
      }
    };
    checkboxProps.name = checkboxGroup.name;
    checkboxProps.checked = checkboxGroup.value.indexOf(restProps.value) !== -1;
    checkboxProps.disabled = restProps.disabled || checkboxGroup.disabled;
  }

  return (
    <label
      className={cx(
        `${checkboxCls}-wrapper`,
        checkboxProps.checked && `${checkboxCls}-wrapper-checked`,
        checkboxProps.disabled && `${checkboxCls}-wrapper-disabled`,
        className,
      )}
      style={style}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <RcCheckbox
        {...checkboxProps}
        prefixCls={checkboxCls}
        className={cx(indeterminate && `${checkboxCls}-indeterminate`)}
        ref={ref}
      />
      {children !== undefined && <span>{children}</span>}
    </label>
  );
};

const Checkbox = React.forwardRef<unknown, CheckboxProps>(InternalCheckbox);

Checkbox.displayName = 'Checkbox';

export default Checkbox;
