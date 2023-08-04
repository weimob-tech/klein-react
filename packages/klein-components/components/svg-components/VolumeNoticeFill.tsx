import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const VolumeNoticeFill = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-volumeNoticeFill`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M8.6 2.707c0-.98-1.185-1.47-1.878-.778L3.752 4.9H2.5A1.6 1.6 0 00.9 6.5v3a1.6 1.6 0 001.6 1.6H3.75l2.971 2.97c.693.694 1.878.203 1.878-.777V2.707zm6.496 5.296a7.08 7.08 0 00-2.066-5.006l-.851.846a5.88 5.88 0 011.717 4.16 5.88 5.88 0 01-1.73 4.174l.848.849a7.08 7.08 0 002.082-5.023zm-2.998-.005a4.09 4.09 0 00-1.204-2.903l-.848.85c.527.525.852 1.25.852 2.053a2.89 2.89 0 01-.844 2.045l.851.846a4.089 4.089 0 001.193-2.891z" fill="currentColor" /></svg></span>;
});
VolumeNoticeFill.displayName = "VolumeNoticeFill";
export default VolumeNoticeFill;