import React, { useRef } from 'react';
import classNames from 'classnames';
import { Menu as RcMenu } from '../components';
import { cloneElement, isValidElement } from '../utils/ReactNodeValidate';
import toArray from '../components/rc-util/Children/toArray';
import type { MenuClickEventHandler } from '../components/rc-menu/interface';

const { MenuItem: RcItem } = RcMenu;

export interface MenuItemProps {
  icon?: React.ReactNode;
  danger?: boolean;
  title?: React.ReactNode;
  className?: string;
  level?: number;
  rootPrefixCls?: string;
  inlineCollapsed?: boolean;
  disabled?: boolean;
  /** item 的唯一标志 */
  key?: string;
  onClick?: MenuClickEventHandler;
  onMouseEnter?: React.MouseEventHandler;
  onMouseLeave?: React.MouseEventHandler;
}

const MenuItem: React.FC<MenuItemProps> = React.forwardRef((props, ref) => {
  const {
    title,
    danger,
    children,
    className,
    level,
    rootPrefixCls,
    icon,
    inlineCollapsed,
    ...restProps
  } = props;

  const menuItemRef = (ref as any) || useRef<HTMLElement>(null);

  const renderItemChildren = (inlineCollapsedUse: boolean) => {
    if (!icon || (isValidElement(children) && children.type === 'span')) {
      if (
        children &&
        inlineCollapsedUse &&
        level === 1 &&
        typeof children === 'string'
      ) {
        return (
          <div className={`${rootPrefixCls}-inline-collapsed-noicon`}>
            {children.charAt(0)}
          </div>
        );
      }
      return children;
    }
    return <span>{children}</span>;
  };

  const childrenLength = toArray(children).length;

  const endCls = classNames(
    {
      [`${rootPrefixCls}-item-danger`]: danger,
      [`${rootPrefixCls}-item-only-child`]:
        (icon ? childrenLength + 1 : childrenLength) === 1,
    },
    className,
  );
  const comProps = {
    ref: menuItemRef,
    title,
    level,
    rootPrefixCls,
    className: endCls,
    inlineCollapsed,
    ...restProps,
  };

  return (
    <RcItem {...comProps}>
      {cloneElement(icon, {
        className: classNames(
          isValidElement(icon) ? icon.props?.className : '',
          `${rootPrefixCls}-item-icon`,
        ),
      })}
      {renderItemChildren(inlineCollapsed as boolean)}
    </RcItem>
  );
});

export default MenuItem;
