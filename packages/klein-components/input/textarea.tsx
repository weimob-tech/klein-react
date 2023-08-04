import React from 'react';
import cx from 'classnames';

import { getWordLen } from './utils';
import { getControlledValue } from './input';
import { ConfigContext } from '../config-provider/context';
import ResizeObserver from '../components/rc-resize-observer';

export interface TextAreaProps
  extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'onChange'> {
  /** 输入框占位文本 */
  placeholder?: string;
  /** 输入框默认内容 */
  defaultValue?: string;
  /** 是否开启中文字符数按比例计算 */
  chineseCalc?: boolean;
  /** 控制一个中文所占字符数 */
  proportion?: number;
  /** 输入框内容 */
  value?: any;
  /** 禁用状态控制 */
  disabled?: boolean;
  // 是否可清空（暂不支持）
  clearable?: boolean;
  /** 显示输入字数 */
  showCount?: boolean | ((count: number, maxLength?: number) => string);
  /** 最大输入长度 */
  maxLength?: number;
  /** 自定义className */
  className?: string;
  /** 内置三种宽度的textarea */
  size?: 'small' | 'medium' | 'large';
  /** 自定义style */
  style?: React.CSSProperties;
  /** 自定义textarea style */
  textareaStyle?: React.CSSProperties;
  /** 输入框内容变化时的回调 */
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>, len: number) => void;
  /** 按下回车的回调 */
  onPressEnter?: React.KeyboardEventHandler<HTMLTextAreaElement>;
}

function getMaxLengthVal(value: string, maxLength: number) {
  return (value || '').split('').slice(0, maxLength).join('');
}

const TextArea = React.forwardRef<unknown, TextAreaProps>((props, ref) => {
  const {
    className,
    style,
    textareaStyle,
    showCount,
    defaultValue,
    clearable,
    size,
    maxLength,
    chineseCalc,
    proportion,
    onPressEnter,
    onKeyDown,
    onChange,
    onCompositionStart,
    onCompositionEnd,
    ...inputProps
  } = props;

  const [inputValue, setInputValue] = React.useState<string>(
    props.value || defaultValue,
  );
  const [compositing, setCompositing] = React.useState<boolean>(false);
  const inputRef = (ref as any) || React.useRef<HTMLInputElement>();
  const [wrapperSize, setWrapperSize] = React.useState<React.CSSProperties>({
    width: style?.width,
    height: style?.height,
  });
  const { getPrefixClassName } = React.useContext(ConfigContext);
  const inputCls = getPrefixClassName('input-textarea');
  const hasMaxLength = Number(maxLength) > 0;

  if (typeof props.value !== 'undefined' && props.value !== inputValue) {
    setInputValue(props.value);
  }

  const handleCompositionStart = (
    e: React.CompositionEvent<HTMLTextAreaElement>,
  ) => {
    setCompositing(true);
    onCompositionStart?.(e);
  };

  const handleOnChange = (
    e:
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.CompositionEvent<HTMLTextAreaElement>,
    changeVal: string,
  ) => {
    const currentTarget = e.currentTarget;
    const event = Object.create(e);
    event.target = currentTarget;
    event.currentTarget = currentTarget;
    currentTarget.value = changeVal;
    onChange?.(
      event as React.ChangeEvent<HTMLTextAreaElement>,
      getWordLen(changeVal, proportion, chineseCalc),
    );
  };

  const handleCompositionEnd = (
    e: React.CompositionEvent<HTMLTextAreaElement>,
  ) => {
    let val = e.currentTarget.value;
    if (hasMaxLength) {
      val = getMaxLengthVal(val, maxLength!);
    }
    // 如果和onchange完毕时的值相同则不触发更新
    if (val !== inputValue) {
      setInputValue(val);
      handleOnChange?.(e, val);
    }
    setCompositing(false);
    onCompositionEnd?.(e);
  };

  // handle
  const handleChange = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
    // 修复设置 value 的时候输入内容可以修改
    let val = evt.target.value;
    if (hasMaxLength && !compositing) {
      val = getMaxLengthVal(val, maxLength!);
    }
    if (typeof props.value === 'undefined') {
      setInputValue(val);
    }
    handleOnChange?.(evt, val);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (onPressEnter && e.keyCode === 13) {
      onPressEnter(e);
    }
    onKeyDown?.(e);
  };

  const onTextareaResize = ({ width, height }: React.CSSProperties) => {
    const textareaCss = inputRef.current?.style;
    if (!textareaCss || (!textareaCss.width && !textareaCss.height)) {
      return;
    }
    setWrapperSize({
      width,
      height,
    });
  };

  // render
  const renderTextarea = (wrapper?: boolean) => (
    <ResizeObserver onResize={onTextareaResize}>
      <textarea
        {...inputProps}
        ref={inputRef as any}
        value={getControlledValue(inputValue)}
        maxLength={maxLength}
        style={!wrapper ? { ...style, ...textareaStyle } : textareaStyle}
        className={cx(inputCls, {
          [`${inputCls}-${size}`]: !showCount && size,
          [`${className}`]: !showCount,
        })}
        onChange={handleChange}
        onCompositionStart={handleCompositionStart}
        onCompositionEnd={handleCompositionEnd}
        onKeyDown={handleKeyDown}
      />
    </ResizeObserver>
  );

  if (!showCount) return renderTextarea();

  const countLength = getWordLen(inputValue, proportion, chineseCalc);
  const hasCountError = hasMaxLength ? countLength > Number(maxLength) : false;

  const countText =
    typeof showCount === 'function'
      ? showCount(countLength, maxLength)
      : countLength + (hasMaxLength ? `/${maxLength}` : '');
  return (
    <div
      className={cx(
        `${inputCls}-wrapper`,
        hasCountError && `${inputCls}-count-error`,
        size && `${inputCls}-wrapper-${size}`,
        props.disabled && `${inputCls}-wrapper-disabled`,
        className,
      )}
      style={{
        ...style,
        width: wrapperSize.width,
        height: wrapperSize.height,
      }}
      data-count={countText}
    >
      {renderTextarea(true)}
      <span
        className={`${inputCls}-count`}
        onClick={() => {
          inputRef.current.focus();
          inputRef.current.setSelectionRange(
            getControlledValue(inputValue).length,
            getControlledValue(inputValue).length,
          );
        }}
      >
        {countText}
      </span>
    </div>
  );
});
TextArea.displayName = 'TextArea';
TextArea.defaultProps = {
  disabled: false,
  clearable: false,
  proportion: 2,
};

export default TextArea;
