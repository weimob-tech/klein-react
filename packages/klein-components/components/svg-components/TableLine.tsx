import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const TableLine = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-tableLine`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M2.75 1.65a1.6 1.6 0 00-1.6 1.6v9.5a1.6 1.6 0 001.6 1.6h10.5a1.6 1.6 0 001.6-1.6v-9.5a1.6 1.6 0 00-1.6-1.6H2.75zm-.4 1.6c0-.22.179-.4.4-.4h10.5c.22 0 .4.18.4.4v1.9H2.35v-1.9zm0 3.1H7.4v2.8H2.35v-2.8zm0 4H7.4v2.8H2.75a.4.4 0 01-.4-.4v-2.4zm6.25 2.8v-2.8h5.05v2.4a.4.4 0 01-.4.4H8.6zm5.05-4H8.6v-2.8h5.05v2.8z" fill="currentColor" /></svg></span>;
});
TableLine.displayName = "TableLine";
export default TableLine;