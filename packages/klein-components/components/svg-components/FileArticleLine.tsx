import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const FileArticleLine = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-fileArticleLine`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M3.5.9a1.6 1.6 0 00-1.6 1.6v11a1.6 1.6 0 001.6 1.6h9a1.6 1.6 0 001.6-1.6V4.914a1.6 1.6 0 00-.469-1.131l-2.414-2.414A1.6 1.6 0 0010.086.9H3.5zm-.4 1.6c0-.22.179-.4.4-.4h6.586a.4.4 0 01.282.117l2.415 2.414a.4.4 0 01.117.283V13.5a.4.4 0 01-.4.4h-9a.4.4 0 01-.4-.4v-11zm1.4 6.1h6V7.4h-6v1.2zm0 2.5H8V9.9H4.5v1.2zm1-5.1a1 1 0 100-2 1 1 0 000 2z" fill="currentColor" /></svg></span>;
});
FileArticleLine.displayName = "FileArticleLine";
export default FileArticleLine;