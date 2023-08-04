import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const SettingNutLine = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-settingNutLine`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M15.224 7.194a1.6 1.6 0 010 1.612l-2.916 5a1.6 1.6 0 01-1.382.794H5.074a1.6 1.6 0 01-1.382-.794l-2.916-5a1.6 1.6 0 010-1.612l2.916-5A1.6 1.6 0 015.074 1.4h5.852a1.6 1.6 0 011.382.794l2.916 5zm-1.036 1.008a.4.4 0 000-.404l-2.917-5a.4.4 0 00-.345-.198H5.074a.4.4 0 00-.345.198l-2.917 5a.4.4 0 000 .404l2.917 5a.4.4 0 00.345.198h5.852a.4.4 0 00.345-.199l2.917-5zM9.65 8a1.65 1.65 0 10-3.3 0 1.65 1.65 0 003.3 0zM8 5.15a2.85 2.85 0 110 5.7 2.85 2.85 0 010-5.7z" fill="currentColor" /></svg></span>;
});
SettingNutLine.displayName = "SettingNutLine";
export default SettingNutLine;