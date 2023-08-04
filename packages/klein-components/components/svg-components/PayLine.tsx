import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const PayLine = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-payLine`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M.9 3.5a1.6 1.6 0 011.6-1.6h11a1.6 1.6 0 011.6 1.6v9a1.6 1.6 0 01-1.6 1.6h-11a1.6 1.6 0 01-1.6-1.6v-9zm1.6-.4a.4.4 0 00-.4.4v1.9h11.8V3.5a.4.4 0 00-.4-.4h-11zm11.4 3.5H2.1v5.9c0 .22.179.4.4.4h11a.4.4 0 00.4-.4V6.6zm-7.4 5h-3v-1.2h3v1.2z" fill="currentColor" /></svg></span>;
});
PayLine.displayName = "PayLine";
export default PayLine;