import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const PrinterLine = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-printerLine`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M3.4 2.5a1.1 1.1 0 011.1-1.1h7a1.1 1.1 0 011.1 1.1v1.9h.4A1.6 1.6 0 0114.6 6v4a1.6 1.6 0 01-1.6 1.6h-.4v1.9a1.1 1.1 0 01-1.1 1.1h-7a1.1 1.1 0 01-1.1-1.1v-1.9H3A1.6 1.6 0 011.4 10V6A1.6 1.6 0 013 4.4h.4V2.5zM3 5.6a.4.4 0 00-.4.4v4c0 .22.179.4.4.4h.4v-.9a1.1 1.1 0 011.1-1.1h7a1.1 1.1 0 011.1 1.1v.9h.4a.4.4 0 00.4-.4V6a.4.4 0 00-.4-.4H3zm8.4-1.2V2.6H4.6v1.8h6.8zM4.6 9.6v3.8h6.8V9.6H4.6z" fill="currentColor" /></svg></span>;
});
PrinterLine.displayName = "PrinterLine";
export default PrinterLine;