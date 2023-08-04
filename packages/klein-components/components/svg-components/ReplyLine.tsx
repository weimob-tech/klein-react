import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const ReplyLine = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-replyLine`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M1.15 3.25a1.6 1.6 0 011.6-1.6h10.5a1.6 1.6 0 011.6 1.6v10.293c0 .98-1.185 1.47-1.878.778l-1.47-1.471H2.75a1.6 1.6 0 01-1.6-1.6v-8zm1.6-.4a.4.4 0 00-.4.4v8c0 .22.179.4.4.4h9.248l1.652 1.652V3.25a.4.4 0 00-.4-.4H2.75zM11 6.35H5v-1.2h6v1.2zm-2 3H5v-1.2h4v1.2z" fill="currentColor" /></svg></span>;
});
ReplyLine.displayName = "ReplyLine";
export default ReplyLine;