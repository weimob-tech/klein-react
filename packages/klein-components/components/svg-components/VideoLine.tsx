import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const VideoLine = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-videoLine`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" ><path d="M8 .9a7.1 7.1 0 110 14.2A7.1 7.1 0 018 .9zm0 1.2a5.9 5.9 0 100 11.8A5.9 5.9 0 008 2.1zm-.966 2.398l.097.061 3.628 2.54a1.1 1.1 0 01.104 1.72l-.104.082-3.628 2.54a1.1 1.1 0 01-1.725-.787L5.4 10.54V5.46c0-.81.831-1.315 1.53-1.013l.104.051zM6.6 5.652v4.696L9.954 8 6.6 5.652z" fill="currentColor" fillRule="nonzero" /></svg></span>;
});
VideoLine.displayName = "VideoLine";
export default VideoLine;