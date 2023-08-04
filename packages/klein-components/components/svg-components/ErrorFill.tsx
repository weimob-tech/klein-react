import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const ErrorFill = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-errorFill`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" ><path d="M8 .9a7.1 7.1 0 110 14.2A7.1 7.1 0 018 .9zm2.076 4.176L8 7.15 5.924 5.076l-.848.848L7.15 8l-2.075 2.076.848.848L8 8.85l2.076 2.075.848-.848L8.85 8l2.075-2.076-.848-.848z" fill="currentColor" fillRule="nonzero" /></svg></span>;
});
ErrorFill.displayName = "ErrorFill";
export default ErrorFill;