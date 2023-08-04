import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const OrderReplaceLine = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-orderReplaceLine`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" ><path d="M8 2.1c-2.939 0-5.375 2.165-5.81 4.992a.599.599 0 01-1.117.192L0 5.284l1.053-.568.364.678C2.452 2.762 5.009.9 8 .9c3.538 0 6.468 2.605 6.992 6.008l-1.182.184C13.375 4.265 10.939 2.1 8 2.1zm6.3 6.309a.597.597 0 01.627.307l1.073 2-1.053.568-.364-.678C13.548 13.238 10.991 15.1 8 15.1c-3.538 0-6.468-2.605-6.992-6.008l1.182-.184C2.625 11.735 5.061 13.9 8 13.9c2.939 0 5.375-2.165 5.81-4.992a.6.6 0 01.49-.5zM9.294 4.473l-1.055-.137a3.412 3.412 0 01-1.188 1.552V5.68h-.673V4.402H5.31V5.68h-.8v1.054h.8V8.01c-.321.11-.65.194-.98.272l.277 1.1c.235-.084.47-.168.703-.256v1.277c0 .075-.014.126-.095.126-.24 0-.477-.037-.714-.073l-.021-.004.246 1.072h.755c.273 0 .505-.072.667-.24a.843.843 0 00.218-.488l.687.898c.83-.456 1.63-1.032 2.097-1.88.494.828 1.232 1.424 2.056 1.898l.48-1.023c-.64-.299-1.236-.68-1.653-1.264h1.552V8.407h-.392V6.382h-1.085c.147-.246.278-.5.405-.756v-.738H9.128c.044-.106.086-.212.128-.318l.038-.097zM7.05 6.734v-.083l.1.133v1.623h-.244l.138-.074.028-.015V7.182c-.23.128-.461.255-.695.375v-.823h.673zm-.673 1.94c.107-.05.215-.103.322-.159v.909h1.45c-.426.645-1.101 1.037-1.783 1.358.007-.057.01-.117.01-.178v-1.93zm1.711-2.292c.18-.17.343-.35.49-.537h.727c-.114.196-.225.376-.331.537h-.886zm.042 2.025V7.362h.502c-.016.387-.051.735-.103 1.045H8.13zm1.436 0c.04-.307.068-.655.083-1.045h.564v1.045h-.647z" fill="currentColor" fillRule="nonzero" /></svg></span>;
});
OrderReplaceLine.displayName = "OrderReplaceLine";
export default OrderReplaceLine;