import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const IrrigationDitchLine = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-irrigationDitchLine`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M4.698 1.482a.6.6 0 01.604 0L8 3.055l2.698-1.573a.6.6 0 01.604 0l3 1.75a.6.6 0 01.298.518v3.5a.6.6 0 01-.298.518L11.6 9.345V12.5a.6.6 0 01-.298.518l-3 1.75a.6.6 0 01-.604 0l-3-1.75A.6.6 0 014.4 12.5V9.345L1.698 7.768A.6.6 0 011.4 7.25v-3.5a.6.6 0 01.298-.518l3-1.75zM5 8.305l2.4-1.4v-2.81L5 2.695l-2.4 1.4v2.81l2.4 1.4zm3.6-1.4l2.4 1.4 2.4-1.4v-2.81l-2.4-1.4-2.4 1.4v2.81zm-3 2.44v2.81l2.4 1.4 2.4-1.4v-2.81L8 7.945l-2.4 1.4z" fill="currentColor" /></svg></span>;
});
IrrigationDitchLine.displayName = "IrrigationDitchLine";
export default IrrigationDitchLine;