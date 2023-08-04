import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const EmotionSmileFill = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-emotionSmileFill`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M8 .9a7.1 7.1 0 100 14.2A7.1 7.1 0 008 .9zM5.15 7V5h1.2v2h-1.2zm4.5 0V5h1.2v2h-1.2zm2.28 2.169a4.102 4.102 0 01-7.859.007l1.15-.344a2.901 2.901 0 005.56-.005l1.15.342z" fill="currentColor" /></svg></span>;
});
EmotionSmileFill.displayName = "EmotionSmileFill";
export default EmotionSmileFill;