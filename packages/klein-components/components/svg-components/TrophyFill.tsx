import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const TrophyFill = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-trophyFill`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M3.5 2.25a.5.5 0 01.5-.5h8a.5.5 0 01.5.5v.9h.75a1.6 1.6 0 011.6 1.6V6.5A2.85 2.85 0 0112 9.35h-.02a4.503 4.503 0 01-3.38 2.36v1.44H11v1.2H5v-1.2h2.4v-1.44A4.504 4.504 0 014 9.314v.036A2.85 2.85 0 011.15 6.5V4.75a1.6 1.6 0 011.6-1.6h.75v-.9zm-.1 5.788V4.35h-.65a.4.4 0 00-.4.4V6.5c0 .7.435 1.298 1.05 1.538zm9.2 0A1.65 1.65 0 0013.65 6.5V4.75a.4.4 0 00-.4-.4h-.65v3.688z" fill="currentColor" /></svg></span>;
});
TrophyFill.displayName = "TrophyFill";
export default TrophyFill;