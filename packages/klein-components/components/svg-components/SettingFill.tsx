import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const SettingFill = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-settingFill`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M6.707 1.523a.5.5 0 00-.579-.255c-1.1.305-2.293 1-3.1 1.75a.5.5 0 00-.108.587c.057.116.151.327.23.542.088.24.125.402.125.457 0 .392-.156.68-.399.879-.252.205-.626.334-1.071.327a.5.5 0 00-.484.35C1.12 6.8 1 7.267 1 8.018c0 .476 0 1.106.47 1.95a.5.5 0 00.485.255c.487-.048.808.048.999.198.177.14.321.39.321.848 0 .357-.128.682-.341.935a.5.5 0 00.022.67A6.998 6.998 0 006 14.728a.5.5 0 00.619-.327 1.451 1.451 0 012.762 0 .5.5 0 00.62.327 6.998 6.998 0 003.043-1.857.5.5 0 00.022-.669 1.443 1.443 0 01-.341-.935c0-.457.144-.708.321-.848.19-.15.512-.246.999-.198a.5.5 0 00.486-.255c.468-.844.469-1.474.469-1.95 0-.751-.12-1.217-.32-1.856a.5.5 0 00-.485-.35c-.445.006-.819-.123-1.071-.328-.243-.198-.399-.487-.399-.88 0-.054.037-.217.125-.456.079-.215.173-.426.23-.542a.5.5 0 00-.108-.587c-.807-.75-2-1.445-3.1-1.75a.5.5 0 00-.58.255 1.45 1.45 0 01-2.585 0zM5.75 8a2.25 2.25 0 114.5 0 2.25 2.25 0 01-4.5 0z" fill="currentColor" /></svg></span>;
});
SettingFill.displayName = "SettingFill";
export default SettingFill;