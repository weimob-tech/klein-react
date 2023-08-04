import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const DeviceSmartPhoneLine = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-deviceSmartPhoneLine`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M5 .9A2.1 2.1 0 002.9 3v10c0 1.16.94 2.1 2.1 2.1h6a2.1 2.1 0 002.1-2.1V3A2.1 2.1 0 0011 .9H5zM4.1 3a.9.9 0 01.9-.9h6a.9.9 0 01.9.9v10a.9.9 0 01-.9.9H5a.9.9 0 01-.9-.9V3zm2.4 1.1h3V2.9h-3v1.2z" fill="currentColor" /></svg></span>;
});
DeviceSmartPhoneLine.displayName = "DeviceSmartPhoneLine";
export default DeviceSmartPhoneLine;