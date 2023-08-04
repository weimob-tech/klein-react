import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const HomeLine = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-homeLine`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M8.247 2.205a.4.4 0 00-.494 0l-4.75 3.717a.4.4 0 00-.153.315V13.4H5.9v-3.15A1.1 1.1 0 017 9.15h2a1.1 1.1 0 011.1 1.1v3.15h3.05V6.237a.4.4 0 00-.154-.315l-4.75-3.717zM7.014 1.26a1.6 1.6 0 011.972 0l4.75 3.717a1.6 1.6 0 01.614 1.26V13.7a.9.9 0 01-.9.9H9.8a.9.9 0 01-.9-.9v-3.35H7.1v3.35a.9.9 0 01-.9.9H2.55a.9.9 0 01-.9-.9V6.237a1.6 1.6 0 01.614-1.26l4.75-3.717z" fill="currentColor" /></svg></span>;
});
HomeLine.displayName = "HomeLine";
export default HomeLine;