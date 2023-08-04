import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const FontColorsLine = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-fontColorsLine`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M6.838 1.4L2.75 11.75h1.5L5.354 8.6h5.292l1.104 3.15h1.5L9.162 1.4H6.838zm3.346 6H5.816l1.846-4.8h.676l1.846 4.8zM13 14.6H3v-1.2h10v1.2z" fill="currentColor" /></svg></span>;
});
FontColorsLine.displayName = "FontColorsLine";
export default FontColorsLine;