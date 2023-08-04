import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const UploadLine = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-uploadLine`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M8.6 10.5V2.949l2.976 2.975.848-.848-4-4a.6.6 0 00-.848 0l-4 4 .848.848L7.4 2.95V10.5h1.2zm-7.2.5v2A1.6 1.6 0 003 14.6h10a1.6 1.6 0 001.6-1.6v-2h-1.2v2a.4.4 0 01-.4.4H3a.4.4 0 01-.4-.4v-2H1.4z" fill="currentColor" /></svg></span>;
});
UploadLine.displayName = "UploadLine";
export default UploadLine;