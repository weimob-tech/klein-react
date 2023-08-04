import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const PointRightLine = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-pointRightLine`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M11.569 7.2L8.434 4.066l1.132-1.132 4.5 4.5a.8.8 0 010 1.132l-4.5 4.5-1.132-1.132L11.57 8.8H2V7.2h9.569z" fill="currentColor" /></svg></span>;
});
PointRightLine.displayName = "PointRightLine";
export default PointRightLine;