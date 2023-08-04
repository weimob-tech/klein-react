import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const MassageLine = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-massageLine`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" ><path d="M8 .9a7.1 7.1 0 11-2.744 13.65l-.313-.14-2.274.666a.6.6 0 01-.769-.597l.013-.104.441-2.07A7.1 7.1 0 018 .9zm0 1.2a5.9 5.9 0 00-4.539 9.67.6.6 0 01.139.4l-.013.109-.29 1.363 1.534-.45a.6.6 0 01.446.044A5.9 5.9 0 108 2.1zm-3.4 5a.9.9 0 110 1.8.9.9 0 010-1.8zm3.4 0a.9.9 0 110 1.8.9.9 0 010-1.8zm3.4 0a.9.9 0 110 1.8.9.9 0 010-1.8z" fill="currentColor" fillRule="nonzero" /></svg></span>;
});
MassageLine.displayName = "MassageLine";
export default MassageLine;