import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const CleanLine = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-cleanLine`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M11.829 1.697a1 1 0 011.414 0l1.06 1.06a1 1 0 010 1.415L12.005 6.47l2.475 2.475a1 1 0 010 1.414l-1.414 1.414a.999.999 0 01-.849.283l-2.793 2.793a1.6 1.6 0 01-2.262 0l-6.01-6.01a1.6 1.6 0 010-2.263l2.792-2.793a.998.998 0 01.283-.849L5.641 1.52a1 1 0 011.415 0L9.53 3.995l2.299-2.298zm1.944 7.955L10.591 6.47l3.005-3.006-1.06-1.06L9.53 5.409 6.348 2.227 5.005 3.571l7.425 7.424 1.343-1.343zM4.581 4.843L2 7.424a.4.4 0 000 .566l.813.813L4.687 6.93l.848.849-1.874 1.874.92.919 1.874-1.874.848.849-1.874 1.873.92.92 1.873-1.874.849.848-1.874 1.874.813.813a.4.4 0 00.566 0l2.58-2.58-6.575-6.577z" fill="currentColor" /></svg></span>;
});
CleanLine.displayName = "CleanLine";
export default CleanLine;