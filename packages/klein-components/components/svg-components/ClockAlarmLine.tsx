import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const ClockAlarmLine = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-clockAlarmLine`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M.576 3.576l3-3 .848.848-3 3-.848-.848zm14 .848l-3-3 .848-.848 3 3-.848.848zM8 2.6a5.4 5.4 0 100 10.8A5.4 5.4 0 008 2.6zM1.4 8a6.6 6.6 0 1111.19 4.742l1.334 1.334-.848.848L11.65 13.5A6.57 6.57 0 018 14.6a6.57 6.57 0 01-3.65-1.1l-1.426 1.424-.848-.848 1.333-1.334A6.58 6.58 0 011.4 8zm6 0V5h1.2v2.751l1.824 1.825-.848.848-2-2A.6.6 0 017.4 8z" fill="currentColor" /></svg></span>;
});
ClockAlarmLine.displayName = "ClockAlarmLine";
export default ClockAlarmLine;