import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const DataHistogramLine = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-dataHistogramLine`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M10.4 2.5a.6.6 0 01.6-.6h2a.6.6 0 01.6.6v10.4h.4v1.2H2v-1.2h.4V8a.6.6 0 01.6-.6h2a.6.6 0 01.6.6v4.9h.8V5a.6.6 0 01.6-.6h2a.6.6 0 01.6.6v7.9h.8V2.5zm-6 10.4V8.6h-.8v4.3h.8zm7.2-9.8v9.8h.8V3.1h-.8zm-3.2 9.8V5.6h-.8v7.3h.8z" fill="currentColor" /></svg></span>;
});
DataHistogramLine.displayName = "DataHistogramLine";
export default DataHistogramLine;