import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const ThumbUpLine = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-thumbUpLine`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M8.34 1.15c-.408 0-.791.198-1.027.532L4.69 5.4h-2.19a1.1 1.1 0 00-1.1 1.1v7a1.1 1.1 0 001.1 1.1H11.34a2.6 2.6 0 002.556-2.12l.75-4A2.6 2.6 0 0012.09 5.4H9.757l.447-1.897A1.914 1.914 0 008.34 1.15zM4.4 13.4H2.6V6.6h1.8v6.8zm1.2 0V6.19l2.694-3.816a.057.057 0 01.046-.024c.461 0 .801.43.696.878l-.62 2.635A.6.6 0 009 6.6h3.09a1.4 1.4 0 011.376 1.658l-.75 4A1.4 1.4 0 0111.34 13.4H5.6z" fill="currentColor" /></svg></span>;
});
ThumbUpLine.displayName = "ThumbUpLine";
export default ThumbUpLine;