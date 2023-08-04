import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const GiftFill = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-giftFill`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M3.9 3.25c0-1.16.94-2.1 2.1-2.1h.25c.695 0 1.32.302 1.75.782a2.344 2.344 0 011.75-.782H10a2.1 2.1 0 011.898 3H13a1.6 1.6 0 011.6 1.6v1.5a.45.45 0 01-.45.45H1.85a.45.45 0 01-.45-.445V5.75A1.6 1.6 0 013 4.15h1.102a2.092 2.092 0 01-.202-.9zm3.5.9V3.5a1.15 1.15 0 00-1.15-1.15H6a.9.9 0 000 1.8h1.4zm2.6 0a.9.9 0 100-1.8h-.25A1.15 1.15 0 008.6 3.5v.65H10zM2.15 8.8V13a1.6 1.6 0 001.6 1.6h8.5a1.6 1.6 0 001.6-1.6V8.8H2.15z" fill="currentColor" /></svg></span>;
});
GiftFill.displayName = "GiftFill";
export default GiftFill;