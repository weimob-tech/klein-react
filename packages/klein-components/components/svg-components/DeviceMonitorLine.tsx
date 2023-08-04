import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const DeviceMonitorLine = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-deviceMonitorLine`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M.9 3.5a1.6 1.6 0 011.6-1.6h11a1.6 1.6 0 011.6 1.6V10a1.6 1.6 0 01-1.6 1.6H9.913l.13 1.3H11.5v1.2h-7v-1.2h1.457l.13-1.3H2.5A1.6 1.6 0 01.9 10V3.5zm5.307 6.9H13.5a.4.4 0 00.4-.4V3.5a.4.4 0 00-.4-.4h-11a.4.4 0 00-.4.4V10c0 .22.179.4.4.4h3.707zm1.086 1.2l-.13 1.3h1.674l-.13-1.3H7.293z" fill="currentColor" /></svg></span>;
});
DeviceMonitorLine.displayName = "DeviceMonitorLine";
export default DeviceMonitorLine;