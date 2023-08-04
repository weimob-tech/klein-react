import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const CompassFill = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-compassFill`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M13.961 3.47c.365-.901-.532-1.798-1.433-1.433L1.573 6.478c-.88.357-.925 1.585-.075 2.006l4.024 1.992L7.515 14.5c.42.85 1.648.804 2.005-.075L13.96 3.47z" fill="currentColor" /></svg></span>;
});
CompassFill.displayName = "CompassFill";
export default CompassFill;