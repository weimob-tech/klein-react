import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const DiamondLine = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-diamondLine`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M3.085 2.204a1.1 1.1 0 01.955-.554h7.92c.395 0 .76.212.955.554l2.667 4.667a1.1 1.1 0 01-.178 1.323l-6.626 6.627a1.1 1.1 0 01-1.556 0L.596 8.194a1.1 1.1 0 01-.177-1.323l2.666-4.667zm1.013.646l-2.6 4.55L8 13.902 14.502 7.4l-2.6-4.55H4.098zM12 7.6H4V6.4h8v1.2z" fill="currentColor" /></svg></span>;
});
DiamondLine.displayName = "DiamondLine";
export default DiamondLine;