import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const LockLine = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-lockLine`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M8 2.1a3.4 3.4 0 013.4 3.4v1.4H4.6V5.5A3.4 3.4 0 018 2.1zM3.4 5.5v1.403A1.6 1.6 0 001.9 8.5v5a1.6 1.6 0 001.6 1.6h9a1.6 1.6 0 001.6-1.6v-5a1.6 1.6 0 00-1.5-1.597V5.5a4.6 4.6 0 00-9.2 0zm.1 2.6h9c.22 0 .4.18.4.4v5a.4.4 0 01-.4.4h-9a.4.4 0 01-.4-.4v-5c0-.22.179-.4.4-.4zM7.4 10v2.5h1.2V10H7.4z" fill="currentColor" /></svg></span>;
});
LockLine.displayName = "LockLine";
export default LockLine;