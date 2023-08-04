import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const BandCardFill = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-bandCardFill`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M.9 3.5a1.6 1.6 0 011.6-1.6h11a1.6 1.6 0 011.6 1.6v1.9H.9V3.5zm0 3.1v5.9a1.6 1.6 0 001.6 1.6h11a1.6 1.6 0 001.6-1.6V6.6H.9zm2.6 5v-1.2h3v1.2h-3z" fill="currentColor" /></svg></span>;
});
BandCardFill.displayName = "BandCardFill";
export default BandCardFill;