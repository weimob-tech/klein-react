import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const FormatBrushLine = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-formatBrushLine`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M1.65 2.25a1.1 1.1 0 011.1-1.1h8.75a1.1 1.1 0 011.1 1.1v1.4h1.15a.6.6 0 01.6.6v4a.6.6 0 01-.482.588L6.85 10.242V11h.35a.3.3 0 01.3.3v2.497a.3.3 0 01-.189.278l-1.9.76A.3.3 0 015 14.557V11.3a.3.3 0 01.3-.3h.35V9.75a.6.6 0 01.482-.588l7.018-1.404V4.85h-.55v1.4a1.1 1.1 0 01-1.1 1.1H2.75a1.1 1.1 0 01-1.1-1.1v-4zm1.2.1v3.8h8.55v-3.8H2.85z" fill="currentColor" /></svg></span>;
});
FormatBrushLine.displayName = "FormatBrushLine";
export default FormatBrushLine;