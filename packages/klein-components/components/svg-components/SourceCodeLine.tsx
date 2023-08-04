import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const SourceCodeLine = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-sourceCodeLine`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M8.918 1.854l-3 12 1.164.292 3-12-1.164-.292zM1.53 8l3.43-4.116-.921-.768-3.75 4.5a.6.6 0 000 .768l3.75 4.5.922-.768L1.53 8zM14.469 8l-3.43-4.116.922-.768 3.75 4.5a.6.6 0 010 .768l-3.75 4.5-.922-.768L14.469 8z" fill="currentColor" /></svg></span>;
});
SourceCodeLine.displayName = "SourceCodeLine";
export default SourceCodeLine;