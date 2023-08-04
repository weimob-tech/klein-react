import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const VolumeMuteLine = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-volumeMuteLine`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M6.722 1.93c.693-.694 1.878-.203 1.878.777v10.586c0 .98-1.185 1.47-1.878.778L3.752 11.1H2.5A1.6 1.6 0 01.9 9.5v-3a1.6 1.6 0 011.6-1.6H3.75l2.971-2.97zM7.4 2.948L4.424 5.924A.6.6 0 014 6.1H2.5a.4.4 0 00-.4.4v3c0 .22.179.4.4.4H4a.6.6 0 01.424.176L7.4 13.052V2.949zM11.15 8L9.076 5.924l.848-.848L12 7.15l2.076-2.075.848.848L12.848 8l2.076 2.076-.848.848L12 8.85l-2.076 2.075-.848-.848L11.15 8z" fill="currentColor" /></svg></span>;
});
VolumeMuteLine.displayName = "VolumeMuteLine";
export default VolumeMuteLine;