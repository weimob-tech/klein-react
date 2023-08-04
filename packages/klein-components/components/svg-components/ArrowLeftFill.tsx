import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const ArrowLeftFill = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-arrowLeftFill`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M10.35 4.94a.8.8 0 00-1.327-.601L5.527 7.398a.8.8 0 000 1.204l3.496 3.06a.8.8 0 001.327-.603V4.941z" fill="currentColor" /></svg></span>;
});
ArrowLeftFill.displayName = "ArrowLeftFill";
export default ArrowLeftFill;