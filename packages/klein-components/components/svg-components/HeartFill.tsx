import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const HeartFill = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-heartFill`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M4.962 1.65C2.585 1.65.65 3.564.65 5.935c0 2.075 1.225 3.978 2.664 5.421 1.446 1.449 3.211 2.54 4.498 2.964a.6.6 0 00.376 0c1.287-.425 3.052-1.515 4.498-2.964 1.439-1.443 2.664-3.346 2.664-5.42 0-2.372-1.935-4.286-4.313-4.286A4.314 4.314 0 008 2.893 4.314 4.314 0 004.962 1.65z" fill="currentColor" /></svg></span>;
});
HeartFill.displayName = "HeartFill";
export default HeartFill;