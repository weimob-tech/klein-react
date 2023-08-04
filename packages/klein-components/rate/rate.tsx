import React, {
  useRef,
  useEffect,
  useState,
  useMemo,
  useCallback,
} from 'react';
const { StarFill } = Icon;

import classnames from 'classnames';
import { ConfigContext } from '../config-provider/context';
import KeyCode from '../components/rc-util/KeyCode';
import Icon from '../icon';
import Star from './star';

export interface RateProps {
  /** 是否允许再次点击后清除 */
  allowClear?: boolean;
  /** 是否允许半选 */
  allowHalf?: boolean;
  /** 自动获取焦点 */
  autoFocus?: boolean;
  /** 自定义字符 */
  character?: React.ReactNode;
  /** 自定义样式类名 */
  className?: string;
  /** star 总数 */
  count?: number;
  /** 默认值 */
  defaultValue?: number;
  /** 只读，无法进行交互 */
  disabled?: boolean;
  /** 自定义样式对象 */
  style?: React.CSSProperties;
  /** 自定义每项的提示信息 */
  tooltips?: string[];
  /** 当前数，受控值 */
  value?: number;
  /** 失去焦点时的回调 */
  onBlur?: (event: React.FocusEventHandler) => void;
  /** 选择时的回调 */
  onChange?: (value: number) => void;
  /** 获取焦点时的回调 */
  onFocus?: (event: React.FocusEventHandler) => void;
  /** 鼠标经过时数值变化的回调 */
  onHoverChange?: (value: number) => void;
  /** 当前回显的值变化的回调 */
  onShowChange?: (value: number) => void;
  /** onKeyDown */
  onKeyDown?: (event: React.KeyboardEventHandler) => void;
}

const getValidValue = (value: any, defaultValue: number) => {
  if (typeof value === 'number' && value > 0) {
    return value;
  }

  return defaultValue;
};

const Rate: React.FC<RateProps> = (props) => {
  const { getPrefixClassName } = React.useContext(ConfigContext);

  const {
    allowClear,
    allowHalf,
    autoFocus,
    character,
    className: customClassName,
    count: customCount,
    defaultValue,
    disabled,
    style,
    tooltips,
    onBlur,
    onChange,
    onFocus,
    onHoverChange,
    onShowChange,
    onKeyDown,
  } = props;

  const rateCls = getPrefixClassName('rate');

  const rateRef = useRef<HTMLDivElement>();
  useEffect(() => {
    if (autoFocus && rateRef.current) {
      rateRef.current.focus();
    }
  }, []);

  const count = useMemo(() => getValidValue(customCount, 5), [customCount]);

  // 当前值
  const [value, setValue] = useState(getValidValue(defaultValue, 0));
  // 当前回显的值
  const [hoverValue, setHoverValue] = useState<undefined | number>();
  // 允许清除会有一个特殊的情况: 再次点击当前值被清楚，但是hover的值没有变化的时候，应该是0而不是当前hover的值
  const prevClearedValue = useRef<number | undefined>();

  useEffect(() => {
    if (Reflect.has(props, 'value')) {
      const nextValue = getValidValue(props.value, 0);
      setValue(nextValue);
    }
  }, [props]);

  const getValue = useCallback(
    (event, index): number => {
      let nextValue = index + 1;

      if (allowHalf) {
        const target = event.currentTarget;
        const rect = target.getBoundingClientRect();
        const width = target.clientWidth;

        const isLeft = event.pageX - rect.left < width / 2;

        if (isLeft) {
          nextValue -= 0.5;
        }
      }

      return nextValue;
    },
    [allowHalf],
  );

  const handleMouseMove = useCallback(
    (event, index) => {
      if (disabled) {
        return;
      }

      let nextHoverValue = getValue(event, index);

      if (nextHoverValue === prevClearedValue.current) {
        nextHoverValue = 0;
      } else {
        prevClearedValue.current = undefined;
      }

      setHoverValue(nextHoverValue);

      if (onHoverChange) {
        onHoverChange(nextHoverValue);
      }
    },
    [disabled, getValue, onHoverChange],
  );

  const handleMouseLeave = useCallback(() => {
    setHoverValue(undefined);
  }, []);

  const changeValue = useCallback(
    (nextValue) => {
      let changedValue = nextValue;
      if (nextValue < 0) {
        changedValue = 0;
      } else if (nextValue > count) {
        changedValue = count;
      }

      if (!Reflect.has(props, 'value')) {
        setValue(changedValue);
      }

      if (onChange) {
        onChange(changedValue);
      }
    },
    [count, onChange, props],
  );

  const handleClick = useCallback(
    (event, index) => {
      if (disabled) {
        return;
      }

      let nextValue = getValue(event, index);

      if (allowClear && nextValue === value) {
        prevClearedValue.current = nextValue;
        nextValue = 0;

        setHoverValue(undefined);
      }

      changeValue(nextValue);
    },
    [allowClear, changeValue, disabled, getValue, value],
  );

  const className = useMemo(() => {
    return classnames(rateCls, customClassName, {
      [`${rateCls}-disabled`]: disabled,
    });
  }, [customClassName, disabled, rateCls]);

  const currentValue = useMemo(
    () => (typeof hoverValue === 'number' ? hoverValue : value),
    [hoverValue, value],
  );
  useEffect(() => {
    if (disabled) {
      return;
    }

    if (onShowChange) {
      onShowChange(currentValue);
    }
  }, [disabled, onShowChange, currentValue]);

  const handleBlur = useCallback(
    (event) => {
      if (disabled) {
        return;
      }

      if (onBlur) {
        onBlur(event);
      }
    },
    [disabled, onBlur],
  );

  const handleFocus = useCallback(
    (event) => {
      if (disabled) {
        return;
      }

      if (onFocus) {
        onFocus(event);
      }
    },
    [disabled, onFocus],
  );

  const handleKeyDown = useCallback(
    (event) => {
      if (disabled) {
        return disabled;
      }

      const { keyCode } = event;

      switch (keyCode) {
        case KeyCode.LEFT:
          if (allowHalf) {
            changeValue(value - 0.5);
          } else {
            changeValue(value - 1);
          }
          event.preventDefault();
          break;
        case KeyCode.RIGHT:
          if (allowHalf) {
            changeValue(value + 0.5);
          } else {
            changeValue(value + 1);
          }
          event.preventDefault();
          break;
      }

      if (onKeyDown) {
        onKeyDown(event);
      }
    },
    [allowHalf, changeValue, disabled, onKeyDown, value],
  );

  return (
    <div
      ref={rateRef as any}
      className={className}
      style={style}
      tabIndex={disabled ? -1 : 0}
      onMouseLeave={handleMouseLeave}
      onBlur={handleBlur}
      onFocus={handleFocus}
      onKeyDown={handleKeyDown}
    >
      {Array.from({ length: count }).map((_, index) => (
        <Star
          key={index}
          value={currentValue}
          character={character || <StarFill />}
          index={index}
          allowHalf={allowHalf as boolean}
          onMouseMove={handleMouseMove}
          onClick={handleClick}
          tooltips={tooltips}
        />
      ))}
    </div>
  );
};

Rate.defaultProps = {
  count: 5,
  allowHalf: false,
};

export default Rate;
