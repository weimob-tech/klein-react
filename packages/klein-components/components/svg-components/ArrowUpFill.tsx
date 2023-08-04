import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const ArrowUpFill = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-arrowUpFill`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M11.661 9.023a.8.8 0 01-.602 1.327H4.941a.8.8 0 01-.602-1.327l3.059-3.496a.8.8 0 011.204 0l3.06 3.496z" fill="currentColor" /></svg></span>;
});
ArrowUpFill.displayName = "ArrowUpFill";
export default ArrowUpFill;