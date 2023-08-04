import React from 'react';
import classNames from 'classnames';
import { ConfigContext } from '../config-provider/context';
import type { TooltipProps } from '../tooltip';
import Tooltip from '../tooltip';

export interface PopoverProps extends TooltipProps {
  /** 标题 */
  title?: React.ReactNode;
  /** 卡片内容 */
  content?: React.ReactNode;
  /** 使用较大的气泡卡片 */
  size?: 'normal' | 'large';
  prefixCls?: string;
  /** 用于手动控制浮层显隐 */
  visible?: boolean;
  /** 设置宽度 */
  width?: number;
}

const Popover = React.forwardRef<any, PopoverProps>((props, ref) => {
  const {
    prefixCls: customPrefix,
    overlayClassName,
    size,
    title,
    content,
    width,
    overlayInnerStyle,
    ...resetProps
  } = props;
  const { getPrefixClassName } = React.useContext(ConfigContext);
  const popOverCls = getPrefixClassName('popover', customPrefix);
  const overlayCls = classNames(overlayClassName, {
    [`${popOverCls}-${size}`]: size,
  });
  const renderTitle = (overlayPrefix: any) =>
    title && (
      <div className={`${overlayPrefix}-title`}>
        <span>{title}</span>
      </div>
    );

  const renderCustomOverlay = () => {
    const overlayPrefix = `${popOverCls}-customOverlay`;
    return (
      <div className={overlayPrefix}>
        {renderTitle(overlayPrefix)}
        <div className={`${overlayPrefix}-content`}>
          <span>{content}</span>
        </div>
      </div>
    );
  };

  return (
    <Tooltip
      ref={ref}
      prefixCls={popOverCls}
      overlayClassName={overlayCls}
      overlayInnerStyle={
        typeof width !== 'undefined'
          ? {
              width,
              maxWidth: 'none',
              ...overlayInnerStyle,
            }
          : overlayInnerStyle
      }
      overlay={renderCustomOverlay()}
      {...resetProps}
    />
  );
});

Popover.defaultProps = {
  white: true,
};

export default Popover;
