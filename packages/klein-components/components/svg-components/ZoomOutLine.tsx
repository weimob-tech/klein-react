import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const ZoomOutLine = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-zoomOutLine`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M7.25 2.6a4.65 4.65 0 100 9.3 4.65 4.65 0 000-9.3zM1.4 7.25a5.85 5.85 0 1110.39 3.69l2.634 2.636-.848.848-2.636-2.635A5.85 5.85 0 011.4 7.25zm8.6.6H4.5v-1.2H10v1.2z" fill="currentColor" /></svg></span>;
});
ZoomOutLine.displayName = "ZoomOutLine";
export default ZoomOutLine;