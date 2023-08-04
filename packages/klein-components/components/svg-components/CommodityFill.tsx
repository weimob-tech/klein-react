import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const CommodityFill = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-commodityFill`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M3.46 1.4a1.6 1.6 0 00-1.6 1.533l-.416 10A1.6 1.6 0 003.043 14.6h9.915a1.6 1.6 0 001.598-1.667l-.416-10a1.6 1.6 0 00-1.6-1.533H3.46zM8 7.6a3.1 3.1 0 01-3.1-3.1h1.2a1.9 1.9 0 103.8 0h1.2A3.1 3.1 0 018 7.6z" fill="currentColor" /></svg></span>;
});
CommodityFill.displayName = "CommodityFill";
export default CommodityFill;