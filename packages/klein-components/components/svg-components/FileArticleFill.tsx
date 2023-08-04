import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const FileArticleFill = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-fileArticleFill`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M3.5.9a1.6 1.6 0 00-1.6 1.6v11a1.6 1.6 0 001.6 1.6h9a1.6 1.6 0 001.6-1.6V4.914a1.6 1.6 0 00-.469-1.131l-2.414-2.414A1.6 1.6 0 0010.086.9H3.5zm2 5.1a1 1 0 110-2 1 1 0 010 2zm5 2.6h-6V7.4h6v1.2zM8 11.1H4.5V9.9H8v1.2z" fill="currentColor" /></svg></span>;
});
FileArticleFill.displayName = "FileArticleFill";
export default FileArticleFill;