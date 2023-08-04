import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const ExportLine = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-exportLine`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M7.4 9.051V1.5h1.2v7.551l2.976-2.975.848.848-4 4a.6.6 0 01-.848 0l-4-4 .848-.848L7.4 9.05zM1.4 13v-2h1.2v2c0 .22.179.4.4.4h10a.4.4 0 00.4-.4v-2h1.2v2a1.6 1.6 0 01-1.6 1.6H3A1.6 1.6 0 011.4 13z" fill="currentColor" /></svg></span>;
});
ExportLine.displayName = "ExportLine";
export default ExportLine;