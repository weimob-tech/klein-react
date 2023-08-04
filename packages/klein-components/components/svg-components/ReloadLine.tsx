import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const ReloadLine = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-reloadLine`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" ><path d="M10.447 2.631a5.9 5.9 0 103.345 6.495l1.178.229A7.1 7.1 0 1113.9 4.05V2.5h1.2v3a.6.6 0 01-.6.6h-3V4.9h1.52a5.9 5.9 0 00-2.573-2.269z" fill="currentColor" fillRule="nonzero" /></svg></span>;
});
ReloadLine.displayName = "ReloadLine";
export default ReloadLine;