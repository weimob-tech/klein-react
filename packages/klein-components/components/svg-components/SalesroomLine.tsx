import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const SalesroomLine = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-salesroomLine`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M.9 3A1.1 1.1 0 012 1.9h12A1.1 1.1 0 0115.1 3v2.5a1.1 1.1 0 01-1 1.096V12.9h.9v1.2H1v-1.2h.9V6.596A1.1 1.1 0 01.9 5.5V3zm5.2 9.9h1.3v-2.8H6.1v2.8zm2.5-2.8v2.8h1.3v-2.8H8.6zm2.5 2.8h1.8V6.6H3.1v6.3h1.8V9.5a.6.6 0 01.6-.6h5a.6.6 0 01.6.6v3.4zm2.8-7.5V3.1H2.1v2.3h11.8z" fill="currentColor" /></svg></span>;
});
SalesroomLine.displayName = "SalesroomLine";
export default SalesroomLine;