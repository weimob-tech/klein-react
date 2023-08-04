import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const WeChatMiniAppFill = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-weChatMiniAppFill`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M8 15A7 7 0 108 1a7 7 0 000 14zm3-6.88a2.25 2.25 0 01-1.25.38.5.5 0 010-1 1.25 1.25 0 00.244-2.475A1.249 1.249 0 008.5 6.25L8.5 9.75A2.25 2.25 0 116.25 7.5a.5.5 0 010 1 1.25 1.25 0 10.478 2.404 1.249 1.249 0 00.77-1.154l.002-3.5A2.25 2.25 0 1111 8.12z" fill="currentColor" /></svg></span>;
});
WeChatMiniAppFill.displayName = "WeChatMiniAppFill";
export default WeChatMiniAppFill;