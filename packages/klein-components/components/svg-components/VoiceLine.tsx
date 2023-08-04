import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const VoiceLine = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-voiceLine`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M3.65 5.25a4.35 4.35 0 018.7 0v2a4.35 4.35 0 11-8.7 0v-2zM8 2.1a3.15 3.15 0 00-3.15 3.15v2a3.15 3.15 0 006.3 0v-2A3.15 3.15 0 008 2.1zm-6 8.155a6.594 6.594 0 01-.148-.351l1.117-.437a5.4 5.4 0 0010.061.002l1.118.437A6.604 6.604 0 018.6 14.073V15H7.4v-.927A6.604 6.604 0 012 10.255z" fill="currentColor" /></svg></span>;
});
VoiceLine.displayName = "VoiceLine";
export default VoiceLine;