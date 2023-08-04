import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const EmotionFrownFill = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-emotionFrownFill`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" ><path d="M8 .9a7.1 7.1 0 110 14.2A7.1 7.1 0 018 .9zm.002 7.498c-.975 0-1.732.293-2.318.755-.503.395-.854.894-1.114 1.374l-.107.205 1.074.536c.23-.46.51-.874.89-1.173.367-.29.86-.497 1.575-.497.714 0 1.207.208 1.573.497.325.256.576.596.786.979l.102.194 1.074-.536c-.27-.54-.645-1.127-1.218-1.579-.585-.462-1.342-.755-2.317-.755zM10.85 5h-1.2v2h1.2V5zm-4.5 0h-1.2v2h1.2V5z" fill="currentColor" fillRule="nonzero" /></svg></span>;
});
EmotionFrownFill.displayName = "EmotionFrownFill";
export default EmotionFrownFill;