import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const ArrowDownFill = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-arrowDownFill`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M4.339 6.977A.8.8 0 014.94 5.65h6.118a.8.8 0 01.602 1.327l-3.059 3.496a.8.8 0 01-1.204 0l-3.06-3.496z" fill="currentColor" /></svg></span>;
});
ArrowDownFill.displayName = "ArrowDownFill";
export default ArrowDownFill;