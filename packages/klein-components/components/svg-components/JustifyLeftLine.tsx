import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const JustifyLeftLine = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-justifyLeftLine`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M14 2.4H2v1.2h12V2.4zm-2.667 3.333H2v1.2h9.333v-1.2zM2 9.067h12v1.2H2v-1.2zm9.333 3.333H2v1.2h9.333v-1.2z" fill="currentColor" /></svg></span>;
});
JustifyLeftLine.displayName = "JustifyLeftLine";
export default JustifyLeftLine;