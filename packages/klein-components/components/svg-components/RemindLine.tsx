import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const RemindLine = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-remindLine`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M2.65 6.5a5.35 5.35 0 0110.7 0v3.34l.92 1.612a.6.6 0 01-.52.898h-3.152a2.6 2.6 0 01-5.196 0H2.25a.6.6 0 01-.521-.898l.92-1.611V6.5zm3.953 5.85a1.4 1.4 0 002.793 0H6.603zM8 2.35A4.15 4.15 0 003.85 6.5V10a.6.6 0 01-.08.298l-.486.852h9.432l-.487-.852a.6.6 0 01-.08-.298V6.5A4.15 4.15 0 008 2.35z" fill="currentColor" /></svg></span>;
});
RemindLine.displayName = "RemindLine";
export default RemindLine;