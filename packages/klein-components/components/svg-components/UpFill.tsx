import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const UpFill = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-upFill`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M8 1a7 7 0 100 14A7 7 0 008 1zm.424 4.576l3.5 3.5-.848.848L8 6.85 4.924 9.924l-.848-.848 3.5-3.5a.6.6 0 01.848 0z" fill="currentColor" /></svg></span>;
});
UpFill.displayName = "UpFill";
export default UpFill;