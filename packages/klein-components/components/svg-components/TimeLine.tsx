import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const TimeLine = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-timeLine`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" ><path d="M8 .9a7.1 7.1 0 110 14.2A7.1 7.1 0 018 .9zm0 1.2a5.9 5.9 0 100 11.8A5.9 5.9 0 008 2.1zm.6 2.4v3.251l2.324 2.325-.848.848L7.4 8.25V4.5h1.2z" fill="currentColor" fillRule="nonzero" /></svg></span>;
});
TimeLine.displayName = "TimeLine";
export default TimeLine;