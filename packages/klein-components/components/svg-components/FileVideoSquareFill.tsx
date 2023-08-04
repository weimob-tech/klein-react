import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const FileVideoSquareFill = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-fileVideoSquareFill`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M2.75 1.65a1.6 1.6 0 00-1.6 1.6v9.5a1.6 1.6 0 001.6 1.6h10.5a1.6 1.6 0 001.6-1.6v-9.5a1.6 1.6 0 00-1.6-1.6H2.75zm4.037 3.4l3.628 2.54a.5.5 0 010 .82l-3.628 2.54A.5.5 0 016 10.54V5.46a.5.5 0 01.787-.41z" fill="currentColor" /></svg></span>;
});
FileVideoSquareFill.displayName = "FileVideoSquareFill";
export default FileVideoSquareFill;