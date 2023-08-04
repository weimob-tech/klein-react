import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const RotateRightOutlinedLine = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-rotateRightOutlinedLine`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M8.332 1.04l1.496 1.31a.2.2 0 010 .3L8.332 3.96A.2.2 0 018 3.81V3.1H3.5a1.4 1.4 0 00-1.4 1.4V9H.9V4.5a2.6 2.6 0 012.6-2.6H8v-.71a.2.2 0 01.332-.15zM3.9 6.5a1.6 1.6 0 011.6-1.6h8a1.6 1.6 0 011.6 1.6v6a1.6 1.6 0 01-1.6 1.6h-8a1.6 1.6 0 01-1.6-1.6v-6zm1.6-.4a.4.4 0 00-.4.4v6c0 .22.179.4.4.4h8a.4.4 0 00.4-.4v-6a.4.4 0 00-.4-.4h-8z" fill="currentColor" /></svg></span>;
});
RotateRightOutlinedLine.displayName = "RotateRightOutlinedLine";
export default RotateRightOutlinedLine;