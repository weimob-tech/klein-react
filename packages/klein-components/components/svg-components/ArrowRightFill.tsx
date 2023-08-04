import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const ArrowRightFill = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-arrowRightFill`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M6.977 4.339a.8.8 0 00-1.327.602v6.118a.8.8 0 001.327.602l3.496-3.059a.8.8 0 000-1.204l-3.496-3.06z" fill="currentColor" /></svg></span>;
});
ArrowRightFill.displayName = "ArrowRightFill";
export default ArrowRightFill;