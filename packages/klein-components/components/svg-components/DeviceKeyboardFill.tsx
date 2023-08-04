import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const DeviceKeyboardFill = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-deviceKeyboardFill`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M2.5 2A1.5 1.5 0 001 3.5v9A1.5 1.5 0 002.5 14h11a1.5 1.5 0 001.5-1.5v-9A1.5 1.5 0 0013.5 2h-11zm3 4.1H4V4.9h1.5v1.2zm3.25 0h-1.5V4.9h1.5v1.2zm3.25 0h-1.5V4.9H12v1.2zM5.5 8.6H4V7.4h1.5v1.2zm3.25 0h-1.5V7.4h1.5v1.2zm3.25 0h-1.5V7.4H12v1.2zm-2 2.5H6V9.9h4v1.2z" fill="currentColor" /></svg></span>;
});
DeviceKeyboardFill.displayName = "DeviceKeyboardFill";
export default DeviceKeyboardFill;