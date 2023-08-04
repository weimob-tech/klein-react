import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const WeiboFill = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-weiboFill`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M3.03 5.83C4.911 4.088 7.076 3.338 7.84 4.15c.344.366.363.957.1 1.695-.07.184.032.221.143.215l.028-.002.059-.01.053-.013.055-.016.143-.054c1.43-.527 2.675-.502 3.113.163.225.361.207.872-.05 1.453-.094.17-.034.24.08.298l.034.016.11.048c.821.304 1.749.966 1.71 2.066-.074 2.121-2.753 3.994-6.71 3.856C3.704 13.76.669 12.2.753 9.802c.044-1.257.884-2.643 2.277-3.971zm7.865-3.788a4.872 4.872 0 014.355 4.416v.04c-.008.129-.095.39-.484.39-.36 0-.473-.194-.51-.34l-.012-.06-.003-.026a3.868 3.868 0 00-3.225-3.39l-.117-.018c-.127-.016-.5-.097-.5-.534 0-.437.333-.494.496-.478zm.12 2.037a2.623 2.623 0 012.178 2.105l.02.123.002.043-.003.052c-.015.118-.096.267-.411.267-.334 0-.42-.146-.454-.268l-.013-.053-.009-.047a1.75 1.75 0 00-1.302-1.331l-.07-.015c-.13-.03-.336-.11-.336-.47 0-.388.212-.423.35-.412l.048.006z" fill="currentColor" /></svg></span>;
});
WeiboFill.displayName = "WeiboFill";
export default WeiboFill;