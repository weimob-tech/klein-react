import React from 'react';
import { getPrefixClassName } from '../../config-provider/context';
import cx from 'classnames';
export interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  prefixCls: string;
}
const OrderReturnIn15DaysLine = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const {
    prefixCls,
    className,
    ...reset
  } = props;
  const iconPrefix = getPrefixClassName('icon', prefixCls);
  return <span className={cx(`${iconPrefix} ${iconPrefix}-orderReturnIn15DaysLine`, className)} ref={ref} {...reset} ><svg width="1em" height="1em" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" ><path d="M2.206 7.092C2.64 4.265 5.07 2.1 8 2.1c2.93 0 5.36 2.165 5.794 4.992l1.178-.184C14.45 3.505 11.528.9 8 .9 5.083.9 2.58 2.681 1.506 5.222l-.41-.96L0 4.738l1.07 2.5a.596.596 0 001.136-.145zm12.724 1.67a.596.596 0 00-1.136.146C13.36 11.735 10.93 13.9 8 13.9c-2.93 0-5.36-2.165-5.794-4.992l-1.178.184C1.55 12.495 4.472 15.1 8 15.1c2.917 0 5.42-1.781 6.494-4.322l.41.96L16 11.262l-1.07-2.5zM6.527 4.8H5.62c-.202.24-.431.442-.692.616-.27.164-.55.28-.852.362v1.316c.438-.138.862-.293 1.234-.573v4.564h1.218V4.8zm4.66 0H7.571l-.33 3.697H8.35c.098-.2.204-.387.41-.491l.006-.003c.143-.08.311-.116.53-.116.313 0 .525.097.676.276.155.183.246.453.246.834 0 .334-.097.578-.28.765a.95.95 0 01-.695.28c-.212 0-.43-.042-.598-.178-.242-.196-.271-.506-.297-.795h-1.2c.044.636.205 1.228.72 1.649.383.32.842.482 1.367.482.581 0 1.088-.19 1.51-.57l.004-.004c.448-.427.68-.975.68-1.637 0-.67-.176-1.216-.532-1.624-.356-.408-.826-.612-1.384-.612-.369 0-.72.1-1.015.286l.098-1.048h2.591V4.8z" fill="currentColor" fillRule="nonzero" /></svg></span>;
});
OrderReturnIn15DaysLine.displayName = "OrderReturnIn15DaysLine";
export default OrderReturnIn15DaysLine;