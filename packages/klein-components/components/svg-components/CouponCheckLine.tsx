import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const CouponCheckLine = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-couponCheckLine`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M2.5 1.9A1.6 1.6 0 00.9 3.5v3.114l.3.173a1.4 1.4 0 010 2.426l-.3.173v3.115A1.6 1.6 0 002.5 14.1h11a1.6 1.6 0 001.6-1.6V9.387l-.3-.173a1.4 1.4 0 010-2.426l.3-.173V3.5a1.6 1.6 0 00-1.6-1.6h-11zm-.4 1.6a.4.4 0 01.4-.4h11a.4.4 0 01.4.4v2.45c-.608.476-1 1.217-1 2.05 0 .833.392 1.575 1 2.05v2.45a.4.4 0 01-.4.4h-11a.4.4 0 01-.4-.4v-2.45c.608-.476 1-1.217 1-2.05 0-.833-.392-1.574-1-2.05V3.5zm5.574 6.674l4-4-.848-.848L7.25 8.9 5.174 6.826l-.848.848 2.5 2.5a.6.6 0 00.848 0z" fill="currentColor" /></svg></span>;
});
CouponCheckLine.displayName = "CouponCheckLine";
export default CouponCheckLine;