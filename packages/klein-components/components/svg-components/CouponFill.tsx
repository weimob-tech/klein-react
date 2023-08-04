import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const CouponFill = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-couponFill`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path fillRule="evenodd" clipRule="evenodd" d="M2.5 1.9A1.6 1.6 0 00.9 3.5v3.114l.3.173a1.4 1.4 0 010 2.426l-.3.173v3.115A1.6 1.6 0 002.5 14.1h11a1.6 1.6 0 001.6-1.6V9.387l-.3-.173a1.4 1.4 0 010-2.426l.3-.173V3.5a1.6 1.6 0 00-1.6-1.6h-11zM11 7.1H5V5.9h6v1.2zm-2 3H5V8.9h4v1.2z" fill="currentColor" /></svg></span>;
});
CouponFill.displayName = "CouponFill";
export default CouponFill;