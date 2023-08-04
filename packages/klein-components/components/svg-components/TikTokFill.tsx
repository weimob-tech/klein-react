import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const TikTokFill = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-tikTokFill`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path fillRule="evenodd" clipRule="evenodd" d="M13.358 4.26C11.81 3.93 10.73 2.57 10.708 1H8.316v9.638a2.028 2.028 0 01-2.064 1.946c-1.102-.023-1.97-.938-1.97-2.04A2.027 2.027 0 016.3 8.551c.211 0 .399.023.587.094V6.183c-.188-.024-.399-.024-.587-.024h-.093a4.42 4.42 0 00-4.315 4.503A4.42 4.42 0 006.37 15a4.434 4.434 0 004.385-4.432V5.667a5.717 5.717 0 003.353 1.078V4.33a3.71 3.71 0 01-.75-.07z" fill="currentColor" /></svg></span>;
});
TikTokFill.displayName = "TikTokFill";
export default TikTokFill;