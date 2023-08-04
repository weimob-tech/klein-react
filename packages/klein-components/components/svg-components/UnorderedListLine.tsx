import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const UnorderedListLine = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-unorderedListLine`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M2.4 3.9a.9.9 0 100-1.8.9.9 0 000 1.8zM5 3.6h9V2.4H5v1.2zm0 5h9V7.4H5v1.2zm0 5h9v-1.2H5v1.2zm-2.6.3a.9.9 0 100-1.8.9.9 0 000 1.8zM3.3 8a.9.9 0 11-1.8 0 .9.9 0 011.8 0z" fill="currentColor" /></svg></span>;
});
UnorderedListLine.displayName = "UnorderedListLine";
export default UnorderedListLine;