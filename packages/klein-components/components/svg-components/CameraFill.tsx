import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const CameraFill = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-cameraFill`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M6.339 1.75a1 1 0 00-.929.629L5.161 3H2.75a1.5 1.5 0 00-1.5 1.5v8.25a1.5 1.5 0 001.5 1.5h10.5a1.5 1.5 0 001.5-1.5V4.5a1.5 1.5 0 00-1.5-1.5h-2.412l-.248-.621a1 1 0 00-.929-.629H6.34zM12.5 6.1H11V4.9h1.5v1.2zM8 6.6a1.9 1.9 0 100 3.8 1.9 1.9 0 000-3.8zM4.9 8.5a3.1 3.1 0 116.2 0 3.1 3.1 0 01-6.2 0z" fill="currentColor" /></svg></span>;
});
CameraFill.displayName = "CameraFill";
export default CameraFill;