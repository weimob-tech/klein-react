import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const FolderNewLine = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-folderNewLine`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M2.75 1.65a1.6 1.6 0 00-1.6 1.6v9.5a1.6 1.6 0 001.6 1.6H8v-1.2H2.75a.4.4 0 01-.4-.4V4.6h10.9c.22 0 .4.18.4.4v3h1.2V5a1.6 1.6 0 00-1.6-1.6H7.848l-.683-1.196a1.1 1.1 0 00-.955-.554H2.75zM6.466 3.4H2.35v-.15c0-.22.18-.4.4-.4h3.402l.314.55zm5.184 5.85v2.15H9.5v1.2h2.15v2.15h1.2V12.6H15v-1.2h-2.15V9.25h-1.2z" fill="currentColor" /></svg></span>;
});
FolderNewLine.displayName = "FolderNewLine";
export default FolderNewLine;