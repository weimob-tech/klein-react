// @ts-nocheck
import * as React from 'react';
import { useRef, useImperativeHandle, forwardRef } from 'react';
import Trigger, { TriggerProps } from '../rc-trigger';
import { AlignType, AnimationType, ActionType } from '../rc-trigger/interface';
import { placements } from './placements';
import Content from './Content';

export interface TooltipProps
  extends Pick<TriggerProps, 'onPopupAlign' | 'builtinPlacements'> {
  trigger?: ActionType | ActionType[];
  defaultVisible?: boolean;
  visible?: boolean;
  placement?: string;
  transitionName?: string;
  animation?: AnimationType;
  onVisibleChange?: (visible: boolean) => void;
  afterVisibleChange?: (visible: boolean) => void;
  overlay: (() => React.ReactNode) | React.ReactNode;
  overlayStyle?: React.CSSProperties;
  overlayClassName?: string;
  prefixCls?: string;
  mouseEnterDelay?: number;
  mouseLeaveDelay?: number;
  getTooltipContainer?: (node: HTMLElement) => HTMLElement;
  destroyTooltipOnHide?:
    | boolean
    | {
        keepParent?: boolean;
      };
  align?: AlignType;
  arrowContent?: React.ReactNode;
  id?: string;
  children?: React.ReactElement;
  popupVisible?: boolean;
  overlayInnerStyle?: React.CSSProperties;
  monitorWindowResize?: boolean;
}

const Tooltip = (props: TooltipProps, ref) => {
  const {
    overlayClassName,
    trigger = ['hover'],
    mouseEnterDelay = 0,
    mouseLeaveDelay = 0.1,
    overlayStyle,
    prefixCls = 'rc-tooltip',
    children,
    onVisibleChange,
    afterVisibleChange,
    transitionName,
    animation,
    placement = 'right',
    align = {},
    destroyTooltipOnHide = false,
    defaultVisible,
    getTooltipContainer,
    overlayInnerStyle,
    monitorWindowResize,
    ...restProps
  } = props;

  const domRef = useRef(null);
  useImperativeHandle(ref, () => domRef.current);

  const extraProps = { ...restProps };
  if ('visible' in props) {
    extraProps.popupVisible = props.visible;
  }

  const getPopupElement = () => {
    const { arrowContent = null, overlay, id } = props;
    return [
      <div className={`${prefixCls}-arrow`} key="arrow">
        {arrowContent}
      </div>,
      <Content
        key="content"
        prefixCls={prefixCls}
        id={id}
        overlay={overlay}
        overlayInnerStyle={overlayInnerStyle}
      />,
    ];
  };

  let destroyTooltip = false;
  let autoDestroy = false;
  if (typeof destroyTooltipOnHide === 'boolean') {
    destroyTooltip = destroyTooltipOnHide;
  } else if (destroyTooltipOnHide && typeof destroyTooltipOnHide === 'object') {
    const { keepParent } = destroyTooltipOnHide;
    destroyTooltip = keepParent === true;
    autoDestroy = keepParent === false;
  }

  return (
    <Trigger
      popupClassName={overlayClassName}
      prefixCls={prefixCls}
      popup={getPopupElement}
      action={trigger}
      builtinPlacements={placements}
      popupPlacement={placement}
      ref={domRef}
      popupAlign={align}
      getPopupContainer={getTooltipContainer}
      onPopupVisibleChange={onVisibleChange}
      afterPopupVisibleChange={afterVisibleChange}
      popupTransitionName={transitionName}
      popupAnimation={animation}
      defaultPopupVisible={defaultVisible}
      destroyPopupOnHide={destroyTooltip}
      autoDestroy={autoDestroy}
      mouseLeaveDelay={mouseLeaveDelay}
      popupStyle={overlayStyle}
      mouseEnterDelay={mouseEnterDelay}
      monitorWindowResize={monitorWindowResize}
      {...extraProps}
    >
      {children}
    </Trigger>
  );
};

export default forwardRef(Tooltip);
