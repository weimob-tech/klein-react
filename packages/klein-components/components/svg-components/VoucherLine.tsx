import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const VoucherLine = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-voucherLine`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M.9 3.5a1.6 1.6 0 011.6-1.6h11a1.6 1.6 0 011.6 1.6v3.114l-.3.173a1.4 1.4 0 000 2.426l.3.173v3.115a1.6 1.6 0 01-1.6 1.599h-11a1.6 1.6 0 01-1.6-1.6V9.387l.3-.173a1.4 1.4 0 000-2.426l-.3-.173V3.5zm1.6-.4a.4.4 0 00-.4.4v2.45c.608.476 1 1.217 1 2.05 0 .833-.392 1.574-1 2.05v2.45c0 .221.178.4.4.4h11a.4.4 0 00.4-.4v-2.45a2.597 2.597 0 01-1-2.05c0-.833.392-1.574 1-2.05V3.5a.4.4 0 00-.4-.4h-11zm8.5 4H5V5.9h6v1.2zm-2 3H5V8.9h4v1.2z" fill="currentColor" /></svg></span>;
});
VoucherLine.displayName = "VoucherLine";
export default VoucherLine;