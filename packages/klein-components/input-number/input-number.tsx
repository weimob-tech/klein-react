import React from 'react';
import classNames from 'classnames';
import { ConfigContext } from '../config-provider/context';
import { RcInputNumber } from '../components';
import Icon from '../icon';

const InputNumberRc = RcInputNumber.default;
const { UpLine, DownLine } = Icon;

/* eslint-disable no-shadow */
enum inputWrapSize {
  small = 'sm',
  medium = '',
  large = 'lg',
}

type ValueType = string | number;
export interface InputNumberProps {
  /** 输入框大小 */
  size?: 'large' | 'medium' | 'small';
  /** 自定义className */
  className?: string;
  /** 自定义style */
  style?: React.CSSProperties;
  prefixCls?: string;
  /** 是否有边框 */
  bordered?: Boolean;
  /** 是否只读 */
  readOnly?: Boolean;
  /** 禁用 */
  disabled?: Boolean;
  /** 自动获取焦点 */
  autoFocus?: Boolean;
  /** 是否启用键盘快捷行为 */
  keyboard?: Boolean;
  /** 最大值 */
  max?: ValueType;
  /** 最小值 */
  min?: ValueType;
  /** 当前值 */
  value?: ValueType;
  /** 初始值 */
  defaultValue?: ValueType;
  /** 数值精度，配置 formatter 时会以 formatter 为准 */
  precision?: number;
  /** 每次改变步数，可以为小数 */
  step?: ValueType;
  /** 字符值模式，开启后支持高精度小数。同时 onChange 将返回 string 类型 */
  stringMode?: Boolean;
  /** 指定输入框展示值的格式 */
  formatter?: (value: ValueType) => string;
  /** 指定从 formatter 里转换回数字的方式，和 formatter 搭配使用 */
  parser?: (value: string) => ValueType;
  /** 输入框内容变化时的回调 */
  onChange?: (val?: ValueType) => void;
  /** 输入框失去焦点时的回调 */
  onBlur?: (val?: ValueType) => void;
  /** 输入框获取焦点时的回调 */
  onFocus?: (val?: ValueType) => void;
  /** 按下回车时的回调 */
  onPressEnter?: React.KeyboardEventHandler<HTMLInputElement>;
  /** 是否显示上下箭头 */
  controls?: boolean;
  /** 点击上下箭头的回调 */
  onStep?: (
    value: number,
    info: { offset: number; type: 'up' | 'down' },
  ) => void;
  /** 输入框前置复合元素 */
  addonBefore?: React.ReactNode;
  /** 输入框后置复合元素 */
  addonAfter?: React.ReactNode;
  placeholder?: string;
}

const InputNumber: React.FC<InputNumberProps> = React.forwardRef<
  unknown,
  InputNumberProps
>((props, ref) => {
  const { getPrefixClassName, size } = React.useContext(ConfigContext);
  const inputNumberRef = (ref as any) || React.useRef<HTMLElement>(null);

  const {
    className,
    size: customSize,
    prefixCls,
    bordered,
    readOnly,
    addonBefore,
    addonAfter,
    controls,
    style,
    ...others
  } = props;

  const inputNumberCls = getPrefixClassName('input-number', prefixCls);
  const upIcon = <UpLine className={`${prefixCls}-handler-up-inner`} />;
  const downIcon = <DownLine className={`${prefixCls}-handler-down-inner`} />;
  const endSize = customSize || size;

  const sizeSuffixCls = inputWrapSize[endSize as 'large' | 'medium' | 'small'];

  const endCls = classNames(
    sizeSuffixCls && `${inputNumberCls}-${sizeSuffixCls}`,
    !bordered && `${inputNumberCls}-borderless`,
    !addonAfter && !addonBefore && className,
  );

  const renderInputNumber = () => {
    const inputNumberNode = (
      <InputNumberRc
        ref={inputNumberRef}
        className={endCls}
        upHandler={upIcon}
        downHandler={downIcon}
        prefixCls={inputNumberCls}
        readOnly={readOnly}
        controls={controls}
        style={!addonAfter && !addonBefore ? style : null}
        {...others}
      />
    );

    if (!!addonAfter || !!addonBefore) {
      const addonCls = classNames(
        sizeSuffixCls && `${inputNumberCls}-${sizeSuffixCls}`,
        `${inputNumberCls}-group`,
        !!addonBefore && `${inputNumberCls}-group-addonBefore`,
        !!addonAfter && `${inputNumberCls}-group-addonAfter`,
        className,
      );
      const addBef = classNames(`${inputNumberCls}-addonBefore`);
      const addEnd = classNames(`${inputNumberCls}-addonAfter`);
      return (
        <div className={addonCls} style={style}>
          {addonBefore && <span className={addBef}>{addonBefore}</span>}
          {inputNumberNode}
          {addonAfter && <span className={addEnd}>{addonAfter}</span>}
        </div>
      );
    }
    return inputNumberNode;
  };

  return <>{renderInputNumber()}</>;
});

InputNumber.displayName = 'InputNumber';

InputNumber.defaultProps = {
  // size: 'medium',
  bordered: true,
};

export default InputNumber;
