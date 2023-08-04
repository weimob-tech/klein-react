import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const LinkLine = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-linkLine`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M12.525 3.475a2.4 2.4 0 00-3.394 0L7.01 5.595l-.849-.848 2.122-2.121a3.6 3.6 0 015.091 5.091l-2.121 2.121-.849-.848 2.121-2.121a2.4 2.4 0 000-3.394zM5.808 9.344l3.535-3.536.849.848-3.536 3.536-.848-.848zm-1.06-3.182l-2.122 2.12a3.6 3.6 0 105.091 5.092l2.121-2.121-.848-.849-2.121 2.121a2.4 2.4 0 01-3.395-3.394L5.596 7.01l-.849-.848z" fill="currentColor" /></svg></span>;
});
LinkLine.displayName = "LinkLine";
export default LinkLine;