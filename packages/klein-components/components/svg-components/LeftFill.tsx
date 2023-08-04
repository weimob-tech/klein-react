import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const LeftFill = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-leftFill`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M8 1a7 7 0 100 14A7 7 0 008 1zM5.576 7.576l3.5-3.5.848.848L6.85 8l3.075 3.076-.848.848-3.5-3.5a.6.6 0 010-.848z" fill="currentColor" /></svg></span>;
});
LeftFill.displayName = "LeftFill";
export default LeftFill;