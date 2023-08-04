import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const SettingNutFill = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-settingNutFill`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M12.308 13.806l2.916-5a1.6 1.6 0 000-1.612l-2.916-5a1.6 1.6 0 00-1.383-.794h-5.85a1.6 1.6 0 00-1.383.794l-2.916 5a1.6 1.6 0 000 1.612l2.916 5a1.6 1.6 0 001.382.794h5.851a1.6 1.6 0 001.383-.794zM10.5 8a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" fill="currentColor" /></svg></span>;
});
SettingNutFill.displayName = "SettingNutFill";
export default SettingNutFill;