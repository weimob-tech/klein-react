import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const Commodity02Line = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-commodity02Line`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M1.86 2.933A1.6 1.6 0 013.46 1.4h9.08a1.6 1.6 0 011.6 1.533l.416 10a1.6 1.6 0 01-1.598 1.667H3.043a1.6 1.6 0 01-1.599-1.667l.417-10zm1.6-.333a.4.4 0 00-.4.383l-.417 10a.4.4 0 00.4.417h9.915a.4.4 0 00.4-.417l-.417-10a.4.4 0 00-.4-.383H3.459zM8 7.6a3.1 3.1 0 01-3.1-3.1h1.2a1.9 1.9 0 003.8 0h1.2A3.1 3.1 0 018 7.6z" fill="currentColor" /></svg></span>;
});
Commodity02Line.displayName = "Commodity02Line";
export default Commodity02Line;