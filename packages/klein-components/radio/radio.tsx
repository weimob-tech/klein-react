import * as React from 'react';
import cx from 'classnames';
import { RcCheckbox } from '../components';
import { composeRef } from '../components/rc-util/ref';
import type { RadioProps, RadioChangeEvent } from './interface';
import { ConfigContext } from '../config-provider/context';
import RadioGroupContext from './context';

const InternalRadio: React.ForwardRefRenderFunction<unknown, RadioProps> = (
  props,
  ref,
) => {
  const context = React.useContext(RadioGroupContext);
  const { getPrefixClassName } = React.useContext(ConfigContext);
  const innerRef = React.useRef<HTMLElement>();
  const mergedRef = composeRef(ref, innerRef);

  const handleChange = (evt: RadioChangeEvent) => {
    props.onChange?.(evt);
    context?.onChange?.(evt);
  };

  const { className, children, style, prefixCls, ...restProps } = props;
  const radioCls = getPrefixClassName('radio', prefixCls);
  const radioProps: RadioProps = { ...restProps };
  if (context) {
    radioProps.name = context.name;
    radioProps.onChange = handleChange;
    radioProps.checked = props.value === context.value;
    radioProps.disabled = props.disabled || context.disabled;
  }
  return (
    <label
      className={cx(
        `${radioCls}-wrapper`,
        radioProps.checked && `${radioCls}-wrapper-checked`,
        radioProps.disabled && `${radioCls}-wrapper-disabled`,
        radioProps.showType &&
          `${radioCls}-wrapper-show-type-${radioProps.showType}`,
        className,
      )}
      style={style}
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
    >
      <RcCheckbox {...radioProps} prefixCls={radioCls} ref={mergedRef} />
      {children !== undefined ? <span>{children}</span> : null}
    </label>
  );
};

const Radio = React.forwardRef<unknown, RadioProps>(InternalRadio);

Radio.displayName = 'Radio';

Radio.defaultProps = {
  type: 'radio',
};

export default Radio;
