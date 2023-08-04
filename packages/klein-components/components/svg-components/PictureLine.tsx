import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const PictureLine = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-pictureLine`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M2.75 1.65a1.6 1.6 0 00-1.6 1.6v9.5a1.6 1.6 0 001.6 1.6h10.5a1.6 1.6 0 001.6-1.6v-9.5a1.6 1.6 0 00-1.6-1.6H2.75zm-.4 1.6c0-.22.179-.4.4-.4h10.5c.22 0 .4.18.4.4v5.56L11.82 6.56a1.1 1.1 0 00-1.645-.07l-6.43 6.66H2.75a.4.4 0 01-.4-.4v-9.5zm8.611 4.154l2.689 3.309v2.037a.4.4 0 01-.4.4H5.413l5.548-5.746zM5 6.25a1 1 0 100-2 1 1 0 000 2z" fill="currentColor" /></svg></span>;
});
PictureLine.displayName = "PictureLine";
export default PictureLine;