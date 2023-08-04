import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const PointUpLine = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-pointUpLine`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M7.2 4.431L4.066 7.566 2.934 6.434l4.5-4.5a.8.8 0 011.132 0l4.5 4.5-1.132 1.132L8.8 4.43V14H7.2V4.431z" fill="currentColor" /></svg></span>;
});
PointUpLine.displayName = "PointUpLine";
export default PointUpLine;