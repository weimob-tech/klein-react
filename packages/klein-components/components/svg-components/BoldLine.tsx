import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const BoldLine = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-boldLine`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M3.4 1.4v13.2h5.646c1.972 0 3.554-1.62 3.554-3.6A3.603 3.603 0 0010.4 7.67 3.571 3.571 0 0011.6 5c0-1.995-1.636-3.6-3.638-3.6H3.4zm1.2 7.2h4.446c1.291 0 2.354 1.066 2.354 2.4 0 1.334-1.063 2.4-2.354 2.4H4.6V8.6zm3.363-1.2H4.6V2.6h3.362C9.315 2.6 10.4 3.682 10.4 5c0 1.318-1.084 2.4-2.437 2.4z" fill="currentColor" /></svg></span>;
});
BoldLine.displayName = "BoldLine";
export default BoldLine;