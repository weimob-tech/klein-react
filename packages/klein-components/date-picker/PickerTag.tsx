import * as React from 'react';
import { ConfigContext } from '../config-provider/context';

export default function PickerTag(props: any) {
  const { getPrefixClassName } = React.useContext(ConfigContext);
  const prefix = getPrefixClassName('picker');
  return (
    <span className={`${prefix}-tag`} {...props}>
      {props.children}
    </span>
  );
}
