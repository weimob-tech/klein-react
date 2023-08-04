import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const CodeLine = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-codeLine`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M1.15 3.25a1.6 1.6 0 011.6-1.6h10.5a1.6 1.6 0 011.6 1.6v9.5a1.6 1.6 0 01-1.6 1.6H2.75a1.6 1.6 0 01-1.6-1.6v-9.5zm1.6-.4a.4.4 0 00-.4.4V4.9h11.3V3.25a.4.4 0 00-.4-.4H2.75zm10.9 3.25H2.35v6.65c0 .22.179.4.4.4h10.5a.4.4 0 00.4-.4V6.1zM9.259 7.62l-.19.57-1 3-.19.569-1.138-.38.19-.569 1-3 .19-.569 1.138.38zm1.665-.044L10.5 7.15 9.65 8l.425.424L11.15 9.5l-1.075 1.076L9.65 11l.849.848.424-.424 1.5-1.5a.6.6 0 000-.848l-1.5-1.5zM6.348 8l-.424.424L4.848 9.5l1.076 1.076.424.424-.848.848-.424-.424-1.5-1.5a.6.6 0 010-.848l1.5-1.5.424-.425.848.849z" fill="currentColor" /></svg></span>;
});
CodeLine.displayName = "CodeLine";
export default CodeLine;