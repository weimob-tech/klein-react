import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const DeviceLaptopLine = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-deviceLaptopLine`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M3.5 1.65a1.6 1.6 0 00-1.6 1.6v5.5c0 .27.067.526.186.75a1.097 1.097 0 00-.263.483l-.75 3A1.1 1.1 0 002.14 14.35h11.72a1.1 1.1 0 001.067-1.367l-.75-3a1.098 1.098 0 00-.263-.483c.119-.224.186-.48.186-.75v-5.5a1.6 1.6 0 00-1.6-1.6h-9zm9 7.5h-9a.4.4 0 01-.4-.4v-5.5c0-.22.179-.4.4-.4h9a.4.4 0 01.4.4v5.5a.4.4 0 01-.4.4zm-9 1.2h9.531l.7 2.8h-2.96l-.177-1.235A.6.6 0 0010 11.4H6a.6.6 0 00-.594.515L5.23 13.15H2.268l.7-2.8H3.5zm6.058 2.8H6.442l.078-.55h2.96l.078.55zM9 4.6H7V3.4h2v1.2z" fill="currentColor" /></svg></span>;
});
DeviceLaptopLine.displayName = "DeviceLaptopLine";
export default DeviceLaptopLine;