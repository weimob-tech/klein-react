import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const RemindFill = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-remindFill`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M2.65 6.5a5.35 5.35 0 0110.7 0v2.84l.92 1.612a.6.6 0 01-.188.798H1.918a.598.598 0 01-.189-.798l.92-1.611V6.5zm2.798 6.25a2.6 2.6 0 005.104 0H5.448z" fill="currentColor" /></svg></span>;
});
RemindFill.displayName = "RemindFill";
export default RemindFill;