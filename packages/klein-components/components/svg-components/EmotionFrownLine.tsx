import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const EmotionFrownLine = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-emotionFrownLine`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" ><path d="M8 .9a7.1 7.1 0 110 14.2A7.1 7.1 0 018 .9zm0 1.2a5.9 5.9 0 100 11.8A5.9 5.9 0 008 2.1zm.002 6.298c.975 0 1.732.293 2.317.755.501.396.851.895 1.111 1.375l.107.204-1.074.536c-.23-.46-.51-.874-.888-1.173-.366-.29-.859-.497-1.573-.497s-1.208.208-1.576.497c-.325.257-.577.597-.788.98l-.101.193-1.074-.536c.27-.54.647-1.127 1.22-1.58.587-.461 1.344-.754 2.319-.754zM10.85 5v2h-1.2V5h1.2zm-4.5 0v2h-1.2V5h1.2z" fill="currentColor" fillRule="nonzero" /></svg></span>;
});
EmotionFrownLine.displayName = "EmotionFrownLine";
export default EmotionFrownLine;