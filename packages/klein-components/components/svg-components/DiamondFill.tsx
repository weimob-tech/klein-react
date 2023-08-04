import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const DiamondFill = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-diamondFill`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M4.04 1.65a1.1 1.1 0 00-.955.554L.42 6.871a1.1 1.1 0 00.177 1.323l6.626 6.627a1.1 1.1 0 001.556 0l6.626-6.627a1.1 1.1 0 00.178-1.323l-2.667-4.667a1.1 1.1 0 00-.955-.554H4.04zM12 7.6H4V6.4h8v1.2z" fill="currentColor" /></svg></span>;
});
DiamondFill.displayName = "DiamondFill";
export default DiamondFill;