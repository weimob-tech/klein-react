import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const ShoppingCartFill = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-shoppingCartFill`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M1.25 2.85h.676a.4.4 0 01.392.324l1.436 7.381a1.6 1.6 0 001.57 1.295h6.43a1.6 1.6 0 001.533-1.145l1.408-4.75A1.6 1.6 0 0013.16 3.9H3.682l-.186-.955a1.6 1.6 0 00-1.57-1.295H1.25v1.2zM5 13.25a1 1 0 11-2 0 1 1 0 012 0zm8.5 0a1 1 0 11-2 0 1 1 0 012 0z" fill="currentColor" /></svg></span>;
});
ShoppingCartFill.displayName = "ShoppingCartFill";
export default ShoppingCartFill;