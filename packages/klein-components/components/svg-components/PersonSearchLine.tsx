import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const PersonSearchLine = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-personSearchLine`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M8 2.35a2.4 2.4 0 100 4.8 2.4 2.4 0 000-4.8zm-3.6 2.4a3.6 3.6 0 117.2 0 3.6 3.6 0 01-7.2 0zm1.1 5.6a2.4 2.4 0 00-2.4 2.4v.5c0 .22.179.4.4.4H9v1.2H3.5a1.6 1.6 0 01-1.6-1.6v-.5a3.6 3.6 0 013.6-3.6H9v1.2H5.5zm6.719 0a1.369 1.369 0 100 2.737 1.369 1.369 0 000-2.737zm-2.57 1.369a2.569 2.569 0 114.76 1.342l.765.765-.848.848-.765-.765a2.569 2.569 0 01-3.91-2.19z" fill="currentColor" /></svg></span>;
});
PersonSearchLine.displayName = "PersonSearchLine";
export default PersonSearchLine;