import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const HiddenFill = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-hiddenFill`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M3.08 6.346C4.01 7.366 5.543 8.4 8 8.4s3.99-1.034 4.92-2.054c.47-.516.788-1.032.988-1.419a5.509 5.509 0 00.27-.607v-.004l.572.184.571.184v.003l-.002.005-.005.014a6.722 6.722 0 01-.34.773 7.918 7.918 0 01-.846 1.3l1.796 1.797-.848.848-1.77-1.769a7.261 7.261 0 01-2.42 1.462l.452 2.265-1.176.236-.436-2.18A8.954 8.954 0 018 9.6a8.954 8.954 0 01-1.726-.162l-.436 2.18-1.176-.236.453-2.265a7.262 7.262 0 01-2.422-1.462L.924 9.425l-.848-.85L1.872 6.78a7.916 7.916 0 01-.846-1.3 6.727 6.727 0 01-.34-.773l-.005-.014-.001-.005v-.002s-.001-.001.57-.185l.571-.184v-.001l.001.005.01.027.046.12c.044.109.114.267.214.46.2.387.518.903.988 1.419zM1.82 4.315zm12.36 0z" fill="currentColor" /></svg></span>;
});
HiddenFill.displayName = "HiddenFill";
export default HiddenFill;