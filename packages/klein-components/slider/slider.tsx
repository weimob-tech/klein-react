import React from 'react';
import classNames from 'classnames';
import type { SliderProps as RcSliderProps } from '../components/rc-slider';
import RcSlider from '../components/rc-slider';
import { cloneElement, tuple as tupleString } from '../utils/ReactNodeValidate';
import { ConfigContext } from '../config-provider/context';

import warning from '../components/rc-util/warning';
import SliderTooltip from './SliderTooltip';
export type TooltipPlacement =
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
export type SliderMarks = RcSliderProps['marks'];
interface HandleGeneratorInfo {
  value?: number;
  dragging?: boolean;
  index: number;
}
export type HandleGeneratorFn = (config: {
  tooltipPrefixCls?: string;
  prefixCls?: string;
  info: HandleGeneratorInfo;
}) => React.ReactElement;

export interface SliderTooltipProps {
  prefixCls?: string;
  open?: boolean;
  placement?: TooltipPlacement;
  getPopupContainer?: (triggerNode: HTMLElement) => HTMLElement;
  formatter?: null | ((value?: number) => React.ReactNode);
}

export interface SliderBaseProps {
  prefixCls?: string;
  tooltipPrefixCls?: string;
  /**反向坐标轴 */
  reverse?: boolean;
  /**最小值 */
  min?: number;
  /**最大值 */
  max?: number;
  /**步长，取值必须大于 0，并且可被 (max - min) 整除。当 marks 不为空对象时，可以设置 step 为 null，此时 Slider 的可选值仅有 marks 标出来的部分 */
  step?: null | number;
  /**刻度标记，key 的类型必须为 number 且取值在闭区间 [min, max] 内，每个标签可以单独设置样式 */
  marks?: SliderMarks; //SliderMarks;
  /**是否只能拖拽到刻度上 */
  dots?: boolean;
  /**marks 不为空对象时有效，值为 true 时表示值为包含关系，false 表示并列 */
  included?: boolean;
  /**值为 true 时，滑块为禁用状态 */
  disabled?: boolean;
  /**值为 true 时，Slider 为垂直方向 */
  vertical?: boolean;
  tipFormatter?: null | ((value?: number) => React.ReactNode);
  className?: string;
  id?: string;
  style?: React.CSSProperties;
  tooltipVisible?: boolean;
  tooltipPlacement?: TooltipPlacement;
  /**设置 Tooltip 相关属性 */
  tooltip?: SliderTooltipProps;
  /**Tooltip 渲染父节点，默认渲染到 body 上 */
  getTooltipPopupContainer?: (triggerNode: HTMLElement) => HTMLElement;
  autoFocus?: boolean;
}

export interface SliderSingleProps extends SliderBaseProps {
  /**双滑块模式 */
  range?: false;
  value?: number;
  /** 设置初始取值。当 range 为 false 时，使用 number，否则用 [number, number] */
  defaultValue?: number;
  onChange?: (value: number) => void;
  onAfterChange?: (value: number) => void;
  handleStyle?: React.CSSProperties;
  trackStyle?: React.CSSProperties;
}
export interface SliderRangeProps extends SliderBaseProps {
  range: true | SliderRange;
  /**设置当前取值。当 range 为 false 时，使用 number，否则用 [number, number] */
  value?: [number, number] | number;
  defaultValue?: [number, number];
  /**当 Slider 的值发生改变时，会触发 onChange 事件，并把改变后的值作为参数传入 */
  onChange?: (value: [number, number]) => void;
  /**与 onmouseup 触发时机一致，把当前值作为参数传入 */
  onAfterChange?: (value: [number, number]) => void;
  handleStyle?: React.CSSProperties[];
  trackStyle?: React.CSSProperties[];
}

export interface SliderRange {
  /**范围刻度是否可被拖拽 */
  draggableTrack?: boolean;
}
export type Opens = Record<number, boolean>;

