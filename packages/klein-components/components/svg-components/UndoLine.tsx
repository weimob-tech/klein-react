import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const UndoLine = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-undoLine`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M4.52 1.86l-3.2 2.4a.3.3 0 000 .48l3.2 2.4A.3.3 0 005 6.9V5.1h4.75a3.9 3.9 0 110 7.8H4.5v1.2h5.25a5.1 5.1 0 100-10.2H5V2.1a.3.3 0 00-.48-.24z" fill="currentColor" /></svg></span>;
});
UndoLine.displayName = "UndoLine";
export default UndoLine;