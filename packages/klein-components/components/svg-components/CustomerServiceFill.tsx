import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const CustomerServiceFill = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-customerServiceFill`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M8 .9C4.64.9 1.9 3.476 1.9 7v3.5A1.1 1.1 0 003 11.6h.5a2.1 2.1 0 002.1-2.1V8a2.1 2.1 0 00-2.1-2.1h-.286C3.696 3.643 5.648 2.1 8 2.1c2.351 0 4.303 1.543 4.786 3.8H12.5A2.1 2.1 0 0010.4 8v1.5c0 1.16.94 2.1 2.1 2.1h.157a3.491 3.491 0 01-.29.582c-.421.672-1.213 1.408-2.781 1.642A1.1 1.1 0 008.5 12.9h-1a1.1 1.1 0 000 2.2h1c2.692 0 4.141-1.094 4.884-2.282a4.842 4.842 0 00.704-2.093 2.61 2.61 0 00.012-.225V7C14.1 3.476 11.358.9 8 .9z" fill="currentColor" /></svg></span>;
});
CustomerServiceFill.displayName = "CustomerServiceFill";
export default CustomerServiceFill;