const Slider = React.forwardRef<unknown, SliderRangeProps | SliderSingleProps>(
  (props, ref: any) => {
    const {
      getPrefixClassName,
      direction,
      getPopupContainer,
    } = React.useContext(ConfigContext);

    const [opens, setOpens] = React.useState<Opens>({});

    const toggleTooltipOpen = (index: number, open: boolean) => {
      setOpens((prev: Opens) => ({ ...prev, [index]: open }));
    };

    const getTooltipPlacement = (
      tooltipPlacement?: TooltipPlacement,
      vertical?: boolean,
    ) => {
      if (tooltipPlacement) {
        return tooltipPlacement;
      }
      if (!vertical) {
        return 'top';
      }
      return direction === 'rtl' ? 'left' : 'right';
    };

    const {
      prefixCls: customizePrefixCls,
      range,
      className,
      onChange,
      onAfterChange,
      ...restProps
    } = props;
    const prefixCls = getPrefixClassName('slider', customizePrefixCls);
    const cls = classNames(className, {
      [`${prefixCls}-rtl`]: direction === 'rtl',
    });

    // make reverse default on rtl direction
    if (direction === 'rtl' && !restProps.vertical) {
      restProps.reverse = !restProps.reverse;
    }

    // Range config
    const [mergedRange, draggableTrack] = React.useMemo(() => {
      if (!range) {
        return [false];
      }

      return typeof range === 'object'
        ? [true, range.draggableTrack]
        : [true, false];
    }, [range]);

    // Warning for deprecated usage
    if (process.env.NODE_ENV !== 'production') {
      [
        ['tooltipPrefixCls', 'prefixCls'],
        ['getTooltipPopupContainer', 'getPopupContainer'],
        ['tipFormatter', 'formatter'],
        ['tooltipPlacement', 'placement'],
        ['tooltipVisible', 'open'],
      ].forEach(([deprecatedName]) => {
        warning(!(deprecatedName in props), 'Slider');
      });
    }

    const handleRender: RcSliderProps['handleRender'] = (node, info) => {
      const { index, dragging } = info;

      // const rootPrefixCls = getPrefixClassName(); // getPrefixCls();
      const { tooltip = {}, vertical } = props;

      const tooltipProps: SliderTooltipProps = {
        formatter:
          props.tipFormatter ??
          // eslint-disable-next-line func-names
          function (value) {
            return typeof value === 'number' ? value.toString() : '';
          },
        open: props.tooltipVisible,
        placement: props.tooltipPlacement,
        getPopupContainer: props.getTooltipPopupContainer,
        ...tooltip,
      };

      const {
        open: tooltipOpen,
        placement: tooltipPlacement,
        getPopupContainer: getTooltipPopupContainer,
        prefixCls: customizeTooltipPrefixCls,
        formatter: tipFormatter,
      } = tooltipProps;

      const isTipFormatter = tipFormatter ? opens[index] || dragging : false;
      const open = tooltipOpen || (tooltipOpen === undefined && isTipFormatter);

      const passedProps = {
        ...node.props,
        onMouseEnter: () => toggleTooltipOpen(index, true),
        onMouseLeave: () => toggleTooltipOpen(index, false),
      };

      // const tooltipPrefixCls = getPrefixCls('tooltip', customizeTooltipPrefixCls);
      const tooltipPrefixCls = getPrefixClassName(
        'tooltip',
        customizeTooltipPrefixCls,
      );

      return (
        <SliderTooltip
          prefixCls={tooltipPrefixCls}
          title={tipFormatter ? tipFormatter(info.value) : ''}
          open={open}
          placement={getTooltipPlacement(tooltipPlacement, vertical)}
          // transitionName={`${rootPrefixCls}-zoom-down`}
          key={index}
          overlayClassName={`${prefixCls}-tooltip`}
          getPopupContainer={getTooltipPopupContainer || getPopupContainer}
        >
          {cloneElement(node, passedProps)}
        </SliderTooltip>
      );
    };

    return (
      <RcSlider
        {...(restProps as SliderRangeProps)}
        // {...restProps}
        onChange={onChange as (value: number | number[]) => void}
        onAfterChange={onAfterChange as (value: number | number[]) => void}
        step={restProps.step!}
        range={mergedRange}
        draggableTrack={draggableTrack}
        className={cls}
        ref={ref}
        prefixCls={prefixCls}
        handleRender={handleRender}
      />
    );
  },
);

Slider.displayName = 'Slider';
Slider.defaultProps = {
  defaultValue: 0,
  disabled: false,
  dots: false,
  getTooltipPopupContainer: () => document.body,
  included: true,
  max: 100,
  min: 0,
  range: false,
  reverse: false,
  step: 1,
  vertical: false,
};

export default Slider;
