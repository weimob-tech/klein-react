import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const ThumbUpFill = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-thumbUpFill`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M8.34 1.25c-.375 0-.728.183-.945.49L4.592 5.712A.5.5 0 004.5 6v8a.5.5 0 00.5.5h6.34a2.5 2.5 0 002.457-2.04l.75-4A2.5 2.5 0 0012.09 5.5H9.631l.476-2.02A1.814 1.814 0 008.34 1.25zM2.5 5.5a1 1 0 00-1 1v7a1 1 0 001 1H3a.5.5 0 00.5-.5V6a.5.5 0 00-.5-.5h-.5z" fill="currentColor" /></svg></span>;
});
ThumbUpFill.displayName = "ThumbUpFill";
export default ThumbUpFill;