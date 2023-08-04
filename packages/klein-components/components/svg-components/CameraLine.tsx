import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const CameraLine = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-cameraLine`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M6.406 2.85l-.5 1.25H2.75a.4.4 0 00-.4.4v8.25c0 .22.179.4.4.4h10.5a.4.4 0 00.4-.4V4.5a.4.4 0 00-.4-.4h-3.156l-.5-1.25H6.406zm-1.089-.509a1.1 1.1 0 011.021-.691h3.323a1.1 1.1 0 011.022.691l.223.559h2.344a1.6 1.6 0 011.6 1.6v8.25a1.6 1.6 0 01-1.6 1.6H2.75a1.6 1.6 0 01-1.6-1.6V4.5a1.6 1.6 0 011.6-1.6h2.344l.223-.559zM12.5 6.1H11V4.9h1.5v1.2zM8 6.6a1.9 1.9 0 100 3.8 1.9 1.9 0 000-3.8zM4.9 8.5a3.1 3.1 0 116.2 0 3.1 3.1 0 01-6.2 0z" fill="currentColor" /></svg></span>;
});
CameraLine.displayName = "CameraLine";
export default CameraLine;