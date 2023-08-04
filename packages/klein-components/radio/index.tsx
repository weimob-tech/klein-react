import type * as React from 'react';
import InternalRadio from './radio';
import Group from './radio-group';
import Button from './radio-button';
import type { RadioProps } from './interface';

export {
  RadioGroupButtonStyle,
  RadioGroupOptionType,
  RadioGroupProps,
  RadioGroupContextProps,
  RadioProps,
  RadioChangeEventTarget,
  RadioChangeEvent,
} from './interface';

interface CompoundedComponent
  extends React.ForwardRefExoticComponent<
    RadioProps & React.RefAttributes<HTMLElement>
  > {
  Group: typeof Group;
  Button: typeof Button;
}
Group.displayName = 'RadioGroup';
Button.displayName = 'RadioButton';

const Radio = InternalRadio as CompoundedComponent;
Radio.Button = Button;
Radio.Group = Group;

export { Button, Group };
Radio.displayName = 'Radio';
export default Radio;
