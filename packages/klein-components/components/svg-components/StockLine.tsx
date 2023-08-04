import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const StockLine = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-stockLine`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M.9 3A1.1 1.1 0 012 1.9h12A1.1 1.1 0 0115.1 3v2.5a1.1 1.1 0 01-.75 1.043V13a1.1 1.1 0 01-1.1 1.1H2.75a1.1 1.1 0 01-1.1-1.1V6.543A1.1 1.1 0 01.9 5.5V3zm1.95 3.6v6.3h10.3V6.6H2.85zM13.9 5.4V3.1H2.1v2.3h11.8zM6.5 9.1h3V7.9h-3v1.2z" fill="currentColor" /></svg></span>;
});
StockLine.displayName = "StockLine";
export default StockLine;