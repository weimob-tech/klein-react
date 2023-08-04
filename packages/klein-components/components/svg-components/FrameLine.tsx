import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const FrameLine = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-frameLine`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M2.75 1.6A1.65 1.65 0 001.1 3.25v9.5c0 .911.739 1.65 1.65 1.65h10.5a1.65 1.65 0 001.65-1.65v-9.5a1.65 1.65 0 00-1.65-1.65H2.75zM2.4 3.25a.35.35 0 01.35-.35h10.5a.35.35 0 01.35.35v9.5a.35.35 0 01-.35.35H2.75a.35.35 0 01-.35-.35v-9.5zM4.5 5.6h7v1.3h-7V5.6zm0 3.5h5v1.3h-5V9.1z" fill="currentColor" /></svg></span>;
});
FrameLine.displayName = "FrameLine";
export default FrameLine;