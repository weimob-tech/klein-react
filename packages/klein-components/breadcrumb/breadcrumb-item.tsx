import React, { useContext } from 'react';
import { ConfigContext } from '../config-provider/context';
import Dropdown from '../dropdown';
import Icon from '../icon';
// import classNames from 'classnames';

const { DownLine } = Icon;

export interface BreadcrumbItemProps {
  prefixCls?: string;
  separator?: React.ReactNode;
  href?: string;
  overlay?: any;
  dropdownProps?: any;
  onClick?: React.MouseEventHandler<HTMLAnchorElement | HTMLSpanElement>;
  className?: string;
}
interface BreadcrumbItemInterface extends React.FC<BreadcrumbItemProps> {
  // _klein_BREADCRUMB_ITEM: boolean;
}
const BreadcrumbItem: BreadcrumbItemInterface = ({
  separator = '/',
  children,
  overlay,
  dropdownProps,
  ...restProps
}) => {
  const { getPrefixClassName } = useContext(ConfigContext);
  const prefixCls = getPrefixClassName('bread-crumb');
  const renderBreadcrumbNode = (breadcrumbItem: React.ReactNode) => {
    if (overlay) {
      return (
        <Dropdown overlay={overlay} placement="bottomCenter" {...dropdownProps}>
          <span className={`${prefixCls}-overlay-link`}>
            {breadcrumbItem}
            <DownLine style={{ marginLeft: 4 }} />
          </span>
        </Dropdown>
      );
    }
    return breadcrumbItem;
  };

  let link;
  if ('href' in restProps) {
    link = (
      <a className={`${prefixCls}-link`} {...restProps}>
        {children}
      </a>
    );
  } else {
    link = (
      <span className={`${prefixCls}-link`} {...restProps}>
        {children}
      </span>
    );
  }

  // wrap to dropDown
  link = renderBreadcrumbNode(link);
  if (children) {
    return (
      <span>
        {link}
        {separator && separator !== '' && (
          <span className={`${prefixCls}-separator`}>{separator}</span>
        )}
      </span>
    );
  }
  return null;
};

// BreadcrumbItem._klein_BREADCRUMB_ITEM = true;

export default BreadcrumbItem;
