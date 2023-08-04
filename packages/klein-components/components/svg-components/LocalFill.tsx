import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const LocalFill = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-localFill`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M8 .9C4.445.9 1.9 3.684 1.9 7c0 2.479 1.385 4.498 2.755 5.863.69.688 1.396 1.229 1.964 1.6.283.186.538.333.745.436.102.051.2.096.29.129.065.024.2.072.346.072.146 0 .28-.048.346-.072.089-.033.187-.078.29-.129.207-.103.462-.25.745-.436a12.7 12.7 0 001.964-1.6C12.715 11.498 14.1 9.479 14.1 7 14.1 3.684 11.554.9 8 .9zM10.5 7a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" fill="currentColor" /></svg></span>;
});
LocalFill.displayName = "LocalFill";
export default LocalFill;