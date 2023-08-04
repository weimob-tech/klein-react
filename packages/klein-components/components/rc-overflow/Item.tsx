// @ts-nocheck
import * as React from 'react';
import classNames from 'classnames';
import ResizeObserver from '../rc-resize-observer';

export interface ItemProps<ItemType> {
  prefixCls: string;
  item?: ItemType;
  className?: string;
  style?: React.CSSProperties;
  renderItem?: (item: ItemType) => React.ReactNode;
  responsive?: boolean;
  itemKey?: React.Key;
  registerSize: (key: React.Key, width: number | null) => void;
  children?: React.ReactNode;
  display: boolean;
  order: number;
}

export default function Item<ItemType>(props: ItemProps<ItemType>) {
  const {
    prefixCls,
    item,
    renderItem,
    responsive,
    registerSize,
    itemKey,
    className,
    style,
    children,
    display,
    order,
  } = props;

  const mergedHidden = responsive && !display;

  // ================================ Effect ================================
  function internalRegisterSize(width: number | null) {
    registerSize(itemKey!, width);
  }

  React.useEffect(
    () => () => {
      internalRegisterSize(null);
    },
    [],
  );

  // ================================ Render ================================
  const childNode = item !== undefined ? renderItem!(item) : children;

  let itemNode = (
    <div
      className={classNames(prefixCls, className)}
      style={{
        opacity: mergedHidden ? 0.2 : 1,
        height: mergedHidden ? 0 : undefined,
        overflowY: mergedHidden ? 'hidden' : undefined,
        order: responsive ? order : undefined,
        pointerEvents: mergedHidden ? 'none' : undefined,
        ...style,
      }}
    >
      {childNode}
    </div>
  );

  if (responsive) {
    itemNode = (
      <ResizeObserver
        onResize={({ offsetWidth }) => {
          internalRegisterSize(offsetWidth);
        }}
      >
        {itemNode}
      </ResizeObserver>
    );
  }

  return itemNode;
}
