import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const EmotionHappyLine = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-emotionHappyLine`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M2.1 8a5.9 5.9 0 1111.8 0A5.9 5.9 0 012.1 8zM8 .9a7.1 7.1 0 100 14.2A7.1 7.1 0 008 .9zM5.15 5v2h1.2V5h-1.2zm4.5 2V5h1.2v2h-1.2zM4.5 9c0 .31.043.652.133 1 .345 1.334 1.384 2.75 3.367 2.75s3.022-1.416 3.367-2.75c.09-.348.133-.69.133-1h-7zm1.612 1.838A3.052 3.052 0 015.676 10h4.648c-.1.292-.245.582-.437.838-.392.523-.982.912-1.887.912s-1.495-.389-1.888-.912z" fill="currentColor" /></svg></span>;
});
EmotionHappyLine.displayName = "EmotionHappyLine";
export default EmotionHappyLine;