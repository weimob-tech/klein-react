import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const LineHeightLine = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-lineHeightLine`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M14 2.35H2v1.3h12v-1.3zm0 3.333H7v1.3h7v-1.3zM7 9.017h7v1.3H7v-1.3zm7 3.333H2v1.3h12v-1.3zM5.06 7H2.44a.2.2 0 01-.15-.332L3.6 5.172a.2.2 0 01.3 0l1.31 1.496A.2.2 0 015.06 7zm0 2H2.44a.2.2 0 00-.15.332l1.31 1.496a.2.2 0 00.3 0l1.31-1.496A.2.2 0 005.06 9z" fill="currentColor" /></svg></span>;
});
LineHeightLine.displayName = "LineHeightLine";
export default LineHeightLine;