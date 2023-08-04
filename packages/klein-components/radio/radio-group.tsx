import * as React from 'react';
import classNames from 'classnames';
// import useMergedState from '../components/rc-util/hooks/useMergedState';
import Radio from './radio';
import type {
  RadioGroupProps,
  RadioChangeEvent,
  RadioGroupButtonStyle,
} from './interface';
import { ConfigContext } from '../config-provider/context';
import SizeContext from '../config-provider/SizeContext';
import { RadioGroupContextProvider } from './context';
import Grid from '../grid';

const { Row, Col } = Grid;

const RadioGroup = React.forwardRef<HTMLDivElement, RadioGroupProps>(
  (props, ref) => {
    const { getPrefixClassName } = React.useContext(ConfigContext);
    const size = React.useContext(SizeContext);
    const [value, setValue] = React.useState();
    const { optionType } = props;
    const [radiotype, setRadiotype] = React.useState<
      RadioGroupProps['optionType']
    >(optionType);
    const prevRadiotype = React.useRef<RadioGroupProps['optionType']>();

    // const [value, setValue] = useMergedState(props.defaultValue, {
    //   value: props.value,
    // });
    React.useEffect(() => {
      setValue(
        typeof props.value === 'undefined' ? props.defaultValue : props.value,
      );
    }, [props.value, props.defaultValue]);

    const onRadioChange = (ev: RadioChangeEvent) => {
      const lastValue = value;
      const val = ev.target.value;
      if (!('value' in props)) {
        setValue(val);
      }
      const { onChange } = props;
      if (onChange && val !== lastValue) {
        onChange(ev);
      }
    };

    const updateRadioType = (type: RadioGroupProps['optionType']) => {
      if (prevRadiotype.current === type) return;
      setRadiotype(type);
      prevRadiotype.current = type;
    };

    const renderGroup = () => {
      const {
        prefixCls: customizePrefixCls,
        className = '',
        options,
        buttonStyle = 'outline' as RadioGroupButtonStyle,
        disabled,
        children,
        size: customizeSize,
        style,
        id,
        onMouseEnter,
        onMouseLeave,
        rowProps,
        colProps,
        direction,
      } = props;
      const prefixCls = getPrefixClassName('radio', customizePrefixCls);
      const groupPrefixCls = `${prefixCls}-group`;
      let childrenToRender = children;
      // 如果存在 options, 优先使用
      if (options && options.length > 0) {
        const optionsPrefixCls =
          radiotype === 'button' ? `${prefixCls}-button` : prefixCls;
        childrenToRender = options.map((option) => {
          if (typeof option === 'string') {
            // 此处类型自动推导为 string
            return (
              <Radio
                key={option}
                prefixCls={optionsPrefixCls}
                disabled={disabled}
                value={option}
                checked={value === option}
              >
                {option}
              </Radio>
            );
          }
          // 此处类型自动推导为 { label: string value: string }
          return (
            <Radio
              key={`radio-group-value-options-${option.value}`}
              prefixCls={optionsPrefixCls}
              disabled={option.disabled || disabled}
              value={option.value}
              checked={value === option.value}
              style={option.style}
            >
              {option.label}
            </Radio>
          );
        });
      }

      const mergedSize = customizeSize || size;
      const classString = classNames(
        groupPrefixCls,
        `${groupPrefixCls}-${buttonStyle}`,
        {
          [`${groupPrefixCls}-${mergedSize}`]: mergedSize,
        },
        className,
      );
      const rowCls = classNames(rowProps?.className, {
        [`${groupPrefixCls}-row-vertical`]: direction === 'vertical',
      });
      const rowGutter = direction === 'vertical' ? [0, 20] : [32];

      return (
        <div
          className={classString}
          style={style}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          id={id as any}
          ref={ref}
        >
          {radiotype !== 'button' ? (
            <Row gutter={rowGutter} className={rowCls} {...rowProps}>
              {React.Children.map(childrenToRender, (item, index) =>
                /* eslint-disable react/no-array-index-key */
                item ? (
                  <Col key={index} {...colProps}>
                    {item}
                  </Col>
                ) : null,
              )}
            </Row>
          ) : (
            <>{React.Children.map(childrenToRender, (item) => item)}</>
          )}
        </div>
      );
    };

    return (
      <RadioGroupContextProvider
        value={{
          onChange: onRadioChange,
          value,
          disabled: props.disabled,
          name: props.name,
          updateRadioType,
        }}
      >
        {renderGroup()}
      </RadioGroupContextProvider>
    );
  },
);

export default React.memo(RadioGroup);
