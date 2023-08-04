import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const ProtectFill = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-protectFill`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M14.35 7.75V3c0-.43-.397-.583-.74-.715a9.676 9.676 0 01-.095-.038C12.592 1.88 10.469 1.15 8 1.15c-2.062 0-4.144.42-6.009 1.309A.6.6 0 001.65 3v4.75c0 3.452 2.872 5.91 5.903 6.983.29.104.377.152.462.149.083-.003.164-.053.432-.149 3.03-1.072 5.903-3.53 5.903-6.983zM7.674 9.924a.6.6 0 01-.848 0l-2.5-2.5.848-.848L7.25 8.65l3.576-3.575.848.848-4 4z" fill="currentColor" /></svg></span>;
});
ProtectFill.displayName = "ProtectFill";
export default ProtectFill;