import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const RightFill = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-rightFill`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M8 .9a7.1 7.1 0 100 14.2A7.1 7.1 0 008 .9zm2.424 7.524l-3.5 3.5-.848-.848L9.15 8 6.076 4.924l.848-.848 3.5 3.5a.6.6 0 010 .848z" fill="currentColor" /></svg></span>;
});
RightFill.displayName = "RightFill";
export default RightFill;