import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const PlusCircleFill = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-plusCircleFill`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" ><path d="M8 .9a7.1 7.1 0 110 14.2A7.1 7.1 0 018 .9zM8.6 4H7.4v3.4H4v1.2h3.4V12h1.2V8.6H12V7.4H8.6V4z" fill="currentColor" fillRule="nonzero" /></svg></span>;
});
PlusCircleFill.displayName = "PlusCircleFill";
export default PlusCircleFill;