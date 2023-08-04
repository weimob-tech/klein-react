import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const FileVideoFill = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-fileVideoFill`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" ><path d="M8 .9a7.1 7.1 0 110 14.2A7.1 7.1 0 018 .9zM6.787 5.05a.5.5 0 00-.78.326L6 5.46v5.08a.5.5 0 00.714.452l.073-.043 3.628-2.54a.5.5 0 00.07-.76l-.07-.059-3.628-2.54z" fill="currentColor" fillRule="evenodd" /></svg></span>;
});
FileVideoFill.displayName = "FileVideoFill";
export default FileVideoFill;