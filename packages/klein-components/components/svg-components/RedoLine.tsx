import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const RedoLine = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-redoLine`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M11.48 1.86l3.2 2.4a.3.3 0 010 .48l-3.2 2.4A.3.3 0 0111 6.9V5.1H6.25a3.9 3.9 0 000 7.8h5.25v1.2H6.25a5.1 5.1 0 110-10.2H11V2.1a.3.3 0 01.48-.24z" fill="currentColor" /></svg></span>;
});
RedoLine.displayName = "RedoLine";
export default RedoLine;