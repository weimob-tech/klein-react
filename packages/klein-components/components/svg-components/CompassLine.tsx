import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const CompassLine = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-compassLine`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M12.76 3.238L2.23 7.507l3.855 1.909a1.1 1.1 0 01.497.497l1.91 3.855 4.268-10.53zm-.232-1.2c.901-.366 1.798.53 1.433 1.432L9.52 14.425c-.357.88-1.584.925-2.005.075l-1.993-4.024-4.024-1.992c-.85-.421-.804-1.65.075-2.006l10.955-4.44z" fill="currentColor" /></svg></span>;
});
CompassLine.displayName = "CompassLine";
export default CompassLine;