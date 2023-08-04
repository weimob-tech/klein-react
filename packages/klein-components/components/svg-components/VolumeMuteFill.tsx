import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const VolumeMuteFill = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-volumeMuteFill`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M8.6 2.707c0-.98-1.185-1.47-1.878-.778L3.752 4.9H2.5A1.6 1.6 0 00.9 6.5v3a1.6 1.6 0 001.6 1.6H3.75l2.971 2.97c.693.694 1.878.203 1.878-.777V2.707zm.476 3.217L11.15 8l-2.075 2.076.848.848L12 8.848l2.076 2.076.848-.848L12.848 8l2.076-2.076-.848-.848L12 7.15 9.924 5.076l-.848.848z" fill="currentColor" /></svg></span>;
});
VolumeMuteFill.displayName = "VolumeMuteFill";
export default VolumeMuteFill;