import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const BoxLine = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-boxLine`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M.9 3.25a1.6 1.6 0 011.6-1.6H13a1.6 1.6 0 011.6 1.6v9.5a1.6 1.6 0 01-1.6 1.6H2.5a1.6 1.6 0 01-1.6-1.6v-9.5zm1.6-.4a.4.4 0 00-.4.4v9.5c0 .22.179.4.4.4H13a.4.4 0 00.4-.4v-9.5a.4.4 0 00-.4-.4h-2.15v4.9a.6.6 0 01-.891.524l-1.96-1.088-1.958 1.088a.6.6 0 01-.891-.524v-4.9H2.5zm3.85 0v3.88l1.359-.754a.6.6 0 01.582 0l1.359.754V2.85h-3.3zM9 11.6h3v-1.2H9v1.2z" fill="currentColor" /></svg></span>;
});
BoxLine.displayName = "BoxLine";
export default BoxLine;