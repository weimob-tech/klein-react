import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const ReplyFill = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-replyFill`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M2.75 1.65a1.6 1.6 0 00-1.6 1.6v8a1.6 1.6 0 001.6 1.6H11.5l1.471 1.47c.693.694 1.878.203 1.878-.777V3.25a1.6 1.6 0 00-1.6-1.6H2.75zM11 6.35H5v-1.2h6v1.2zm-2 3H5v-1.2h4v1.2z" fill="currentColor" /></svg></span>;
});
ReplyFill.displayName = "ReplyFill";
export default ReplyFill;