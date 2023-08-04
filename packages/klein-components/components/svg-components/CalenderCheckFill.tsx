import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const CalenderCheckFill = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-calenderCheckFill`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M4.9 1.25v.9H2.75a1.6 1.6 0 00-1.6 1.6v9a1.6 1.6 0 001.6 1.6h10.5a1.6 1.6 0 001.6-1.6v-9a1.6 1.6 0 00-1.6-1.6H11.1v-.9H9.9v.9H6.1v-.9H4.9zm6.774 5.674l-4 4a.6.6 0 01-.848 0l-2.5-2.5.848-.848L7.25 9.65l3.576-3.575.848.848z" fill="currentColor" /></svg></span>;
});
CalenderCheckFill.displayName = "CalenderCheckFill";
export default CalenderCheckFill;