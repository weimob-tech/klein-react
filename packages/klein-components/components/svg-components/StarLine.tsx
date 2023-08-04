import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const StarLine = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-starLine`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M7.169 1.436c.307-.74 1.355-.74 1.662 0L10.397 5.2l4.065.326c.798.064 1.121 1.06.514 1.58L11.878 9.76l.947 3.967c.185.778-.662 1.394-1.345.977L8 12.578l-3.48 2.126c-.683.417-1.53-.199-1.345-.977l.947-3.967-3.097-2.653c-.608-.52-.285-1.516.513-1.58L5.603 5.2l1.566-3.765zM8 2.562L6.64 5.831a.9.9 0 01-.758.551l-3.529.283 2.688 2.303a.9.9 0 01.29.892l-.821 3.444 3.02-1.845a.9.9 0 01.94 0l3.02 1.845-.821-3.444a.9.9 0 01.29-.892l2.688-2.303-3.529-.283a.9.9 0 01-.759-.551L8 2.562z" fill="currentColor" /></svg></span>;
});
StarLine.displayName = "StarLine";
export default StarLine;