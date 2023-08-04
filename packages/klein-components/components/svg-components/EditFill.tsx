import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const EditFill = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-editFill`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M11.424 1.576a.6.6 0 00-.848 0l-6.5 6.5A.6.6 0 003.9 8.5V11a.6.6 0 00.6.6H7a.6.6 0 00.424-.176l6.5-6.5a.6.6 0 000-.848l-2.5-2.5zM2 14.1h12v-1.2H2v1.2z" fill="currentColor" /></svg></span>;
});
EditFill.displayName = "EditFill";
export default EditFill;