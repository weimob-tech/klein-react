import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const UserLine = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-userLine`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M8 2.35a2.4 2.4 0 100 4.8 2.4 2.4 0 000-4.8zm-3.6 2.4a3.6 3.6 0 117.2 0 3.6 3.6 0 01-7.2 0zm1.1 5.6a2.4 2.4 0 00-2.4 2.4v.5c0 .22.179.4.4.4h9a.4.4 0 00.4-.4v-.5a2.4 2.4 0 00-2.4-2.4h-5zm-3.6 2.4a3.6 3.6 0 013.6-3.6h5a3.6 3.6 0 013.6 3.6v.5a1.6 1.6 0 01-1.6 1.6h-9a1.6 1.6 0 01-1.6-1.6v-.5z" fill="currentColor" /></svg></span>;
});
UserLine.displayName = "UserLine";
export default UserLine;