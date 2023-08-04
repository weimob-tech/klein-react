import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const CrownFill = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-crownFill`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M8.52 1.202a.6.6 0 00-1.041 0L4.761 5.96 1.768 4.463a.6.6 0 00-.864.603l1 9a.6.6 0 00.596.534h11a.6.6 0 00.596-.534l1-9a.6.6 0 00-.864-.603L11.239 5.96 8.521 1.202zM7.626 11.47l-2.5-2 .75-.938L8 10.231l2.125-1.7.75.938-2.5 2a.6.6 0 01-.75 0z" fill="currentColor" /></svg></span>;
});
CrownFill.displayName = "CrownFill";
export default CrownFill;