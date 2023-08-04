import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const CloseLine = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-closeLine`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M7.151 8L2.576 3.424l.848-.848L8 7.15l4.576-4.575.848.848L8.848 8l4.576 4.576-.848.848L8 8.85l-4.576 4.575-.848-.848L7.15 8z" fill="currentColor" /></svg></span>;
});
CloseLine.displayName = "CloseLine";
export default CloseLine;