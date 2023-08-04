import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const FolderOpenLine = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-folderOpenLine`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M2.75 1.65a1.6 1.6 0 00-1.6 1.6v9.5a1.6 1.6 0 001.6 1.6h9.232a1.6 1.6 0 001.546-1.188l1.466-5.5a1.6 1.6 0 00-1.546-2.012h-.098V5a1.6 1.6 0 00-1.6-1.6H7.848l-.683-1.196a1.1 1.1 0 00-.955-.554H2.75zm9.4 4H4.294a1.6 1.6 0 00-1.559 1.236L2.35 8.538V3.25c0-.22.18-.4.4-.4h3.402l.827 1.448.173.302h4.598c.22 0 .4.18.4.4v.65zm-9.14 7.5a.4.4 0 01-.39-.49l1.284-5.5a.4.4 0 01.39-.31h9.154a.4.4 0 01.387.503l-1.467 5.5a.4.4 0 01-.386.297H3.01z" fill="currentColor" /></svg></span>;
});
FolderOpenLine.displayName = "FolderOpenLine";
export default FolderOpenLine;