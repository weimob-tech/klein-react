import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const WalletFill = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-walletFill`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M2.5 1.9A1.6 1.6 0 00.9 3.5v9a1.6 1.6 0 001.6 1.6h11a1.6 1.6 0 001.6-1.6v-9a1.6 1.6 0 00-1.6-1.6h-11zm11.4 8.7H11a2.6 2.6 0 110-5.2h2.9v1.2H11a1.4 1.4 0 000 2.8h2.9v1.2z" fill="currentColor" /></svg></span>;
});
WalletFill.displayName = "WalletFill";
export default WalletFill;