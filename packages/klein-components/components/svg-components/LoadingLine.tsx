import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const LoadingLine = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-loadingLine`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><g clipPath="url(#prefix__clip0_1206_32024)"><path d="M11.468 3.227A5.9 5.9 0 008 2.1V.9a7.1 7.1 0 11-6.753 4.906l1.142.37a5.9 5.9 0 109.079-2.95z" fill="currentColor" /></g><defs><clipPath id="prefix__clip0_1206_32024"><path fill="#fff" d="M0 0h16v16H0z" /></clipPath></defs></svg></span>;
});
LoadingLine.displayName = "LoadingLine";
export default LoadingLine;