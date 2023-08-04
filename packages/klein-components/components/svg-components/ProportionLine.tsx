import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const ProportionLine = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-proportionLine`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M3.5 12.5V4.75l-1 .5v-1l1.013-.75H4.5v9h-1zm8.25 0V4.75l-1 .5v-1l1.013-.75h.987v9h-1zM8 7.5A.75.75 0 108 6a.75.75 0 000 1.5zm0 3A.75.75 0 108 9a.75.75 0 000 1.5z" fill="currentColor" /></svg></span>;
});
ProportionLine.displayName = "ProportionLine";
export default ProportionLine;