import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const SortLine = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-sortLine`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M10 3.6H1.5V2.4H10v1.2zm3.1 7.152V3.5h-1.2V12a.6.6 0 00.975.469l2.5-2-.75-.938-1.525 1.22zM10 8.6H1.5V7.4H10v1.2zm0 5H1.5v-1.2H10v1.2z" fill="currentColor" /></svg></span>;
});
SortLine.displayName = "SortLine";
export default SortLine;