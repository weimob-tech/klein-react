import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const HighLightLine = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-highLightLine`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M3.477 2.273a.8.8 0 01.98-.566l7.823 2.097a.8.8 0 01.566.98l-.466 1.738a.6.6 0 01-.15.264L9.02 10.068a.6.6 0 01-.486.177l-.415 1.55-.12.445H3.653l.202-.755.624-2.327a.6.6 0 01-.332-.396L3.009 4.316a.6.6 0 01.002-.305l.466-1.738zm2.159 7.204l-.42 1.563H7.08l.294-1.097-1.738-.466zm5.626-3.417l.321-1.2-7.05-1.89-.323 1.2 1.013 3.954.144.039 2.897.776.144.039 2.854-2.918zM3 14.6h10v-1.2H3v1.2z" fill="currentColor" /></svg></span>;
});
HighLightLine.displayName = "HighLightLine";
export default HighLightLine;