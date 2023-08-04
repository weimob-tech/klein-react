import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const DeliverTruckFill = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-deliverTruckFill`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M6 2.942A1.6 1.6 0 017.5 1.9h6a1.6 1.6 0 011.6 1.6v8a1.6 1.6 0 01-.851 1.415 2.5 2.5 0 10-4.997.185H6.998A2.5 2.5 0 102 13v.02A1.6 1.6 0 01.9 11.5v-4a3.6 3.6 0 013.6-3.6H5v3.6a.5.5 0 01-.5.5h-1v1h1A1.5 1.5 0 006 7.5V2.942zM10.25 13a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM4.5 11.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" fill="currentColor" /></svg></span>;
});
DeliverTruckFill.displayName = "DeliverTruckFill";
export default DeliverTruckFill;