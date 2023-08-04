import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const OrderReturnIn7DaysLine = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-orderReturnIn7DaysLine`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" ><g fill="currentColor" fillRule="nonzero"><path d="M8 2.1c-2.93 0-5.36 2.165-5.794 4.992a.596.596 0 01-1.137.146L0 4.737l1.095-.475.41.96C2.58 2.68 5.084.9 8 .9c3.528 0 6.45 2.605 6.972 6.008l-1.178.184C13.36 4.265 10.93 2.1 8 2.1zm6.308 6.305a.596.596 0 01.622.358l1.07 2.5-1.095.474-.41-.96C13.42 13.32 10.916 15.1 8 15.1c-3.528 0-6.45-2.605-6.972-6.008l1.178-.184C2.64 11.735 5.07 13.9 8 13.9c2.93 0 5.36-2.165 5.794-4.992.04-.264.25-.47.514-.503z" /><path d="M5.814 4.8h4.372v.978L8.026 11.2H6.634l2.145-5.168H5.814z" /></g></svg></span>;
});
OrderReturnIn7DaysLine.displayName = "OrderReturnIn7DaysLine";
export default OrderReturnIn7DaysLine;