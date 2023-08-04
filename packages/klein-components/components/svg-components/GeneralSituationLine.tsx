import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const GeneralSituationLine = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-generalSituationLine`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M3.25 2.6h9.5c.22 0 .4.18.4.4v7.4H2.85V3c0-.22.18-.4.4-.4zm11.1 7.8V3a1.6 1.6 0 00-1.6-1.6h-9.5A1.6 1.6 0 001.65 3v7.4H1v1.2h6.4v.484l-3.61 1.354.42 1.124 3.19-1.196V14.5h1.2v-1.134l3.19 1.196.42-1.124-3.61-1.354V11.6H15v-1.2h-.65zM9.196 7.901l2.25-2.5-.892-.802-1.827 2.03-1.053-1.053-.447-.447-.423.47-2.25 2.5.892.802 1.827-2.03 1.053 1.053.447.447.423-.47z" fill="currentColor" /></svg></span>;
});
GeneralSituationLine.displayName = "GeneralSituationLine";
export default GeneralSituationLine;