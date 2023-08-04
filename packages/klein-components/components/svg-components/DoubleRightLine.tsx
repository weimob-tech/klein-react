import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const DoubleRightLine = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-doubleRightLine`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M2.924 1.576l6 6a.6.6 0 010 .848l-6 6-.848-.848L7.65 8 2.076 2.424l.848-.848zm5 0l6 6a.6.6 0 010 .848l-6 6-.848-.848L12.65 8 7.076 2.424l.848-.848z" fill="currentColor" /></svg></span>;
});
DoubleRightLine.displayName = "DoubleRightLine";
export default DoubleRightLine;