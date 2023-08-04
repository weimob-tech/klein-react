import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const HomeFill = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-homeFill`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M8.986 1.26a1.6 1.6 0 00-1.972 0l-4.75 3.717a1.6 1.6 0 00-.614 1.26V13.7a.9.9 0 00.9.9h3.4a.9.9 0 00.9-.9v-3.45c0-.22.18-.4.4-.4h1.5c.22 0 .4.18.4.4v3.45a.9.9 0 00.9.9h3.4a.9.9 0 00.9-.9V6.237a1.6 1.6 0 00-.614-1.26L8.986 1.26z" fill="currentColor" /></svg></span>;
});
HomeFill.displayName = "HomeFill";
export default HomeFill;