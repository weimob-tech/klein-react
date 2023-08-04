import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const TrophyLine = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-trophyLine`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M3.4 2.25a.6.6 0 01.6-.6h8a.6.6 0 01.6.6v.9h.65a1.6 1.6 0 011.6 1.6V6.5a2.85 2.85 0 01-2.755 2.848A4.604 4.604 0 018.6 11.811v1.339H11v1.2H5v-1.2h2.4v-1.339a4.604 4.604 0 01-3.495-2.463A2.85 2.85 0 011.15 6.5V4.75a1.6 1.6 0 011.6-1.6h.65v-.9zm8 5V2.85H4.6v4.4a3.4 3.4 0 106.8 0zm1.2-2.9V8.038A1.65 1.65 0 0013.65 6.5V4.75a.4.4 0 00-.4-.4h-.65zm-9.85 0a.4.4 0 00-.4.4V6.5c0 .7.435 1.297 1.05 1.538V4.35h-.65z" fill="currentColor" /></svg></span>;
});
TrophyLine.displayName = "TrophyLine";
export default TrophyLine;