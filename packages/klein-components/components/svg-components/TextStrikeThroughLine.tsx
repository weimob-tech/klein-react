import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const TextStrikeThroughLine = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-textStrikeThroughLine`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M7.745 2.6C6.28 2.6 4.6 3.478 4.6 5.131c-.004.353.131.694.228 1.028l-1.152.334c-.131-.451-.28-.895-.276-1.371C3.402 2.98 5.32 1.4 7.745 1.4c1.875 0 3.431.928 4.055 2.352l.24.55-1.099.48-.24-.55C10.303 3.329 9.24 2.6 7.744 2.6zM1.9 7.4h12.2v1.2H11.44c.693.555 1.159 1.327 1.159 2.4 0 1.06-.575 1.974-1.412 2.602-.838.627-1.967.998-3.188.998s-2.35-.37-3.188-.998C3.722 12.784 3.4 11.69 3.4 10.4h1.2c0 .912.141 1.649.932 2.242.61.457 1.482.758 2.468.758s1.857-.3 2.468-.758c.61-.458.932-1.045.932-1.642 0-.681-.278-1.133-.752-1.497-.49-.377-1.18-.65-1.996-.903H1.9V7.4z" fill="currentColor" /></svg></span>;
});
TextStrikeThroughLine.displayName = "TextStrikeThroughLine";
export default TextStrikeThroughLine;