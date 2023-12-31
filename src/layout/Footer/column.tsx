import React from 'react';
import classNames from 'classnames';

export interface FooterColumnItem {
  title: React.ReactNode;
  url?: string;
  openExternal?: boolean;
  icon?: React.ReactNode;
  description?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  LinkComponent?: any;
}

export interface FooterColumn {
  prefixCls?: string;
  title?: React.ReactNode;
  icon?: React.ReactNode;
  items?: FooterColumnItem[];
  className?: string;
  style?: React.CSSProperties;
}

const Column: React.FC<FooterColumn> = ({
  prefixCls,
  icon,
  title,
  items = [],
  style,
  className,
}) => (
  <div className={classNames(`${prefixCls}-column`, className)} style={style}>
    {(title || icon) && (
      <h2>
        {icon && <span className={`${prefixCls}-column-icon`}>{icon}</span>}
        {title}
      </h2>
    )}
    {items.map((item, i) => {
      const LinkComponent = item.LinkComponent || (item.url ? 'a' : 'a');
      return (
        <div
          className={classNames(`${prefixCls}-item`, item.className)}
          style={item.style}
          key={i}
        >
          <LinkComponent
            href={item.url ? item.url : null}
            to={typeof LinkComponent !== 'string' ? item.url : undefined}
            target={item.openExternal ? '_blank' : undefined}
            rel={item.openExternal ? 'noopener noreferrer' : undefined}
          >
            {item.icon && (
              <span className={`${prefixCls}-item-icon`}>{item.icon}</span>
            )}
            {item.title}
            {item.url ? null : <div className={`${prefixCls}-waiting`}>敬请期待</div>}
          </LinkComponent>
          {item.description && (
            <>
              <span className={`${prefixCls}-item-separator`}>-</span>
              <span className={`${prefixCls}-item-description`}>
                {item.description}
              </span>
            </>
          )}
        </div>
      );
    })}
  </div>
);

export default Column;
