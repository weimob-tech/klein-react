import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const WriteLine = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-writeLine`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M1.9 2.5A1.6 1.6 0 013.5.9h9a1.6 1.6 0 011.6 1.6V5h-1.2V2.5a.4.4 0 00-.4-.4h-9a.4.4 0 00-.4.4v11c0 .22.179.4.4.4H5v1.2H3.5a1.6 1.6 0 01-1.6-1.6v-11zm10.453 4.076a.6.6 0 01.849 0l2.222 2.222a.6.6 0 010 .848l-5.778 5.778a.6.6 0 01-.424.176H7a.6.6 0 01-.6-.6v-2.222a.6.6 0 01.176-.425l5.777-5.777zM7.6 13.026V14.4h1.374l5.177-5.178-1.373-1.373L7.6 13.026zM5 5.6h6V4.4H5v1.2z" fill="currentColor" /></svg></span>;
});
WriteLine.displayName = "WriteLine";
export default WriteLine;