import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const DoubleLeftLine = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-doubleLeftLine`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M3.348 8l5.576-5.576-.848-.848-6 6a.6.6 0 000 .848l6 6 .848-.848L3.348 8zm5 0l5.576-5.576-.848-.848-6 6a.6.6 0 000 .848l6 6 .848-.848L8.348 8z" fill="currentColor" /></svg></span>;
});
DoubleLeftLine.displayName = "DoubleLeftLine";
export default DoubleLeftLine;