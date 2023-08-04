import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const HeartLine = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-heartLine`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M.65 5.935c0-2.37 1.935-4.285 4.312-4.285 1.185 0 2.258.475 3.038 1.243a4.314 4.314 0 013.037-1.243c2.378 0 4.313 1.914 4.313 4.285 0 2.075-1.225 3.978-2.664 5.421-1.446 1.449-3.211 2.54-4.498 2.964a.6.6 0 01-.376 0c-1.287-.425-3.052-1.515-4.498-2.964C1.875 9.913.65 8.01.65 5.936zM4.962 2.85C3.24 2.85 1.85 4.235 1.85 5.935c0 1.61.968 3.225 2.314 4.574C5.427 11.775 6.93 12.714 8 13.114c1.07-.4 2.573-1.34 3.836-2.605 1.345-1.349 2.314-2.963 2.314-4.574 0-1.7-1.39-3.085-3.113-3.085A3.116 3.116 0 008.49 4.163a.6.6 0 01-.978 0A3.116 3.116 0 004.962 2.85z" fill="currentColor" /></svg></span>;
});
HeartLine.displayName = "HeartLine";
export default HeartLine;