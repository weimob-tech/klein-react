import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const AttachmentLine = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-attachmentLine`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M10.351 2.337a2.925 2.925 0 114.137 4.137l-6.85 6.85a4.088 4.088 0 01-5.78-5.781L7.61 1.789l.849.848-5.754 5.754-.42-.42.42.42a2.888 2.888 0 004.083 4.084l6.85-6.85a1.725 1.725 0 00-2.44-2.44l-6.85 6.85-.424-.424.425.424a.562.562 0 10.795.796L10.9 5.077l.849.848-5.754 5.754A1.762 1.762 0 113.5 9.187l6.85-6.85z" fill="currentColor" /></svg></span>;
});
AttachmentLine.displayName = "AttachmentLine";
export default AttachmentLine;