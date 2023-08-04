import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const FilePictureFill = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-filePictureFill`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M2.75 1.65a1.6 1.6 0 00-1.6 1.6v9.5a1.6 1.6 0 001.6 1.6h10.5a1.6 1.6 0 001.6-1.6v-9.5a1.6 1.6 0 00-1.6-1.6H2.75zM5 6.25a1 1 0 110-2 1 1 0 010 2zm5.199.203a1.1 1.1 0 011.603.05l1.408 1.6.397.451-.901.793-.396-.45-1.338-1.52-5.048 5.047-.424.425L4.65 12l.425-.424 5.123-5.123z" fill="currentColor" /></svg></span>;
});
FilePictureFill.displayName = "FilePictureFill";
export default FilePictureFill;