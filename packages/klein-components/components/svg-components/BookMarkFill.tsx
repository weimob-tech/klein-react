import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const BookMarkFill = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-bookMarkFill`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M4 1.4A1.6 1.6 0 002.4 3v10.829a1.1 1.1 0 001.7.922L8 12.216l3.9 2.535a1.1 1.1 0 001.7-.922V3A1.6 1.6 0 0012 1.4H4z" fill="currentColor" /></svg></span>;
});
BookMarkFill.displayName = "BookMarkFill";
export default BookMarkFill;