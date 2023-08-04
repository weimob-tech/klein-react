import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const ExpressionFill = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-expressionFill`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M8 .9a7.1 7.1 0 100 14.2A7.1 7.1 0 008 .9zM4.5 9h7c0 1.5-1 3.5-3.5 3.5s-3.5-2-3.5-3.5zm.65-4h1.2v2h-1.2V5zm4.5 2V5h1.2v2h-1.2z" fill="currentColor" /></svg></span>;
});
ExpressionFill.displayName = "ExpressionFill";
export default ExpressionFill;