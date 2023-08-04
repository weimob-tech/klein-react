import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const OrderForGoodsLine = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-orderForGoodsLine`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M3.5 3.1h.904c.05.56.522 1 1.096 1h5a1.1 1.1 0 001.095-1h.905c.22 0 .4.18.4.4v10a.4.4 0 01-.4.4h-9a.4.4 0 01-.4-.4v-10c0-.22.179-.4.4-.4zm9-1.2h-.905A1.1 1.1 0 0010.5.9h-5a1.1 1.1 0 00-1.096 1H3.5a1.6 1.6 0 00-1.6 1.6v10a1.6 1.6 0 001.6 1.6h9a1.6 1.6 0 001.6-1.6v-10a1.6 1.6 0 00-1.6-1.6zm-6.9.2h4.8v.8H5.6v-.8zm-.6 5h6V5.9H5v1.2zm0 3h5V8.9H5v1.2z" fill="currentColor" /></svg></span>;
});
OrderForGoodsLine.displayName = "OrderForGoodsLine";
export default OrderForGoodsLine;