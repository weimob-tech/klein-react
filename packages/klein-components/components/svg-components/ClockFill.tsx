import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const ClockFill = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-clockFill`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" ><path d="M8 .9a7.1 7.1 0 110 14.2A7.1 7.1 0 018 .9zm.6 3.6H7.4v3.749l2.676 2.675.848-.848L8.6 7.75V4.5z" fill="currentColor" fillRule="nonzero" /></svg></span>;
});
ClockFill.displayName = "ClockFill";
export default ClockFill;