import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const ShoppingCartLine = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-shoppingCartLine`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M1.25 2.85h.676a.4.4 0 01.392.324l1.436 7.381a1.6 1.6 0 001.57 1.295h6.43a1.6 1.6 0 001.533-1.146l1.408-4.75A1.6 1.6 0 0013.16 3.9H3.682l-.186-.955a1.6 1.6 0 00-1.57-1.295H1.25v1.2zm3.682 7.476L3.915 5.1h9.246a.4.4 0 01.383.514l-1.407 4.75a.4.4 0 01-.384.286H5.324a.4.4 0 01-.392-.324zM4 14.25a1 1 0 100-2 1 1 0 000 2zm8.5 0a1 1 0 100-2 1 1 0 000 2z" fill="currentColor" /></svg></span>;
});
ShoppingCartLine.displayName = "ShoppingCartLine";
export default ShoppingCartLine;