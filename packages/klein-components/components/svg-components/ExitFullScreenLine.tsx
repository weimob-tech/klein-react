import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const ExitFullScreenLine = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-exitFullScreenLine`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M1.4 2a.6.6 0 01.6-.6h4v1.2H2.6V6H1.4V2zm13.024.424L10.948 5.9H13.5v1.2h-4a.6.6 0 01-.6-.6v-4h1.2v2.551l3.476-3.475.848.848zM5.051 10.1H2.5V8.9h4a.6.6 0 01.6.6v4H5.9v-2.552l-3.476 3.476-.848-.848L5.05 10.1zM14.6 10v4a.6.6 0 01-.6.6h-4v-1.2h3.4V10h1.2z" fill="currentColor" /></svg></span>;
});
ExitFullScreenLine.displayName = "ExitFullScreenLine";
export default ExitFullScreenLine;