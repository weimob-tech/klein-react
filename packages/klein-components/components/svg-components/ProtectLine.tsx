import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const ProtectLine = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-protectLine`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M8 1.15c2.469 0 4.592.73 5.515 1.097.359.143.835.283.835.753v4.75c0 3.452-2.872 5.91-5.903 6.983-.543.193-.32.204-.894 0-3.031-1.072-5.903-3.53-5.903-6.983V3a.6.6 0 01.341-.541C3.856 1.569 5.938 1.15 8 1.15zM2.85 3.394V7.75c0 2.942 2.586 4.98 5.15 5.869 2.563-.889 5.15-2.927 5.15-5.869V3.394C12.36 3.073 10.31 2.35 8 2.35c-2.31 0-4.36.723-5.15 1.044zm8.824 2.53l-4 4a.6.6 0 01-.848 0l-2.5-2.5.848-.848L7.25 8.65l3.576-3.575.848.848z" fill="currentColor" /></svg></span>;
});
ProtectLine.displayName = "ProtectLine";
export default ProtectLine;