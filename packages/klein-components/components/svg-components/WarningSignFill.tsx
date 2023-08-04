import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const WarningSignFill = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-warningSignFill`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path fillRule="evenodd" clipRule="evenodd" d="M9.372 2.367a1.6 1.6 0 00-2.744 0L.894 11.923a1.6 1.6 0 001.372 2.423h11.468a1.6 1.6 0 001.372-2.423L9.372 2.367zM7.4 9.747v-4h1.2v4H7.4zm1.2 1v1H7.4v-1h1.2z" fill="currentColor" /></svg></span>;
});
WarningSignFill.displayName = "WarningSignFill";
export default WarningSignFill;