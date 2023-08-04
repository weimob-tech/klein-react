// @ts-nocheck
import React from 'react';

import classNames from 'classnames';
import useForceUpdate from '../utils/hooks/useForceUpdate';
import { ConfigContext } from '../config-provider/context';
import getScrollBarSize from '../components/rc-util/getScrollBarSize';
import Icon from '../icon';

import { RcDrawer } from '../components';

const { CloseLine } = Icon;

type getContainerFunc = () => HTMLElement;

export interface DrawerProps {
  title?: string;
  /** 关闭时销毁 Drawer 里的子元素 */
  destroyOnClose?: boolean;
  /** 是否显示右上角的关闭按钮 */
  closable?: boolean;
  /** 用于设置 Drawer 头部的样式 */
  headerStyle?: React.CSSProperties;
  /** 可用于设置 Drawer 内容部分的样式 */
  bodyStyle?: React.CSSProperties;
  /** 用于设置 Drawer 脚部的样式 */
  footerStyle?: React.CSSProperties;
  /** 可用于设置 Drawer 最外层容器的样式，包括 mask */
  style?: React.CSSProperties;
  /** Drawer 是否可见 */
  visible?: boolean;
  /** 用于设置 Drawer 弹出层的样式 */
  drawerStyle?: React.CSSProperties;
  /** 抽屉的页脚 */
  footer?: React.ReactNode;
  /** 点击遮罩层或右上角叉或取消按钮的回调 */
  onClose?: (e: any) => void;
  /** 自定义关闭图标 */
  closeIcon?: React.ReactNode;
  children?: React.ReactNode;
  push?: React.ReactNode;
  /** 是否展示遮罩 */
  mask?: boolean;
  /** 点击蒙层是否允许关闭 */
  maskClosable?: boolean;
  /** 样式名称 */
  className?: string;
  /** 样式名称 */
  size?: 'small' | 'medium' | 'large';
  /** 设置 Drawer 的 z-index */
  zIndex?: number;
  /** 是否支持键盘 esc 关闭 */
  keyboard?: boolean;
  /** 宽度 */
  width?: number | string;
  /** 在 placement 为 top 或 bottom 时使用 */
  height?: number | string;
  /** 指定 Drawer 挂载的 HTML 节点, false 为挂载在当前 dom */
  getContainer?: string | HTMLElement | getContainerFunc | false;
  /** 抽屉的方向 */
  placement?: 'top' | 'right' | 'bottom' | 'left';
  direction?: string;
  level?: string | string[] | null | undefined;
}
export interface PushState {
  distance: string | number;
}
const defaultPushState: PushState = { distance: 180 };
/* eslint-disable @typescript-eslint/method-signature-style */
type DrawerRef = {
  push(): void;
  pull(): void;
};
const DrawerContext = React.createContext<DrawerRef | null>(null);

