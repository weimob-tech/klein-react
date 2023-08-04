import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const BorderOuterLine = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-borderOuterLine`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M1.4 3A1.6 1.6 0 013 1.4h10A1.6 1.6 0 0114.6 3v10a1.6 1.6 0 01-1.6 1.6H3A1.6 1.6 0 011.4 13V3zM3 2.6a.4.4 0 00-.4.4v10c0 .22.179.4.4.4h10a.4.4 0 00.4-.4V3a.4.4 0 00-.4-.4H3zm3.006 7.25L5.25 12h-1.5l3.344-8.1h1.812L12.25 12h-1.5l-.756-2.15H6.006zm3.508-1.2L8.094 5.1h-.188l-1.42 3.55h3.028z" fill="currentColor" /></svg></span>;
});
BorderOuterLine.displayName = "BorderOuterLine";
export default BorderOuterLine;