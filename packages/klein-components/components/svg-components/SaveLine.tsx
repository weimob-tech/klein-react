import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const SaveLine = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-saveLine`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M2.5 1.4a1.1 1.1 0 00-1.1 1.1v11a1.1 1.1 0 001.1 1.1h11a1.1 1.1 0 001.1-1.1V5.207a1.1 1.1 0 00-.322-.778L11.57 1.722a1.1 1.1 0 00-.778-.322H2.5zm.1 12V2.6h1.3v1.9A1.1 1.1 0 005 5.6h5V4.4H5.1V2.6h5.651L13.4 5.249V13.4h-1.3V8.5A1.1 1.1 0 0011 7.4H5a1.1 1.1 0 00-1.1 1.1v4.9H2.6zm2.5 0V8.6h5.8v4.8H5.1z" fill="currentColor" /></svg></span>;
});
SaveLine.displayName = "SaveLine";
export default SaveLine;