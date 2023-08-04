import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const DeliverTruckLine = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-deliverTruckLine`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M5.4 3.5A1.6 1.6 0 017 1.9h6.5a1.6 1.6 0 011.6 1.6v8a1.6 1.6 0 01-1.6 1.6 1.85 1.85 0 01-3.5 0H6.5a1.85 1.85 0 01-3.5 0h-.5a1.6 1.6 0 01-1.6-1.6v-4a3.6 3.6 0 013.6-3.6h.9v-.4zm4.6 8.4a1.85 1.85 0 013.5 0 .4.4 0 00.4-.4v-8a.4.4 0 00-.4-.4H7a.4.4 0 00-.4.4v4A1.6 1.6 0 015 9.1H4V7.9h1a.4.4 0 00.4-.4V5.1h-.9a2.4 2.4 0 00-2.4 2.4v4c0 .22.179.4.4.4H3a1.85 1.85 0 013.5 0H10zm-5.25-.05a.65.65 0 100 1.3.65.65 0 000-1.3zm6.35.65a.65.65 0 101.3 0 .65.65 0 00-1.3 0z" fill="currentColor" /></svg></span>;
});
DeliverTruckLine.displayName = "DeliverTruckLine";
export default DeliverTruckLine;