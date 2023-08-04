import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const OrderReturnLine = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-orderReturnLine`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" ><g fill="currentColor" fillRule="nonzero"><path d="M2.38 3.662A7.1 7.1 0 11.9 8h1.2a5.9 5.9 0 10.662-2.719.6.6 0 01-1.096-.071l-.73-2.003v-.001l1.128-.411.315.867z" /><path d="M6.664 5.706A12.12 12.12 0 005.152 4.3l-.726.69c.545.436 1.055.9 1.487 1.45l.751-.735zM6.37 6.86H4.358v.972h1.028v1.922c-.463.28-.798.823-1.079 1.275l.767.708c.179-.313.355-.636.581-.917a.81.81 0 01.214-.201c.016.001.068.018.166.136l.003.004c.245.276.528.477.868.579l.007.001c.329.08.748.127 1.246.134 1.091.017 2.182.016 3.273.016l.265-1.032c-1.267.09-2.54.075-3.808.052a3.037 3.037 0 01-.797-.116c.813-.136 1.62-.296 2.417-.504l-.2-.809c.592.408 1.136.87 1.64 1.383l.64-.769c-.299-.29-.608-.566-.939-.819.223-.215.429-.446.63-.682l-.525-.399h.281V4.533H6.96v4.83c0 .115-.192.154-.282.187l.186.74c-.19-.123-.33-.294-.495-.45V6.86zM8.14 8.36c.346.197.688.4 1.02.62-.394.115-.791.214-1.193.294V7.795h.636l-.462.564zm1.734-.043a13.939 13.939 0 00-.838-.521h1.332a6.545 6.545 0 01-.494.52zm-1.907-2.6v-.242h2.056v.242H7.966zm0 1.138v-.242h2.056v.242H7.966z" /></g></svg></span>;
});
OrderReturnLine.displayName = "OrderReturnLine";
export default OrderReturnLine;