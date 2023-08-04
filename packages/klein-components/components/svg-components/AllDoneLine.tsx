import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const AllDoneLine = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-allDoneLine`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M13.5 3.6h-11V2.4h11v1.2zm0 5h-11V7.4h11v1.2zm.424 1.824l-4 4a.6.6 0 01-.848 0l-2-2 .848-.848L9.5 13.15l3.576-3.575.848.848zM5.5 13.6h-3v-1.2h3v1.2z" fill="currentColor" /></svg></span>;
});
AllDoneLine.displayName = "AllDoneLine";
export default AllDoneLine;