import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const LoadFailFill = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-loadFailFill`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M2.5 1.65a1.6 1.6 0 00-1.6 1.6v8.25a1.6 1.6 0 001.6 1.6h6.551A3.501 3.501 0 0113.6 9.176V3.25a1.6 1.6 0 00-1.6-1.6H2.5zm-.367 10.01a.398.398 0 01-.033-.16V3.25c0-.22.18-.4.4-.4H12c.22 0 .4.18.4.4v3.943l-.693-.693a1 1 0 00-1.414 0L7.5 9.293 6.707 8.5a1 1 0 00-1.414 0l-3.16 3.16zM5.5 5.25a1 1 0 11-2 0 1 1 0 012 0zm7 9.75a2.5 2.5 0 100-5 2.5 2.5 0 000 5zm-.3-4h.6v2h-.6v-2zm0 3v-.5h.6v.5h-.6z" fill="currentColor" /></svg></span>;
});
LoadFailFill.displayName = "LoadFailFill";
export default LoadFailFill;