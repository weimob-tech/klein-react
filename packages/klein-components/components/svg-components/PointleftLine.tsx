import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const PointleftLine = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-pointleftLine`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M4.431 8.8l3.135 3.134-1.132 1.132-4.5-4.5a.8.8 0 010-1.132l4.5-4.5 1.132 1.132L4.43 7.2H14v1.6H4.431z" fill="currentColor" /></svg></span>;
});
PointleftLine.displayName = "PointleftLine";
export default PointleftLine;