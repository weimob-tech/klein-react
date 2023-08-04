import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const CustomerServiceLine = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-customerServiceLine`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M1.9 7C1.9 3.476 4.64.9 8 .9c3.358 0 6.1 2.576 6.1 6.1v3.5c0 .05-.002.11-.012.225a4.842 4.842 0 01-.704 2.093C12.64 14.006 11.192 15.1 8.5 15.1h-1a1.1 1.1 0 010-2.2h1a1.1 1.1 0 011.086.924c1.568-.234 2.36-.97 2.78-1.642.123-.197.218-.394.291-.582H12.5a2.1 2.1 0 01-2.1-2.1V8c0-1.16.94-2.1 2.1-2.1h.286C12.303 3.643 10.35 2.1 8 2.1c-2.352 0-4.303 1.543-4.786 3.8H3.5c1.16 0 2.1.94 2.1 2.1v1.5a2.1 2.1 0 01-2.1 2.1H3a1.1 1.1 0 01-1.1-1.1V7zm1.2.1v3.3h.4a.9.9 0 00.9-.9V8a.9.9 0 00-.9-.9h-.4zm9.8 0h-.4a.9.9 0 00-.9.9v1.5a.9.9 0 00.9.9h.4V7.1z" fill="currentColor" /></svg></span>;
});
CustomerServiceLine.displayName = "CustomerServiceLine";
export default CustomerServiceLine;