import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const ErrorLine = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-errorLine`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" ><path d="M8 .9a7.1 7.1 0 110 14.2A7.1 7.1 0 018 .9zm0 1.2a5.9 5.9 0 100 11.8A5.9 5.9 0 008 2.1zm2.076 2.976l.848.848L8.85 8l2.075 2.076-.848.848L8 8.85l-2.076 2.075-.848-.848L7.15 8 5.076 5.924l.848-.848L8 7.15l2.076-2.075z" fill="currentColor" fillRule="nonzero" /></svg></span>;
});
ErrorLine.displayName = "ErrorLine";
export default ErrorLine;