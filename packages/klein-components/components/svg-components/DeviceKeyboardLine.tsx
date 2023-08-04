import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const DeviceKeyboardLine = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-deviceKeyboardLine`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M.9 3.5a1.6 1.6 0 011.6-1.6h11a1.6 1.6 0 011.6 1.6v9a1.6 1.6 0 01-1.6 1.6h-11a1.6 1.6 0 01-1.6-1.6v-9zm1.6-.4a.4.4 0 00-.4.4v9c0 .22.179.4.4.4h11a.4.4 0 00.4-.4v-9a.4.4 0 00-.4-.4h-11zm3 3H4V4.9h1.5v1.2zm3.25 0h-1.5V4.9h1.5v1.2zm3.25 0h-1.5V4.9H12v1.2zM5.5 8.6H4V7.4h1.5v1.2zm3.25 0h-1.5V7.4h1.5v1.2zm3.25 0h-1.5V7.4H12v1.2zm-2 2.5H6V9.9h4v1.2z" fill="currentColor" /></svg></span>;
});
DeviceKeyboardLine.displayName = "DeviceKeyboardLine";
export default DeviceKeyboardLine;