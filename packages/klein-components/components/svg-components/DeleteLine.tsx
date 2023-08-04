import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const DeleteLine = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-deleteLine`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M4.4 2.25a1.1 1.1 0 011.1-1.1h5a1.1 1.1 0 011.1 1.1v1.4h2.65v1.2h-.65v8.4a1.6 1.6 0 01-1.6 1.6H4a1.6 1.6 0 01-1.6-1.6v-8.4h-.65v-1.2H4.4v-1.4zm1.2 1.4h4.8v-1.3H5.6v1.3zm-2 1.2v8.4c0 .22.18.4.4.4h8a.4.4 0 00.4-.4v-8.4H3.6zM5.65 12V6.5h1.2V12h-1.2zm3.5 0V6.5h1.2V12h-1.2z" fill="currentColor" /></svg></span>;
});
DeleteLine.displayName = "DeleteLine";
export default DeleteLine;