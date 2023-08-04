import * as React from 'react';
import classNames from 'classnames';
import RcDropdown from '../components/rc-dropdown';
import { cloneElement, tuple as tupleString } from '../utils/ReactNodeValidate';
import { ConfigContext } from '../config-provider/context';
import { Icons } from '../components';

const { RightLine } = Icons;
const Placements = tupleString(
  'topLeft',
  'topCenter',
  'topRight',
  'bottomLeft',
  'bottomCenter',
  'bottomRight',
);

type Placement = typeof Placements[number];

type OverlayFunc = () => React.ReactElement;

type Align = {
  points?: string[];
  offset?: number[];
  targetOffset?: number[];
  overflow?: {
    adjustX?: boolean;
    adjustY?: boolean;
  };
  useCssRight?: boolean;
  useCssBottom?: boolean;
  useCssTransform?: boolean;
};

export interface DropDownProps {
  /** 是否有箭头 */
  arrow?: boolean;
  /** 触发方式 */
  trigger?: ('click' | 'hover' | 'contextMenu')[];
  /** 下拉框的内容 @link="React.ReactElement|()=>React.ReactElement" */
  overlay: React.ReactElement | OverlayFunc;
  /** 是否有下划线 */
  hasBottomLine?: boolean;
}
export interface OtherProps {
  /** 显示隐藏时的回调 */
  onVisibleChange?: (visible: boolean) => void;
  /** 控制显示隐藏 */
  visible?: boolean;
  /** 是否禁用 */
  disabled?: boolean;
  /** 菜单渲染父节点。默认渲染到 body 上。 */
  getPopupContainer?: (triggerNode: HTMLElement) => HTMLElement;
  /** 菜单弹出位置 */
  placement?: Placement;
  /** 下拉根元素的类名称 */
  overlayClassName?: string;
  /** 下拉根元素的样式 */
  overlayStyle?: React.CSSProperties;
  align?: Align;
  prefixCls?: string;
  className?: string;
  transitionName?: string;
  forceRender?: boolean;
  mouseEnterDelay?: number;
  mouseLeaveDelay?: number;
  openClassName?: string;
}
type allProps = OtherProps & DropDownProps;
const Dropdown: React.FC<allProps> = (props) => {
  const {
    getPrefixClassName,
    getPopupContainer: getCtxPopupContainer,
  } = React.useContext(ConfigContext);
  const dropdownPrefix = getPrefixClassName('dropdown');
  const getTransitionName = () => {
    const { transitionName } = props;
    if (transitionName !== undefined) {
      return transitionName;
    }
    // if (placement.indexOf('top') >= 0) {
    //   return `${dropdownPrefix}-slide-down`;
    // }
    // return `${dropdownPrefix}-slide-up`;
  };

  const renderOverlay = () => {
    const { overlay } = props;

    let overlayNode;
    if (typeof overlay === 'function') {
      overlayNode = (overlay as OverlayFunc)();
    } else {
      overlayNode = overlay;
    }
    overlayNode = React.Children.only(
      typeof overlayNode === 'string' ? (
        <span>{overlayNode}</span>
      ) : (
        overlayNode
      ),
    );

    const overlayProps = overlayNode.props;
    const { selectable = false, focusable = true, expandIcon } = overlayProps;

    const overlayNodeExpandIcon =
      typeof expandIcon !== 'undefined' && React.isValidElement(expandIcon) ? (
        expandIcon
      ) : (
        <span className={`${dropdownPrefix}-menu-submenu-arrow`}>
          <RightLine className={`${dropdownPrefix}-menu-submenu-arrow-icon`} />
        </span>
      );

    const fixedModeOverlay =
      typeof overlayNode.type === 'string'
        ? overlayNode
        : cloneElement(overlayNode, {
            mode: 'vertical',
            selectable,
            focusable,
            expandIcon: overlayNodeExpandIcon,
          });

    return fixedModeOverlay as React.ReactElement;
  };
  const getPlacement = () => {
    const { placement } = props;
    if (placement !== undefined) {
      return placement;
    }
    // return direction === 'rtl' ? ('bottomRight' as Placement) : ('bottomLeft' as Placement);
    return 'bottomLeft';
  };

  const {
    arrow,
    children,
    trigger,
    disabled,
    getPopupContainer,
    overlayClassName,
  } = props;
  const child = React.Children.only(children) as React.ReactElement<any>;

  const dropdownTrigger = cloneElement(child, {
    className: classNames(`${dropdownPrefix}-trigger`, child.props.className),
    disabled,
  });

  const overlayClassNameCustomized = classNames(overlayClassName, {
    // [`${prefixCls}-rtl`]: direction === 'rtl',
  });

  const triggerActions = disabled ? [] : trigger;
  let alignPoint;
  if (triggerActions && triggerActions.indexOf('contextMenu') !== -1) {
    alignPoint = true;
  }

  return (
    <RcDropdown
      arrow={arrow}
      alignPoint={alignPoint}
      {...props}
      overlayClassName={overlayClassNameCustomized}
      prefixCls={dropdownPrefix}
      getPopupContainer={getPopupContainer || getCtxPopupContainer}
      transitionName={getTransitionName()}
      trigger={triggerActions}
      overlay={() => renderOverlay()}
      placement={getPlacement()}
    >
      {dropdownTrigger}
    </RcDropdown>
  );
};

// Dropdown.Button = DropdownButton;
Dropdown.displayName = 'Dropdown';
Dropdown.defaultProps = {
  mouseEnterDelay: 0.15,
  mouseLeaveDelay: 0.1,
  trigger: ['click'],
};
export default Dropdown;
