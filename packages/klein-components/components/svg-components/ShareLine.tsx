import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const ShareLine = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-shareLine`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M1.4 3A1.6 1.6 0 013 1.4h4v1.2H3a.4.4 0 00-.4.4v10c0 .22.179.4.4.4h10a.4.4 0 00.4-.4V9h1.2v4a1.6 1.6 0 01-1.6 1.6H3A1.6 1.6 0 011.4 13V3zm10.651.1H9V1.9h4.5a.6.6 0 01.6.6V7h-1.2V3.949L7.424 9.424l-.848-.848L12.05 3.1z" fill="currentColor" /></svg></span>;
});
ShareLine.displayName = "ShareLine";
export default ShareLine;