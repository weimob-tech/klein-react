import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const PhoneFill = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-phoneFill`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M4.678 1.43a1.1 1.1 0 00-1.556 0L1.958 2.592a2.6 2.6 0 00-.55 2.863l.127.297a16.6 16.6 0 008.718 8.719l.298.128a2.6 2.6 0 002.863-.552l1.163-1.164a1.1 1.1 0 000-1.555l-2.121-2.122a1.1 1.1 0 00-1.556 0l-.778.779A7.877 7.877 0 016.02 5.885l.778-.779a1.1 1.1 0 000-1.555L4.678 1.429z" fill="currentColor" /></svg></span>;
});
PhoneFill.displayName = "PhoneFill";
export default PhoneFill;