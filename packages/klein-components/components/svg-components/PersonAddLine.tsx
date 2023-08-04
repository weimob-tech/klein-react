import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const PersonAddLine = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-personAddLine`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M8 2.35a2.4 2.4 0 100 4.8 2.4 2.4 0 000-4.8zm-3.6 2.4a3.6 3.6 0 117.2 0 3.6 3.6 0 01-7.2 0zm1.1 5.6a2.4 2.4 0 00-2.4 2.4v.5c0 .22.179.4.4.4H9v1.2H3.5a1.6 1.6 0 01-1.6-1.6v-.5a3.6 3.6 0 013.6-3.6H9v1.2H5.5zm6.15 1.05V9.25h1.2v2.15H15v1.2h-2.15v2.15h-1.2V12.6H9.5v-1.2h2.15z" fill="currentColor" /></svg></span>;
});
PersonAddLine.displayName = "PersonAddLine";
export default PersonAddLine;