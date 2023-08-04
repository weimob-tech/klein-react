import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const ClockAlarmFill = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-clockAlarmFill`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M3.576.576l-3 3 .848.848 3-3-.848-.848zm8 .848l3 3 .848-.848-3-3-.848.848zM8 1.4a6.6 6.6 0 00-4.59 11.342l-1.334 1.334.848.848L4.35 13.5A6.57 6.57 0 008 14.6a6.57 6.57 0 003.65-1.1l1.426 1.425.848-.848-1.333-1.334A6.6 6.6 0 008 1.4zM7.4 8V5h1.2V7.75l1.824 1.825-.848.848-2-2A.6.6 0 017.4 8z" fill="currentColor" /></svg></span>;
});
ClockAlarmFill.displayName = "ClockAlarmFill";
export default ClockAlarmFill;