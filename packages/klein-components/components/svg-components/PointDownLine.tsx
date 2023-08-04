import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const PointDownLine = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-pointDownLine`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M8.8 11.569l3.134-3.135 1.132 1.132-4.5 4.5a.8.8 0 01-1.132 0l-4.5-4.5 1.132-1.132L7.2 11.57V2h1.6v9.569z" fill="currentColor" /></svg></span>;
});
PointDownLine.displayName = "PointDownLine";
export default PointDownLine;