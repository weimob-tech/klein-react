import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const WeChatPaymentFill = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-weChatPaymentFill`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M5.884 9.648a.46.46 0 01-.406-.238l-.033-.064-1.281-2.74c-.016-.032-.016-.062-.016-.095a.22.22 0 01.227-.223c.049 0 .098.016.146.048L6.03 7.387c.113.063.243.11.389.11a.651.651 0 00.243-.047l7.075-3.089C12.472 2.896 10.38 1.94 8.01 1.94 4.148 1.94 1 4.504 1 7.672c0 1.72.941 3.28 2.417 4.331.113.08.194.223.194.366a.431.431 0 01-.032.143c-.113.43-.31 1.132-.31 1.163a.573.573 0 00-.032.175.22.22 0 00.227.223.186.186 0 00.13-.048l1.525-.875a.784.784 0 01.373-.111c.064 0 .146.015.21.032a8.292 8.292 0 002.289.319c3.861 0 7.009-2.564 7.009-5.732 0-.956-.292-1.862-.795-2.66l-8.062 4.57-.049.032a.449.449 0 01-.21.048z" fill="currentColor" /></svg></span>;
});
WeChatPaymentFill.displayName = "WeChatPaymentFill";
export default WeChatPaymentFill;