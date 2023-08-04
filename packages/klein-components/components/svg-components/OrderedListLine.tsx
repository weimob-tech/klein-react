import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const OrderedListLine = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-orderedListLine`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M2.468 6.25H3.5V2h-.752l-.998.78.303.608.418-.15c.006 1.004.006 2.008-.003 3.012zM14.5 3.604H5v-1.2h9.5v1.2zm0 5.008H5v-1.2h9.5v1.2zM5 13.6h9.5v-1.2H5v1.2zm-3.475-2.482c.033-.393.14-.743.445-1.017.259-.233.57-.351.923-.351.601 0 1.158.334 1.318.928.157.553-.185 1.01-.524 1.41l-.818 1.005h1.329V14H1.5l.004-.716 1.702-2.065c.115-.14.138-.265.08-.377-.124-.242-.517-.223-.695-.061-.145.135-.123.314-.123.494l-.943-.157z" fill="currentColor" /></svg></span>;
});
OrderedListLine.displayName = "OrderedListLine";
export default OrderedListLine;