import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const FolderLine = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-folderLine`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M1.15 3.25a1.6 1.6 0 011.6-1.6h3.46c.395 0 .76.212.955.554L7.848 3.4h5.402a1.6 1.6 0 011.6 1.6v7.75a1.6 1.6 0 01-1.6 1.6H2.75a1.6 1.6 0 01-1.6-1.6v-9.5zm5.316.15l-.314-.55H2.75a.4.4 0 00-.4.4v.15h4.116zM2.35 4.6v8.15c0 .22.18.4.4.4h10.5a.4.4 0 00.4-.4V5a.4.4 0 00-.4-.4H2.35z" fill="currentColor" /></svg></span>;
});
FolderLine.displayName = "FolderLine";
export default FolderLine;