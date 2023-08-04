import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const UnfoldFill = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-unfoldFill`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" ><defs><filter id="prefix__a"><feColorMatrix in="SourceGraphic" values="0 0 0 0 0.120000 0 0 0 0 0.125000 0 0 0 0 0.150000 0 0 0 1.000000 0" /></filter></defs><g fill="none" fillRule="evenodd"><rect x={0.5} y={0.5} width={15} height={15} rx={2} fill="#FFF" stroke="#E1E2E6" /><g transform="translate(2 2)" filter="url(#prefix__a)"><path d="M0 0h12v12H0z" /><path fill="currentColor" d="M6.375 1.5v4.125H10.5v.75H6.375V10.5h-.75V6.375H1.5v-.75h4.125V1.5z" /></g></g></svg></span>;
});
UnfoldFill.displayName = "UnfoldFill";
export default UnfoldFill;