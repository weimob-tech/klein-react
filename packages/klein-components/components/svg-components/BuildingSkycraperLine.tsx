import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const BuildingSkycraperLine = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-buildingSkycraperLine`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M8.4 2.202V13.78H3.1V3.898l5.3-1.696zM13 14.98a1.1 1.1 0 001.1-1.1V5.705a1.1 1.1 0 00-.653-1.005L9.6 3v-.935a1.1 1.1 0 00-1.435-1.048l-5.5 1.76A1.1 1.1 0 001.9 3.825V13.88a1.1 1.1 0 001.1 1.1h10zm-.1-1.2H9.6V4.303l3.3 1.467v8.01zM4.5 6.73h3v-1.2h-3v1.2zm3 2.5h-3v-1.2h3v1.2zm-3 2.5h3v-1.2h-3v1.2z" fill="currentColor" /></svg></span>;
});
BuildingSkycraperLine.displayName = "BuildingSkycraperLine";
export default BuildingSkycraperLine;