import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const CrownLine = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-crownLine`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M8 .9a.6.6 0 01.52.302l2.72 4.758 2.992-1.497a.6.6 0 01.864.603l-1 9a.6.6 0 01-.596.534h-11a.6.6 0 01-.596-.534l-1-9a.6.6 0 01.864-.603L4.761 5.96l2.718-4.758A.6.6 0 017.999.9zm0 1.81L5.52 7.047a.6.6 0 01-.788.239L2.218 6.03l.819 7.37h9.926l.819-7.37-2.514 1.257a.6.6 0 01-.789-.24L7.999 2.71zm-.375 9.009l-2.5-2 .75-.938L8 10.481l2.125-1.7.75.938-2.5 2a.6.6 0 01-.75 0z" fill="currentColor" /></svg></span>;
});
CrownLine.displayName = "CrownLine";
export default CrownLine;