import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const CalenderLine = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-calenderLine`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M4.9 2.15v-.9h1.2v.9h3.8v-.9h1.2v.9h2.15a1.6 1.6 0 011.6 1.6v9a1.6 1.6 0 01-1.6 1.6H2.75a1.6 1.6 0 01-1.6-1.6v-9a1.6 1.6 0 011.6-1.6H4.9zm0 1.2H2.75a.4.4 0 00-.4.4V5.9h11.3V3.75a.4.4 0 00-.4-.4H11.1v.9H9.9v-.9H6.1v.9H4.9v-.9zm8.75 3.75H2.35v5.65c0 .22.179.4.4.4h10.5a.4.4 0 00.4-.4V7.1z" fill="currentColor" /></svg></span>;
});
CalenderLine.displayName = "CalenderLine";
export default CalenderLine;