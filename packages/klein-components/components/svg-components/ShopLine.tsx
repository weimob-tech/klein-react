import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const ShopLine = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-shopLine`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" ><path d="M12.68 1.4c.763 0 1.42.538 1.569 1.286l.6 3a1.6 1.6 0 01-.75 1.689V13a1.6 1.6 0 01-1.599 1.6h-9A1.6 1.6 0 011.9 13V7.375a1.6 1.6 0 01-.75-1.689l.6-3A1.6 1.6 0 013.32 1.4h9.36zm.22 6.2H3.1V13a.4.4 0 00.4.4h9a.4.4 0 00.4-.4V7.6zm-.9 3.3v1.2H9v-1.2h3zm.68-8.3H3.32a.4.4 0 00-.393.322l-.6 3a.4.4 0 00.393.478h10.56a.4.4 0 00.392-.478l-.6-3a.399.399 0 00-.391-.322z" fill="currentColor" fillRule="nonzero" /></svg></span>;
});
ShopLine.displayName = "ShopLine";
export default ShopLine;