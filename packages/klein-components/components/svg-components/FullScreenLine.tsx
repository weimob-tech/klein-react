import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const FullScreenLine = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-fullScreenLine`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M1.4 2a.6.6 0 01.6-.6h4v1.2H2.6V6H1.4V2zm11.151.6H10V1.4h4a.6.6 0 01.6.6v4h-1.2V3.449L9.924 6.924l-.848-.848L12.55 2.6zM6.924 9.924L3.448 13.4H6v1.2H2a.6.6 0 01-.6-.6v-4h1.2v2.552l3.476-3.476.848.848zM14.6 10v4a.6.6 0 01-.6.6h-4v-1.2h3.4V10h1.2z" fill="currentColor" /></svg></span>;
});
FullScreenLine.displayName = "FullScreenLine";
export default FullScreenLine;