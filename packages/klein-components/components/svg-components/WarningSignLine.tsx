import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const WarningSignLine = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-warningSignLine`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M6.2 2.835c.815-1.36 2.785-1.36 3.6 0l4.852 8.085c.84 1.4-.169 3.18-1.801 3.18H3.149c-1.632 0-2.64-1.78-1.8-3.18l4.85-8.085zm2.572.617a.9.9 0 00-1.544 0l-4.85 8.085a.9.9 0 00.771 1.363h9.702a.9.9 0 00.772-1.363L8.772 3.452zM7.4 9.5v-4h1.2v4H7.4zm1.2 1v1H7.4v-1h1.2z" fill="currentColor" /></svg></span>;
});
WarningSignLine.displayName = "WarningSignLine";
export default WarningSignLine;