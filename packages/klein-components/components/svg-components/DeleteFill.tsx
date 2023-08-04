import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const DeleteFill = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-deleteFill`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M5.5 1.15a1.1 1.1 0 00-1.1 1.1v1.4H1.75v1.2h.65v8.4a1.6 1.6 0 001.6 1.6h8a1.6 1.6 0 001.6-1.6v-8.4h.65v-1.2H11.6v-1.4a1.1 1.1 0 00-1.1-1.1h-5zm4.9 2.5H5.6v-1.3h4.8v1.3zM5.65 12V6.5h1.2V12h-1.2zm3.5 0V6.5h1.2V12h-1.2z" fill="currentColor" /></svg></span>;
});
DeleteFill.displayName = "DeleteFill";
export default DeleteFill;