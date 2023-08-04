import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const DateLine = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-dateLine`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M1.15 2.25v10.5a1.6 1.6 0 001.6 1.6h11.5v-1.2H2.75a.4.4 0 01-.4-.4V2.25h-1.2zm9.829 6.043l2.446-2.796.075.003a1 1 0 10-.979-.793l-2.446 2.796a1.012 1.012 0 00-.217.007L8.49 6.142a1 1 0 10-1.969.066L4.076 9.002a1 1 0 10.903.79l2.447-2.796a1.014 1.014 0 00.217-.007L9.01 8.358a1 1 0 101.969-.066z" fill="currentColor" /></svg></span>;
});
DateLine.displayName = "DateLine";
export default DateLine;