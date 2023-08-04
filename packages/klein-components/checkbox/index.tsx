import type * as React from 'react';
import InternalCheckbox, { CheckboxProps } from './checkbox';
import Group from './checkbox-group';

interface CompoundedComponent
  extends React.ForwardRefExoticComponent<
    CheckboxProps & React.RefAttributes<HTMLInputElement>
  > {
  Group: typeof Group;
}

const Checkbox = InternalCheckbox as CompoundedComponent;

Checkbox.Group = Group;
export { CheckboxProps };
export default Checkbox;
