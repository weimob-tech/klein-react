import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const LinkDisconnectLine = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-linkDisconnectLine`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M12.525 3.474a2.4 2.4 0 00-3.394 0L7.717 4.89 6.87 4.04l1.414-1.414a3.6 3.6 0 015.091 5.091L11.96 9.131l-.849-.848 1.414-1.414a2.4 2.4 0 000-3.395zm-1.06 8.84L3.687 4.534l.848-.848 7.778 7.778-.848.848zM4.04 6.868L2.626 8.283a3.6 3.6 0 105.091 5.09l1.414-1.413-.848-.849-1.414 1.414a2.4 2.4 0 11-3.395-3.394L4.89 7.717 4.04 6.87z" fill="currentColor" /></svg></span>;
});
LinkDisconnectLine.displayName = "LinkDisconnectLine";
export default LinkDisconnectLine;