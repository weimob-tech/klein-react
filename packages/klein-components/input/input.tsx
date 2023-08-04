import React from 'react';
import cx from 'classnames';
import { getWordLen } from './utils';
import { composeRef } from '../components/rc-util/ref';
import Icon from '../icon';
import { ConfigContext } from '../config-provider/context';

const { CloseFill } = Icon;

export interface InputProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    'size' | 'prefix' | 'type' | 'onChange'
  > {
  /** 输入框占位文本 */
  placeholder?: string;
  /** 输入框默认内容 */
  defaultValue?: any;
  /** 输入框内容 */
  value?: any;
  /** 禁用状态控制 */
  disabled?: boolean;
  // 是否可清空
  clearable?: boolean;
  /** text，textarea 和其他原生`input`的`type`值 */
  type?: string;
  /** 显示输入字数 */
  showCount?: boolean | ((count: number, maxLength?: number) => string);
  /** 最大输入长度 */
  maxLength?: number;
  /** 是否开启中文字符数按比例计算 */
  chineseCalc?: boolean;
  /** 控制一个中文所占字符数 */
  proportion?: number;
  /** 输入框前缀元素 */
  prefix?: React.ReactNode;
  /** 输入框后缀元素 */
  suffix?: React.ReactNode;
  /** 输入框前置复合元素 */
  addonBefore?: React.ReactNode;
  /** 输入框后置复合元素 */
  addonAfter?: React.ReactNode;
  /** 内置5种输入框宽度（分别对应96，200，304，408，512） */
  wSize?: 'xs' | 'sm' | 'm' | 'l' | 'xl';
  /** 输入框大小 */
  size?: 'large' | 'medium' | 'small';
  /** 自定义className */
  className?: string;
  /** 显示边框 */
  bordered?: boolean;
  /** 自定义style */
  style?: React.CSSProperties;
  /** 输入框内容变化时的回调 */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>, len: number) => void;
  /** 按下回车时的回调 */
  onPressEnter?: React.KeyboardEventHandler<HTMLInputElement>;
  autocomplete?: boolean;
}

// https://reactjs.org/docs/forms.html#controlled-input-null-value
export const getControlledValue = (value?: string | null) => {
  if (typeof value === 'undefined' || value === null) return '';
  return value;
};

const Input: React.FC<
  InputProps & React.RefAttributes<HTMLInputElement>
> = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    prefix,
    suffix,
    addonBefore,
    addonAfter,
    clearable,
    defaultValue,
    onPressEnter,
    size: customSize,
    wSize,
    showCount,
    style,
    className,
    bordered,
    chineseCalc,
    proportion,
    ...inputProps
  } = props;

  // state
  const [inputValue, setInputValue] = React.useState<string>(defaultValue);
  const [inputFocused, setInputFocused] = React.useState<boolean>();
  const { getPrefixClassName, size } = React.useContext(ConfigContext);
  const inputCls = getPrefixClassName('input');
  const inputRef = React.useRef<HTMLInputElement>(null);
  const endSize = customSize || size;

  const getSizeSuffixCls = () => {
    if (endSize === 'small') return 'sm';
    if (endSize === 'large') return 'lg';
    return '';
  };

  if (typeof props.value !== 'undefined' && props.value !== inputValue) {
    setInputValue(props.value);
  }

  // handle
  const handleFocus = (evt: React.FocusEvent<HTMLInputElement>) => {
    setInputFocused(true);
    props.onFocus?.(evt);
  };
  const handleBlur = (evt: React.FocusEvent<HTMLInputElement>) => {
    setInputFocused(false);
    props.onBlur?.(evt);
  };
  const handleClear = (evt: React.MouseEvent<HTMLElement>) => {
    setInputValue('');
    // const originalInputValue = inputRef?.current?.value;
    const event = Object.create(evt);
    event.target = inputRef?.current;
    event.currentTarget = inputRef?.current;
    (inputRef.current as any).value = '';
    props.onChange?.(event as React.ChangeEvent<HTMLInputElement>, 0);
    // (inputRef.current as any).value = originalInputValue;
    inputRef?.current?.focus();
  };
  const handleKeyDown = (evt: React.KeyboardEvent<HTMLInputElement>) => {
    if (evt.keyCode === 13) props.onPressEnter?.(evt);
    props.onKeyDown?.(evt);
  };

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const val = evt.target?.value;
    // 修复设置 value 的时候输入内容可以修改
    if (typeof props.value === 'undefined') {
      setInputValue(val);
    }
    props.onChange?.(evt, getWordLen(val, proportion, chineseCalc));
  };

  // render
  const hasPrefix = Boolean(props.prefix);
  const hasSuffix = Boolean(props.suffix);

  const hasAddonBefore = Boolean(props.addonBefore);
  const hasAddonAfter = Boolean(props.addonAfter);

  const hasAddonGroup = hasAddonBefore || hasAddonAfter;

  const sizeSuffixCls = getSizeSuffixCls();

  const renderClearBtn = () => {
    // 仅当有内容且不为禁用状态下可用
    if (props.disabled) return null;
    let hiddenStyle: React.CSSProperties | undefined;
    if (!inputValue) {
      hiddenStyle = {
        visibility: 'hidden',
      };
    }
    return (
      <span className={`${inputCls}-clear`} onClick={handleClear}>
        <CloseFill />
      </span>
    );
  };

  const renderCount = () => {
    const { maxLength } = props;
    const hasMaxLength = Number(maxLength) > 0;
    const countLength = getWordLen(inputValue, proportion, chineseCalc);
    const hasCountError = hasMaxLength
      ? countLength > Number(maxLength)
      : false;
    // showCount支持传入方法，自定义显示统计信息
    const countText =
      typeof showCount === 'function'
        ? showCount(countLength, maxLength)
        : countLength + (hasMaxLength ? `/${maxLength}` : '');
    return (
      <div
        className={cx(
          `${inputCls}-count`,
          (inputFocused || inputValue) && `${inputCls}-count-show`,
          hasCountError && `${inputCls}-count-error`,
        )}
      >
        {countText}
      </div>
    );
  };

  const renderAffix = (fixKey: 'prefix' | 'suffix') => {
    const fixValue = props[fixKey];
    return <div className={`${inputCls}-${fixKey}`}>{fixValue}</div>;
  };

  const renderAddon = (addonKey: 'addonBefore' | 'addonAfter') => {
    const addonValue = props[addonKey];
    return (
      <span
        className={cx(
          `${inputCls}-group-addon`,
          `${inputCls}-group-addon-text`,
        )}
      >
        {addonValue}
      </span>
    );
  };

  const renderInput = () => {
    const hasWidgth = hasPrefix || hasSuffix || showCount || clearable;
    return (
      <span
        className={cx(
          inputCls,
          sizeSuffixCls && `${inputCls}-${sizeSuffixCls}`,
          props.disabled && `${inputCls}-disabled`,
          !props.disabled && inputFocused && bordered && `${inputCls}-focused`,
          hasWidgth && `${inputCls}-with-widget`,
          !hasAddonGroup && props.className,
          !bordered && `${inputCls}-border-less`,
          wSize && `${inputCls}-width-${wSize}`,
        )}
        style={hasAddonGroup ? undefined : props.style}
      >
        {hasPrefix && renderAffix('prefix')}
        <input
          {...inputProps}
          ref={composeRef(inputRef, ref) as any}
          value={getControlledValue(inputValue)}
          className={cx(`${inputCls}-inner`)}
          onKeyDown={handleKeyDown}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        {clearable && renderClearBtn()}
        {showCount && renderCount()}
        {hasSuffix && renderAffix('suffix')}
      </span>
    );
  };

  if (!hasAddonGroup) return renderInput();

  return (
    <div
      className={cx(
        `${inputCls}-group`,
        sizeSuffixCls && `${inputCls}-group-${sizeSuffixCls}`,
        props.className,
      )}
      style={props.style}
    >
      {hasAddonBefore && renderAddon('addonBefore')}
      {renderInput()}
      {hasAddonAfter && renderAddon('addonAfter')}
    </div>
  );
});
Input.displayName = 'Input';
Input.defaultProps = {
  // size: 'medium',
  type: 'text',
  disabled: false,
  clearable: false,
  bordered: true,
  chineseCalc: false,
  proportion: 2,
};

export default Input;
