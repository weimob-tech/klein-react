import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const MoneyLine = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-moneyLine`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" ><path d="M8 .9a7.1 7.1 0 110 14.2A7.1 7.1 0 018 .9zm0 1.2a5.9 5.9 0 100 11.8A5.9 5.9 0 008 2.1zm1.576 2.476l.848.848L8.95 6.9H10.5v1.2H8.6v.8h1.9v1.2H8.6v1.4H7.4v-1.4H5.5V8.9h1.9v-.8H5.5V6.9h1.551L5.576 5.424l.848-.848L8 6.15l1.576-1.575z" fill="currentColor" fillRule="nonzero" /></svg></span>;
});
MoneyLine.displayName = "MoneyLine";
export default MoneyLine;