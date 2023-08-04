import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const CopyLine = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-copyLine`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M1.65 11V3c0-1.16.94-2.1 2.1-2.1H9v1.2H3.75a.9.9 0 00-.9.9v8h-1.2zm3.6-7.6a1.1 1.1 0 00-1.1 1.1v9a1.1 1.1 0 001.1 1.1h7.25a1.1 1.1 0 001.1-1.1v-9a1.1 1.1 0 00-1.1-1.1H5.25zm.1 10V4.6h7.05v8.8H5.35z" fill="currentColor" /></svg></span>;
});
CopyLine.displayName = "CopyLine";
export default CopyLine;