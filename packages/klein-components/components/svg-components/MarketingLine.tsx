import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const MarketingLine = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-marketingLine`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M3.9 3.25c0-1.16.94-2.1 2.1-2.1h.25c.695 0 1.32.302 1.75.782a2.344 2.344 0 011.75-.782H10a2.1 2.1 0 011.898 3H13a1.6 1.6 0 011.6 1.6v2a1.1 1.1 0 01-.75 1.043V13a1.6 1.6 0 01-1.6 1.6h-8.5a1.6 1.6 0 01-1.6-1.6V8.793A1.1 1.1 0 011.4 7.75v-2A1.6 1.6 0 013 4.15h1.102a2.092 2.092 0 01-.202-.9zm6.1 2.1H3a.4.4 0 00-.4.4v1.9h10.8v-1.9a.4.4 0 00-.4-.4h-3zm-2.6-1.2V3.5a1.15 1.15 0 00-1.15-1.15H6a.9.9 0 000 1.8h1.4zm2.6 0a.9.9 0 100-1.8h-.25A1.15 1.15 0 008.6 3.5v.65H10zm-6.65 4.7V13c0 .22.179.4.4.4h8.5a.4.4 0 00.4-.4V8.85h-9.3z" fill="currentColor" /></svg></span>;
});
MarketingLine.displayName = "MarketingLine";
export default MarketingLine;