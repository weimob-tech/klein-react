import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const SquareFill = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-squareFill`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" ><g fill="none" fillRule="evenodd"><path d="M2 0h36a2 2 0 012 2v36a2 2 0 01-2 2H2a2 2 0 01-2-2V2a2 2 0 012-2z" fill="currentColor" opacity={0.45} /><path d="M19.529 15.194a.654.654 0 01.908 0l6.352 6.187c.502.489.333.885-.377.885h-3.858v6.484c0 .69-.575 1.25-1.285 1.25h-2.572c-.71 0-1.286-.56-1.286-1.25v-6.484h-3.857c-.71 0-.879-.397-.377-.885l6.352-6.187zm8.186-2.694h-15.43c-.709 0-1.285-.56-1.285-1.25S11.576 10 12.285 10h15.43c.709 0 1.285.56 1.285 1.25s-.576 1.25-1.285 1.25z" fill="#FFF" /></g></svg></span>;
});
SquareFill.displayName = "SquareFill";
export default SquareFill;