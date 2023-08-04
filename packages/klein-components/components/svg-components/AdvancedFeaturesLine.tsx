import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const AdvancedFeaturesLine = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-advancedFeaturesLine`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M8.8.769a1.6 1.6 0 00-1.6 0L2.138 3.692a1.6 1.6 0 00-.8 1.385v5.846c0 .571.305 1.1.8 1.385L7.2 15.231a1.6 1.6 0 001.6 0l5.062-2.923a1.6 1.6 0 00.8-1.385V5.077a1.6 1.6 0 00-.8-1.385L8.8.769zm-1 1.04a.4.4 0 01.4 0l5.062 2.922a.4.4 0 01.2.346v5.846a.4.4 0 01-.2.346L8.2 14.192a.4.4 0 01-.4 0l-5.062-2.923a.4.4 0 01-.2-.346V5.077a.4.4 0 01.2-.346L7.8 1.808zM4.178 6.563L7.35 8.377V12h1.3V8.377l3.172-1.813-.644-1.128L8 7.25 4.822 5.436l-.644 1.128z" fill="currentColor" /></svg></span>;
});
AdvancedFeaturesLine.displayName = "AdvancedFeaturesLine";
export default AdvancedFeaturesLine;