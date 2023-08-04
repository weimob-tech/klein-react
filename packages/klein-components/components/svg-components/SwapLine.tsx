import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const SwapLine = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-swapLine`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M12.15 5.4l-1.655-2.576 1.01-.648 2.25 3.5a.6.6 0 01-.505.924h-11V5.4h9.9zM2.21 9.738a.6.6 0 01.54-.338h11v1.2H3.984l1.988 2.53-.944.74-2.75-3.5a.6.6 0 01-.068-.632z" fill="currentColor" /></svg></span>;
});
SwapLine.displayName = "SwapLine";
export default SwapLine;