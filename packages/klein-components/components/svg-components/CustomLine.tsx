import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const CustomLine = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-customLine`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><g clipPath="url(#prefix__clip0_1275_53239)"><path d="M8 2.1a5.9 5.9 0 00-4.072 10.169C4.694 11.673 6.154 10.9 8 10.9s3.306.773 4.072 1.369A5.9 5.9 0 008 2.1zm3.081 10.933A5.657 5.657 0 008 12.1c-1.347 0-2.44.505-3.081.933.897.55 1.952.867 3.081.867 1.13 0 2.184-.317 3.081-.867zM.9 8a7.1 7.1 0 1114.2 0A7.1 7.1 0 01.9 8zM8 5.1a1.9 1.9 0 100 3.8 1.9 1.9 0 000-3.8zM4.9 7a3.1 3.1 0 116.2 0 3.1 3.1 0 01-6.2 0z" fill="currentColor" /></g><defs><clipPath id="prefix__clip0_1275_53239"><path fill="#fff" d="M0 0h16v16H0z" /></clipPath></defs></svg></span>;
});
CustomLine.displayName = "CustomLine";
export default CustomLine;