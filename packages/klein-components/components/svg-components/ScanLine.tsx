import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const ScanLine = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-scanLine`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M1.9 3.5a1.6 1.6 0 011.6-1.6h2v1.2h-2a.4.4 0 00-.4.4v2H1.9v-2zm10.6-.4h-2V1.9h2a1.6 1.6 0 011.6 1.6v2h-1.2v-2a.4.4 0 00-.4-.4zM1.9 7.4h12.2v1.2H1.9V7.4zm1.2 3.1v2c0 .22.179.4.4.4h2v1.2h-2a1.6 1.6 0 01-1.6-1.6v-2h1.2zm9.8 2v-2h1.2v2a1.6 1.6 0 01-1.6 1.6h-2v-1.2h2a.4.4 0 00.4-.4z" fill="currentColor" /></svg></span>;
});
ScanLine.displayName = "ScanLine";
export default ScanLine;