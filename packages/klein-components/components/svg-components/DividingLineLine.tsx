import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const DividingLineLine = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-dividingLineLine`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M4 3.9H2.5V2.6H4v1.3zm10.5 4.7h-13V7.4h13v1.2zM7.25 3.9h1.5V2.6h-1.5v1.3zm6.25 0H12V2.6h1.5v1.3zm-11 9.5H4v-1.3H2.5v1.3zm6.25 0h-1.5v-1.3h1.5v1.3zm3.25 0h1.5v-1.3H12v1.3z" fill="currentColor" /></svg></span>;
});
DividingLineLine.displayName = "DividingLineLine";
export default DividingLineLine;