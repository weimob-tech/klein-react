import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const FilterLine = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-filterLine`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M1.9 2.5A1.1 1.1 0 013 1.4h10a1.1 1.1 0 011.1 1.1v1.543a1.1 1.1 0 01-.322.778L10.6 7.999v5.251a.6.6 0 01-.455.582l-4 1a.6.6 0 01-.745-.582V7.999L2.222 4.82a1.1 1.1 0 01-.322-.778V2.5zm1.2.1v1.401l3.5 3.5v5.98l2.8-.7v-5.28l3.5-3.5V2.6H3.1z" fill="currentColor" /></svg></span>;
});
FilterLine.displayName = "FilterLine";
export default FilterLine;