const Drawer: React.FC<DrawerProps> = React.forwardRef<unknown, DrawerProps>(
  (props, ref) => {
    const {
      title,
      visible,
      destroyOnClose,
      drawerStyle,
      closable = true,
      headerStyle,
      footer,
      footerStyle,
      onClose,
      closeIcon = <CloseLine />,
      children,
      bodyStyle,
      placement = 'right',
      push = defaultPushState,
      mask = true,
      width,
      height,
      keyboard = true,
      zIndex,
      style,
      className,
      maskClosable = true,
      level = null,
      getContainer: drawerGetPopupContainer,
      size = 'medium',
      direction = 'rtl',
      ...rest
    } = props;
    const {
      getPrefixClassName,
      getPopupContainer,
      // direction,
    } = React.useContext(ConfigContext);

    const forceUpdate = useForceUpdate();
    const [internalPush, setPush] = React.useState(false);
    const destroyClose = React.useRef<boolean>(false);

    const drawerCls = getPrefixClassName('drawer');

    const isDestroyOnClose = destroyOnClose && !visible;

    const operations = React.useMemo(
      () => ({
        push() {
          if (push) {
            setPush(true);
          }
        },
        pull() {
          if (push) {
            setPush(false);
          }
        },
      }),
      [push],
    );

    function renderCloseIcon() {
      return (
        closable && (
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className={`${drawerCls}-close`}
            style={
              {
                '--scroll-bar': `${getScrollBarSize()}px`,
              } as any
            }
          >
            {closeIcon}
          </button>
        )
      );
    }
    function renderHeader() {
      if (!title && !closable) {
        return null;
      }

      const headerClassName = title
        ? `${drawerCls}-header`
        : `${drawerCls}-header-no-title`;
      return (
        <div className={headerClassName} style={headerStyle}>
          {title && <div className={`${drawerCls}-title`}>{title}</div>}
          {closable && renderCloseIcon()}
        </div>
      );
    }

    function renderFooter() {
      if (!footer) {
        return null;
      }

      const footerClassName = `${drawerCls}-footer`;
      return (
        <div className={footerClassName} style={footerStyle}>
          {footer}
        </div>
      );
    }
    const onDestroyTransitionEnd = () => {
      if (!isDestroyOnClose) {
        return;
      }
      if (!visible) {
        destroyClose.current = true;
        forceUpdate();
      }
    };
    // render body
    const renderBody = () => {
      if (destroyClose.current && !visible) {
        return null;
      }
      destroyClose.current = false;

      const containerStyle: React.CSSProperties = {};

      if (isDestroyOnClose) {
        // Increase the opacity transition, delete children after closing.
        containerStyle.opacity = 0;
        containerStyle.transition = 'opacity .3s';
      }
      return (
        <div
          className={`${drawerCls}-wrapper-body`}
          style={{
            ...containerStyle,
            ...drawerStyle,
          }}
          onTransitionEnd={onDestroyTransitionEnd}
        >
          {renderHeader()}
          <div className={`${drawerCls}-body`} style={bodyStyle}>
            {children}
          </div>
          {renderFooter()}
        </div>
      );
    };

    const getOffsetStyle = () => {
      if (!visible && !mask) {
        return {};
      }
      let defaultWidth;
      if (size === 'large') {
        defaultWidth = 852;
      } else if (size === 'small') {
        defaultWidth = 426;
      } else {
        defaultWidth = 640;
      }
      const offsetStyle: any = {};
      if (placement === 'left' || placement === 'right') {
        offsetStyle.width = typeof width === 'undefined' ? defaultWidth : width;
        // console.log(offsetStyle, '--------offsetStyle');
      } else {
        offsetStyle.height =
          typeof height === 'undefined' ? defaultWidth : height;
      }
      return offsetStyle;
    };

    // const getRcDrawerStyle = () => {
    //   // get drawer push width or height
    //   const getPushTransform = (_placement?: any) => {
    //     let distance: number | string;
    //     if (typeof push === 'boolean') {
    //       distance = push ? defaultPushState.distance : 0;
    //     } else {
    //       distance = push!.distance;
    //     }
    //     distance = parseFloat(String(distance || 0));

    //     if (_placement === 'left' || _placement === 'right') {
    //       return `translateX(${_placement === 'left' ? distance : -distance}px)`;
    //     }
    //     if (_placement === 'top' || _placement === 'bottom') {
    //       return `translateY(${_placement === 'top' ? distance : -distance}px)`;
    //     }
    //   };

    //   // 当无 mask 时，将 width 应用到外层容器上
    //   const offsetStyle = mask ? {} : getOffsetStyle();
    //   return {
    //     zIndex,
    //     transform: internalPush ? getPushTransform(placement) : undefined,
    //     ...offsetStyle,
    //     ...style,
    //   };
    // };

    const drawerCustomStyle = () => {
      // const offsetStyle = mask ? getOffsetStyle() : {};
      return {
        zIndex,
        // ...offsetStyle,
        ...style,
      };
    };

    const drawerClassName = classNames(
      {
        'no-mask': !mask,
        [`${drawerCls}-rtl`]: direction === 'rtl',
      },
      className,
    );

    // const offsetStyle = mask ? getOffsetStyle() : {};
    const offsetStyle = getOffsetStyle();

    return (
      <DrawerContext.Provider value={operations}>
        <RcDrawer
          handler={false}
          {...{
            placement,
            maskClosable,
            level,
            keyboard,
            children,
            onClose,
            ...rest,
          }}
          {...offsetStyle}
          open={visible}
          showMask={mask}
          prefixCls={drawerCls}
          style={drawerCustomStyle()}
          className={drawerClassName}
          ref={ref}
          getContainer={drawerGetPopupContainer || getPopupContainer}
        >
          {renderBody()}
        </RcDrawer>
      </DrawerContext.Provider>
    );
  },
);

export default Drawer;
