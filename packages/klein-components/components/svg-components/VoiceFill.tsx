import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const VoiceFill = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-voiceFill`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M8 .9a4.35 4.35 0 00-4.35 4.35v2a4.35 4.35 0 008.7 0v-2A4.35 4.35 0 008 .9zM1.852 9.904a6.604 6.604 0 005.548 4.17V15h1.2v-.927a6.604 6.604 0 005.548-4.167l-1.118-.438A5.4 5.4 0 012.97 9.466l-1.117.438z" fill="currentColor" /></svg></span>;
});
VoiceFill.displayName = "VoiceFill";
export default VoiceFill;