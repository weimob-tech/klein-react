import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const VolumeNoticeLine = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-volumeNoticeLine`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M6.722 1.93c.693-.694 1.878-.203 1.878.777v10.586c0 .98-1.185 1.47-1.878.778L3.752 11.1H2.5A1.6 1.6 0 01.9 9.5v-3a1.6 1.6 0 011.6-1.6H3.75l2.971-2.97zM7.4 2.948L4.424 5.924A.6.6 0 014 6.1H2.5a.4.4 0 00-.4.4v3c0 .22.179.4.4.4H4a.6.6 0 01.424.176L7.4 13.052V2.949zm5.63.048a7.08 7.08 0 012.066 5.006 7.08 7.08 0 01-2.082 5.023l-.848-.849a5.88 5.88 0 001.73-4.174 5.88 5.88 0 00-1.717-4.16l.85-.846zm-2.136 2.098a4.09 4.09 0 011.204 2.903c0 1.128-.456 2.15-1.193 2.891l-.85-.846a2.89 2.89 0 00.843-2.045c0-.802-.325-1.528-.852-2.053l.848-.85z" fill="currentColor" /></svg></span>;
});
VolumeNoticeLine.displayName = "VolumeNoticeLine";
export default VolumeNoticeLine;