import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const UnderLineLine = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-underLineLine`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M4.35 7V1.4h-1.2V7c0 2.76 2.178 4.85 4.85 4.85 2.672 0 4.85-2.09 4.85-4.85V1.4h-1.2V7c0 2.084-1.627 3.65-3.65 3.65-2.023 0-3.65-1.566-3.65-3.65zM3 14.6h10v-1.2H3v1.2z" fill="currentColor" /></svg></span>;
});
UnderLineLine.displayName = "UnderLineLine";
export default UnderLineLine;