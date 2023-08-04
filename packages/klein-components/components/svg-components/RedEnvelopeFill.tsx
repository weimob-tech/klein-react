import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const RedEnvelopeFill = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-redEnvelopeFill`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M1.9 2.5A1.6 1.6 0 013.5.9h9a1.6 1.6 0 011.6 1.6v1.762l-.317.307c-.622.601-1.722 1.245-3.323 1.586a2.601 2.601 0 00-4.92 0C3.94 5.814 2.838 5.17 2.217 4.569L1.9 4.262V2.5zM8 9.6a2.6 2.6 0 01-2.576-2.244C3.91 7.053 2.731 6.497 1.9 5.871V13.5a1.6 1.6 0 001.6 1.6h9a1.6 1.6 0 001.6-1.6V5.871c-.831.626-2.01 1.182-3.524 1.485A2.6 2.6 0 018 9.6zm0-4.1a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" fill="currentColor" /></svg></span>;
});
RedEnvelopeFill.displayName = "RedEnvelopeFill";
export default RedEnvelopeFill;