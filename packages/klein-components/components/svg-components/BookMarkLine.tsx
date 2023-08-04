import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const BookMarkLine = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-bookMarkLine`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M2.4 3A1.6 1.6 0 014 1.4h8A1.6 1.6 0 0113.6 3v10.829a1.1 1.1 0 01-1.7.922L8 12.216 4.1 14.75a1.1 1.1 0 01-1.7-.922V3zM4 2.6a.4.4 0 00-.4.4v10.644l4.073-2.647a.6.6 0 01.654 0l4.073 2.647V3a.4.4 0 00-.4-.4H4z" fill="currentColor" /></svg></span>;
});
BookMarkLine.displayName = "BookMarkLine";
export default BookMarkLine;