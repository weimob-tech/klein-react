import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const QQFill = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-qQFill`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M13.628 12.086c-.307.037-1.196-1.39-1.196-1.39 0 .826-.43 1.904-1.36 2.683.449.137 1.461.505 1.22.908-.195.325-3.345.207-4.254.106-.91.101-4.06.22-4.255-.106-.24-.402.771-.77 1.22-.908-.93-.779-1.36-1.857-1.36-2.684 0 0-.889 1.428-1.196 1.39-.143-.016-.33-.78.25-2.628.273-.87.586-1.595 1.07-2.79C3.684 3.587 4.971 1 8.036 1c3.032 0 4.349 2.535 4.272 5.668.483 1.192.797 1.92 1.07 2.789.58 1.847.392 2.612.249 2.629z" fill="currentColor" /></svg></span>;
});
QQFill.displayName = "QQFill";
export default QQFill;