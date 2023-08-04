import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const ShareCircleFill = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-shareCircleFill`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M8 15.2A7.1 7.1 0 108 1a7.1 7.1 0 000 14.2zM9.23 5.026l2.74 2.398a.5.5 0 010 .752l-2.74 2.398a.5.5 0 01-.83-.376V9.24c-1.518-.314-3.413.188-4.589.903-.225.137-.564-.086-.456-.326C3.949 8.483 5.389 6.273 8.4 6.3v-.898a.5.5 0 01.83-.376z" fill="currentColor" /></svg></span>;
});
ShareCircleFill.displayName = "ShareCircleFill";
export default ShareCircleFill;