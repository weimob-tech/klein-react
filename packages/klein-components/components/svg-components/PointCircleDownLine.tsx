import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const PointCircleDownLine = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-pointCircleDownLine`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" ><path d="M8 .9a7.1 7.1 0 110 14.2A7.1 7.1 0 018 .9zm0 1.2a5.9 5.9 0 100 11.8A5.9 5.9 0 008 2.1zM8.6 4v6.051l1.976-1.975.848.848-3 3a.6.6 0 01-.765.07l-.083-.07-3-3 .848-.848L7.4 10.05V4h1.2z" fill="currentColor" fillRule="nonzero" /></svg></span>;
});
PointCircleDownLine.displayName = "PointCircleDownLine";
export default PointCircleDownLine;