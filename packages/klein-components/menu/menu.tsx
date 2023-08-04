import React, { useRef } from 'react';
import classNames from 'classnames';
import { Menu as RcMenu } from '../components';
import { ConfigContext } from '../config-provider/context';
import { cloneElement } from '../utils/ReactNodeValidate';
import type { MenuTheme } from './MenuContext';
import MenuContext from './MenuContext';
import Item from './MenuItem';
import { SubMenu } from './SubMenuItem';

const MenuRC = RcMenu.default;
const { ItemGroup } = RcMenu;

export interface EventProps {
  item: React.ReactNode;
  key: React.ReactNode;
  keyPath: string[];
  selectedKeys?: string[];
  domEvent: React.MouseEvent;
}
export interface OutputMenuProps {
  /** 主题色 */
  theme?: MenuTheme;
  /** 菜单类型 */
  mode?: 'vertical' | 'horizontal' | 'inline';
  /** 自定义样式前缀 */
  prefixCls?: string;
  /** 自定义className */
  className?: string;
  /** 自定义style */
  style?: React.CSSProperties;
  /** inline 时菜单是否收起状态 */
  inlineCollapsed?: boolean;
  /** 自定义展开图标 */
  expandIcon?: React.ReactNode;
  /** 初始展开的 SubMenu 菜单项 key 数组 */
  defaultOpenKeys?: string[];
  /** 初始选中的菜单项 key 数组 */
  defaultSelectedKeys?: string[];
  /** inline 模式的菜单缩进宽度 */
  inlineIndent?: number;
  /** 当前选中的菜单项 key 数组 */
  selectedKeys?: string[];
  /** 当前展开的 SubMenu 菜单项 key 数组 */
  openKeys?: string[];
  /** 是否允许多选 */
  multiple?: boolean;
  /** SubMenu 展开/关闭的触发行为 */
  triggerSubMenuAction?: 'hover' | 'click';
  /** 点击 MenuItem 调用此函数 */
  onClick?: (e: EventProps) => void;
  /** 取消选中时调用，仅在 multiple 生效 */
  onDeselect?: (e: EventProps) => void;
  /** SubMenu 展开/关闭的回调 */
  onOpenChange?: (openKeys: string[]) => void;
  /** 被选中时调用 */
  onSelect?: (e: EventProps) => void;
}

export type MenuProps = OutputMenuProps & {
  inlineIndent?: number;
  focusable?: boolean;
  siderCollapsed?: boolean;
};

const Menu: React.FC<MenuProps> = React.forwardRef<unknown, MenuProps>(
  (props, ref) => {
    const { theme, prefixCls, className, expandIcon, ...restProps } = props;
    const { getPrefixClassName } = React.useContext(ConfigContext);
    const menuRef = (ref as any) || useRef<HTMLElement>(null);

    const menuCls = getPrefixClassName('menu', prefixCls);

    const getInlineCollapsed = () => {
      const { inlineCollapsed, siderCollapsed } = props;
      if (siderCollapsed !== undefined) {
        return siderCollapsed;
      }
      return inlineCollapsed;
    };

    const endCls = classNames(
      `${menuCls}-${theme}`,
      {
        [`${prefixCls}-inline-collapsed`]: getInlineCollapsed(),
      },
      className,
    );

    const comProps = {
      ref: menuRef,
      className: endCls,
      ...restProps,
    };

    return (
      <MenuContext.Provider
        value={{
          kleinMenuTheme: theme as MenuTheme,
          inlineCollapsed: getInlineCollapsed() || false,
        }}
      >
        <MenuRC
          prefixCls={menuCls}
          {...comProps}
          expandIcon={cloneElement(expandIcon, {
            className: `${prefixCls}-submenu-expand-icon`,
          })}
        />
      </MenuContext.Provider>
    );
  },
);

Menu.displayName = 'Menu';

Menu.defaultProps = {
  theme: 'light',
  mode: 'vertical',
  inlineIndent: 26,
  multiple: false,
};

export { Item, SubMenu, ItemGroup };
export default Menu;
