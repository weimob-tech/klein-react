// @ts-nocheck
import * as React from 'react';
import Radio from './radio';
import type { RadioChangeEvent } from './interface';
import type { AbstractCheckboxProps } from '../checkbox/checkbox';
import { ConfigContext } from '../config-provider/context';
import RadioGroupContext from './context';

export type RadioButtonProps = AbstractCheckboxProps<RadioChangeEvent>;

const RadioButton = (props: RadioButtonProps, ref: React.Ref<any>) => {
  const radioGroupContext = React.useContext(RadioGroupContext);
  const { getPrefixClassName } = React.useContext(ConfigContext);

  React.useEffect(() => {
    if (radioGroupContext?.updateRadioType) {
      radioGroupContext?.updateRadioType('button');
    }
  }, []);

  return (
    <Radio
      {...props}
      checked={
        radioGroupContext
          ? props.value === radioGroupContext.value
          : props.checked
      }
      disabled={
        radioGroupContext
          ? props.disabled || radioGroupContext.disabled
          : props.disabled
      }
      prefixCls={getPrefixClassName('radio-button', props.prefixCls)}
      type="radio"
      ref={ref}
    />
  );
};

export default React.forwardRef(RadioButton);
