import React from 'react';
import classNames from 'classnames';
import { RcTooltip } from '../components';
import { ConfigContext } from '../config-provider/context';
import type { TooltipProps as RcTooltipProps } from '../components/rc-tooltip/Tooltip';
import getTooltipPlacements from './getTooltipPlacements';

export type ReactNodeFunction = () => React.ReactNode;

export type PlacementType =
  | 'top'
  | 'left'
  | 'right'
  | 'bottom'
  | 'topLeft'
  | 'topRight'
  | 'bottomLeft'
  | 'bottomRight'
  | 'leftTop'
  | 'leftBottom'
  | 'rightTop'
  | 'rightBottom';

export interface TooltipProps {
  /** 类名前缀 */
  prefixCls?: string;
  /** 箭头是否指向元素中心 */
  arrowPointAtCenter?: boolean;
  /** 是否监听窗口变化 */
  monitorWindowResize?: boolean;
  /** 是否使用白底的提示 */
  white?: boolean;
  /** 弹出提示的类名 */
  overlayClassName?: string;
  /** 弹出提示的样式 */
  overlayStyle?: React.CSSProperties;
  overlay?: React.ReactNode;
  /** 弹出提示内容的样式 */
  overlayInnerStyle?: object;
  /** 背景颜色 */
  color?: string;
  /** 默认显示隐藏状态 */
  defaultVisible?: boolean;
  /** 显示隐藏状态 */
  visible?: boolean;
  /** 鼠标移出后延时多少才隐藏 Tooltip，单位：秒 */
  mouseLeaveDelay?: number;
  /** 鼠标移入后延时多少才显示 Tooltip，单位：秒 */
  mouseEnterDelay?: number;
  /** 标题 */
  title?: React.ReactNode;
  /** 气泡框位置 */
  placement?: PlacementType;
  /** 触发行为，可选 hover \| focus \| click \| contextMenu，可使用数组设置多个触发行为 */
  trigger?: RcTooltipProps['trigger'];
  /** 显示隐藏的回调 */
  onVisibleChange?: (visible: boolean) => void;
  /** 提示信息挂载点，默认挂载到 body 上 */
  getPopupContainer?: RcTooltipProps['getTooltipContainer'];
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

const whiteColor = '#ffffff';
const contentColor = '#262626';
const blackColor = 'rgba(0, 0, 0, 0.75)';

const Tooltip = React.forwardRef<unknown, TooltipProps>((props, ref) => {
  const {
    prefixCls,
    title,
    overlayInnerStyle,
    color,
    placement,
    children,
    trigger,
    visible,
    overlay,
    defaultVisible,
    arrowPointAtCenter,
    onVisibleChange,
    monitorWindowResize = true,
    getPopupContainer: tooltipGetPopupContainer,
    ...reset
  } = props;

  const defaultTooltipBgColor = 'white' in props ? whiteColor : blackColor;

  const [tipVisible, setTipVisible] = React.useState(
    visible === undefined ? defaultVisible : visible,
  );
  const { getPrefixClassName, getPopupContainer } = React.useContext(
    ConfigContext,
  );
  const tooltipPrefix = getPrefixClassName('tooltip', prefixCls);
  const transitionName = `${tooltipPrefix}-zoom`;
  const bgColor = color || defaultTooltipBgColor;

  if (visible !== undefined && visible !== tipVisible) {
    setTipVisible(visible);
  }

  const rcOverlayInnerStyle: any = {
    background: bgColor,
    ...overlayInnerStyle,
  };

  if ('white' in props) {
    rcOverlayInnerStyle.color = contentColor;
  }

  const arrowContent = (
    <span
      style={{
        borderTopColor: bgColor,
        color: bgColor,
      }}
      className={`${tooltipPrefix}-arrow-content`}
     />
  );

  const handleVisibleChange = (status: boolean) => {
    if (!('visible' in props)) {
      setTipVisible(status);
    }
    onVisibleChange?.(status);
  };

  return (
    <RcTooltip
      ref={ref}
      visible={tipVisible}
      prefixCls={tooltipPrefix}
      placement={placement}
      trigger={trigger}
      transitionName={transitionName}
      builtinPlacements={getTooltipPlacements(arrowPointAtCenter)}
      overlayInnerStyle={rcOverlayInnerStyle}
      overlay={overlay || title}
      arrowContent={arrowContent}
      onVisibleChange={handleVisibleChange}
      monitorWindowResize={monitorWindowResize}
      getTooltipContainer={tooltipGetPopupContainer || getPopupContainer}
      {...reset}
    >
      {parcelDisabledChild(
        React.isValidElement(children) ? children : <span>{children}</span>,
        tooltipPrefix,
      )}
    </RcTooltip>
  );
});

Tooltip.defaultProps = {
  mouseEnterDelay: 0.1,
  mouseLeaveDelay: 0.1,
  placement: 'top',
  trigger: ['hover'],
  arrowPointAtCenter: false,
};

export default Tooltip;

const splitObject = (obj: any, keys: string[]) => {
  const picked: any = {};
  const omitted: any = { ...obj };
  keys.forEach((key) => {
    if (obj && key in obj) {
      picked[key] = obj[key];
      delete omitted[key];
    }
  });
  return { picked, omitted };
};
/** 给disable的button switch checkbox包装一层，使其能正常触发事件 */
function parcelDisabledChild(
  element: React.ReactElement<any>,
  prefixCls: string,
) {
  const elementType = element.type as any;
  const disableTypes = ['Button', 'Switch', 'Checkbox'];
  if (
    (disableTypes.includes(elementType.displayName) ||
      element.type === 'button') &&
    element.props.disabled
  ) {
    const { picked, omitted } = splitObject(element.props.style, [
      'position',
      'left',
      'right',
      'top',
      'bottom',
      'float',
      'display',
      'zIndex',
    ]);
    const spanStyle = {
      display: 'inline-block',
      ...picked,
      cursor: 'not-allowed',
      width: element.props.block ? '100%' : null,
    };
    const buttonStyle = {
      ...omitted,
      pointerEvents: 'none',
    };
    const child = React.cloneElement(element, {
      style: buttonStyle,
      className: null,
    });
    return (
      <span
        style={spanStyle}
        className={classNames(
          element.props.className,
          `${prefixCls}-disabled-compatible-wrapper`,
        )}
      >
        {child}
      </span>
    );
  }
  return element;
}
