import React, { useRef } from 'react';
import classNames from 'classnames';
import { Menu as RcMenu } from '../components';
import { isValidElement } from '../utils/ReactNodeValidate';
import MenuContext from './MenuContext';
import omit from '../components/rc-util/omit';
import Icon from '../icon';

const { SubMenu: RcSubMenu } = RcMenu;

const { DownLine } = Icon;

interface TitleEventEntity {
  key: string;
  domEvent: Event;
}

export interface SubMenuProps {
  rootPrefixCls?: string;
  className?: string;
  disabled?: boolean;
  level?: number;
  title?: React.ReactNode;
  icon?: React.ReactNode;
  style?: React.CSSProperties;
  onTitleClick?: (e: TitleEventEntity) => void;
  onTitleMouseEnter?: (e: TitleEventEntity) => void;
  onTitleMouseLeave?: (e: TitleEventEntity) => void;
  popupOffset?: [number, number];
  popupClassName?: string;
}

export const SubMenu: React.FC<SubMenuProps> = React.forwardRef<
  unknown,
  SubMenuProps
>((props, ref) => {
  const renderTitle = (inlineCollapsed: boolean) => {
    const { icon, title, level, rootPrefixCls } = props;

    if (!icon) {
      return inlineCollapsed &&
        level === 1 &&
        title &&
        typeof title === 'string' ? (
        <div className={`${rootPrefixCls}-inline-collapsed-noicon`}>
          {title.charAt(0)}
        </div>
      ) : (
        <>
          {title}
          {
            <DownLine
              className={`${rootPrefixCls}-submenu-arrowicon`}
             />
          }
        </>
      );
    }
    const titleIsSpan = isValidElement(title) && title.type === 'span';
    return (
      <>
        {icon}
        {titleIsSpan ? title : <span>{title}</span>}
        {<DownLine className={`${rootPrefixCls}-submenu-arrowicon`} />}
      </>
    );
  };
  const subMenuRef = (ref as any) || useRef<HTMLElement>(null);
  const { rootPrefixCls, popupClassName } = props;

  return (
    <MenuContext.Consumer>
      {({ kleinMenuTheme, inlineCollapsed }) => (
        <RcSubMenu
          ref={subMenuRef}
          {...omit(props, ['icon'])}
          title={renderTitle(inlineCollapsed)}
          popupClassName={classNames(
            rootPrefixCls,
            `${rootPrefixCls}-${kleinMenuTheme}`,
            popupClassName,
          )}
         />
      )}
    </MenuContext.Consumer>
  );
});
