import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const PersonSalesFill = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-personSalesFill`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M8 1.15a3.6 3.6 0 100 7.2 3.6 3.6 0 000-7.2zm-2.5 8a3.6 3.6 0 00-3.6 3.6v.5a1.6 1.6 0 001.6 1.6h9a1.6 1.6 0 001.6-1.6v-.5a3.6 3.6 0 00-3.6-3.6h-5zm5.75 3.45h-2v-1.2h2v1.2z" fill="currentColor" /></svg></span>;
});
PersonSalesFill.displayName = "PersonSalesFill";
export default PersonSalesFill;