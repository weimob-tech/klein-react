import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const MassageFill = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-massageFill`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" ><path d="M8 .9a7.1 7.1 0 11-2.744 13.65l-.313-.14-2.274.666a.6.6 0 01-.769-.597l.013-.104.441-2.07A7.1 7.1 0 018 .9zM4.6 7.1a.9.9 0 100 1.8.9.9 0 000-1.8zm3.4 0a.9.9 0 100 1.8.9.9 0 000-1.8zm3.4 0a.9.9 0 100 1.8.9.9 0 000-1.8z" fill="currentColor" fillRule="nonzero" /></svg></span>;
});
MassageFill.displayName = "MassageFill";
export default MassageFill;