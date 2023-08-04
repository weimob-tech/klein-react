import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const EmotionMehFill = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-emotionMehFill`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" ><path d="M8 .9a7.1 7.1 0 110 14.2A7.1 7.1 0 018 .9zm2.5 8.5h-5v1.2h5V9.4zM6.35 5h-1.2v2h1.2V5zm4.5 0h-1.2v2h1.2V5z" fill="currentColor" fillRule="nonzero" /></svg></span>;
});
EmotionMehFill.displayName = "EmotionMehFill";
export default EmotionMehFill;