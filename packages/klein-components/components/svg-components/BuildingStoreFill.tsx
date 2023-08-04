import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const BuildingStoreFill = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-buildingStoreFill`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M1.825 2.636A1.5 1.5 0 013.281 1.5h9.438a1.5 1.5 0 011.455 1.136l.568 2.273A1.282 1.282 0 0114 6.399v.016a1.498 1.498 0 01-.5.085h-11c-.175 0-.344-.03-.5-.085v-.016a1.282 1.282 0 01-.743-1.49l.568-2.273zM2 7.45V13a1.5 1.5 0 001.5 1.5h9A1.5 1.5 0 0014 13V7.45a2.51 2.51 0 01-.5.05h-11c-.171 0-.339-.017-.5-.05zm7 4.65v-1.2h3v1.2H9z" fill="currentColor" /></svg></span>;
});
BuildingStoreFill.displayName = "BuildingStoreFill";
export default BuildingStoreFill;