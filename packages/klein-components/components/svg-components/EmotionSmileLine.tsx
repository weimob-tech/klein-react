import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const EmotionSmileLine = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-emotionSmileLine`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" ><path d="M8 .9a7.1 7.1 0 110 14.2A7.1 7.1 0 018 .9zm0 1.2a5.9 5.9 0 100 11.8A5.9 5.9 0 008 2.1zm2.78 6.727l1.15.342a4.102 4.102 0 01-7.859.007l1.15-.344a2.902 2.902 0 005.56-.005zM6.35 5v2h-1.2V5h1.2zm4.5 0v2h-1.2V5h1.2z" fill="currentColor" fillRule="nonzero" /></svg></span>;
});
EmotionSmileLine.displayName = "EmotionSmileLine";
export default EmotionSmileLine;