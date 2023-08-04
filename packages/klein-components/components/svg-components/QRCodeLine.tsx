import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const QRCodeLine = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-qRCodeLine`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M1.65 2.75a1.1 1.1 0 011.1-1.1h3.5a1.1 1.1 0 011.1 1.1v3.5a1.1 1.1 0 01-1.1 1.1h-3.5a1.1 1.1 0 01-1.1-1.1v-3.5zm1.2.1v3.3h3.3v-3.3h-3.3zm5.8-.1a1.1 1.1 0 011.1-1.1h3.5a1.1 1.1 0 011.1 1.1v3.5a1.1 1.1 0 01-1.1 1.1h-3.5a1.1 1.1 0 01-1.1-1.1v-3.5zm1.2.1v3.3h3.3v-3.3h-3.3zm-7.1 5.8a1.1 1.1 0 00-1.1 1.1v3.5a1.1 1.1 0 001.1 1.1h3.5a1.1 1.1 0 001.1-1.1v-3.5a1.1 1.1 0 00-1.1-1.1h-3.5zm.1 4.5v-3.3h3.3v3.3h-3.3zm6.55.6V9.5h1.2v4.25H9.4zm3.25-4.25v4.25h1.2V9.5h-1.2z" fill="currentColor" /></svg></span>;
});
QRCodeLine.displayName = "QRCodeLine";
export default QRCodeLine;