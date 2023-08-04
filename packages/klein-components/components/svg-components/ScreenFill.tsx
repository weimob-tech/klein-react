import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const ScreenFill = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-screenFill`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M3 1.4a1.1 1.1 0 00-1.1 1.1v1.543c0 .292.116.571.322.778L5.4 7.999v6.251a.6.6 0 00.745.582l4-1a.6.6 0 00.455-.582V7.999l3.178-3.178a1.1 1.1 0 00.322-.778V2.5A1.1 1.1 0 0013 1.4H3z" fill="currentColor" /></svg></span>;
});
ScreenFill.displayName = "ScreenFill";
export default ScreenFill;