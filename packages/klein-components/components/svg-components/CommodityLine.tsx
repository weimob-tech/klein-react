import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const CommodityLine = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-commodityLine`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M6.1 4v.4h3.8V4a1.9 1.9 0 00-3.8 0zM4.9 5.6H3a.4.4 0 00-.4.4v7c0 .22.18.4.4.4h10a.4.4 0 00.4-.4V6a.4.4 0 00-.4-.4h-1.9v1.9H9.9V5.6H6.1v1.9H4.9V5.6zm0-1.2V4a3.1 3.1 0 016.2 0v.4H13A1.6 1.6 0 0114.6 6v7a1.6 1.6 0 01-1.6 1.6H3A1.6 1.6 0 011.4 13V6A1.6 1.6 0 013 4.4h1.9z" fill="currentColor" /></svg></span>;
});
CommodityLine.displayName = "CommodityLine";
export default CommodityLine;