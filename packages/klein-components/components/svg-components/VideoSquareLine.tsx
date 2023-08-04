import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const VideoSquareLine = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-videoSquareLine`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M1.15 3.25a1.6 1.6 0 011.6-1.6h10.5a1.6 1.6 0 011.6 1.6v9.5a1.6 1.6 0 01-1.6 1.6H2.75a1.6 1.6 0 01-1.6-1.6v-9.5zm1.6-.4a.4.4 0 00-.4.4v9.5c0 .22.179.4.4.4h10.5a.4.4 0 00.4-.4v-9.5a.4.4 0 00-.4-.4H2.75zM6.6 5.652v4.696L9.954 8 6.6 5.652zM5.4 5.46a1.1 1.1 0 011.73-.9l3.629 2.539a1.1 1.1 0 010 1.802l-3.628 2.54A1.1 1.1 0 015.4 10.54V5.46z" fill="currentColor" /></svg></span>;
});
VideoSquareLine.displayName = "VideoSquareLine";
export default VideoSquareLine;