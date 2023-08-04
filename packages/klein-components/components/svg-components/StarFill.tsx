import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const StarFill = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-starFill`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M8.831 1.436c-.307-.74-1.355-.74-1.662 0L5.603 5.2l-4.065.326c-.798.064-1.121 1.06-.513 1.58L4.122 9.76l-.947 3.967c-.185.779.662 1.394 1.345.977L8 12.578l3.48 2.126c.683.417 1.53-.199 1.345-.977l-.946-3.967 3.097-2.653c.607-.52.284-1.516-.514-1.58L10.397 5.2 8.831 1.436z" fill="currentColor" /></svg></span>;
});
StarFill.displayName = "StarFill";
export default StarFill;