import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const OrderFill = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-orderFill`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M4 1.9h-.5a1.6 1.6 0 00-1.6 1.6v10a1.6 1.6 0 001.6 1.6h9a1.6 1.6 0 001.6-1.6v-10a1.6 1.6 0 00-1.6-1.6H12v.6A1.5 1.5 0 0110.5 4h-5A1.5 1.5 0 014 2.5v-.6zm1-.4a.5.5 0 01.5-.5h5a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-5a.5.5 0 01-.5-.5v-1zm0 5.6V5.9h6v1.2H5zm0 3V8.9h5v1.2H5z" fill="currentColor" /></svg></span>;
});
OrderFill.displayName = "OrderFill";
export default OrderFill;