import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const GraphicLine = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-graphicLine`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M1.9 2.5A1.6 1.6 0 013.5.9H10a.6.6 0 01.424.176l3.5 3.5A.6.6 0 0114.1 5v8.5a1.6 1.6 0 01-1.6 1.6h-9a1.6 1.6 0 01-1.6-1.6v-11zm1.6-.4a.4.4 0 00-.4.4v11c0 .016 0 .033.003.049l6.072-6.073a1.1 1.1 0 011.646.103L12.9 10.25V5.6h-2.4a1.1 1.1 0 01-1.1-1.1V2.1H3.5zm9 11.8a.4.4 0 00.4-.4v-1.294L9.944 8.405 4.448 13.9H12.5zM10.6 2.949V4.4h1.451L10.6 2.949zM5.25 6.25a1 1 0 100-2 1 1 0 000 2z" fill="currentColor" /></svg></span>;
});
GraphicLine.displayName = "GraphicLine";
export default GraphicLine;