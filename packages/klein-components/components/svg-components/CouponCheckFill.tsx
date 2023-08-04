import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const CouponCheckFill = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-couponCheckFill`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M2.5 1.9A1.6 1.6 0 00.9 3.5v3.114l.3.173a1.4 1.4 0 010 2.426l-.3.173v3.115A1.6 1.6 0 002.5 14.1h11a1.6 1.6 0 001.6-1.6V9.387l-.3-.173a1.4 1.4 0 010-2.426l.3-.173V3.5a1.6 1.6 0 00-1.6-1.6h-11zm9.174 4.274l-4 4a.6.6 0 01-.848 0l-2.5-2.5.848-.848L7.25 8.902l3.576-3.576.848.848z" fill="currentColor" /></svg></span>;
});
CouponCheckFill.displayName = "CouponCheckFill";
export default CouponCheckFill;