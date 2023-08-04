import React from 'react';
import { ConfigContext } from '../config-provider/context';
import { ListContext } from './list';

export interface ListItemProps {
  /** 列表操作组，根据 itemLayout 的不同, 位置在卡片底部或者最右侧 */
  actions?: React.ReactNode[];
  /** 额外内容, 通常用在 itemLayout 为 vertical 的情况下, 展示右侧内容; horizontal 展示在列表元素最右侧 */
  extra?: React.ReactNode;
  children?: React.ReactNode;
}

const ListItemHoc: React.ForwardRefRenderFunction<
  HTMLDivElement,
  ListItemProps
> = (props, ref) => {
  const { actions, extra, children } = props;

  const { itemLayout, size, direction, split } = React.useContext(ListContext);
  const { getPrefixClassName } = React.useContext(ConfigContext);
  const listItemPrefix = getPrefixClassName('list-item');

  return (
    <div
      ref={ref}
      className={`${listItemPrefix}-container ${size} ${itemLayout} list-${direction} ${
        split && 'split'
      }`}
    >
      <div className={`${listItemPrefix}-content`}>
        <div className={`${listItemPrefix}-slots`}>{children}</div>
        {actions && actions.length > 0 ? (
          <div className={`${listItemPrefix}-actions`}>
            {actions.map((item) => (
              <div className={`${listItemPrefix}-actions-item`}>{item}</div>
            ))}
          </div>
        ) : null}
      </div>
      {extra && <div className={`${listItemPrefix}-extra`}>{extra}</div>}
    </div>
  );
};

interface metaProps {
  avatar?: string | React.ReactNode;
  description?: string | React.ReactNode;
  title?: string | React.ReactNode;
}
const Meta = React.forwardRef<any, metaProps>((props, ref) => {
  const { avatar, description, title } = props;
  const { getPrefixClassName } = React.useContext(ConfigContext);
  const listItemMetaPrefix = getPrefixClassName('list-item-meta');

  return (
    <div ref={ref} className={`${listItemMetaPrefix}-container`}>
      <div className={`${listItemMetaPrefix}-avatar`}>
        {typeof avatar === 'string' ? <img src="" alt="" /> : avatar}
      </div>
      <div className={`${listItemMetaPrefix}-content`}>
        <div className={`${listItemMetaPrefix}-title`}>{title}</div>
        <div className={`${listItemMetaPrefix}-description`}>{description}</div>
      </div>
    </div>
  );
});

Meta.defaultProps = {
  avatar: '',
  description:
    '中列表，进店规则禁用于多网店模式和导流模式，单网店模式下，用户进入商家店铺',
  title: '列表标题',
};

interface cardProps {
  title?: string;
  children?: React.ReactNode;
}
const Card = React.forwardRef<any, cardProps>((props, ref) => {
  const { title, children } = props;
  const { getPrefixClassName } = React.useContext(ConfigContext);
  const listItemMetaPrefix = getPrefixClassName('list-item-card');

  return (
    <div ref={ref} className={`${listItemMetaPrefix}-container`}>
      <div className={`${listItemMetaPrefix}-title`}>{title}</div>
      <div className={`${listItemMetaPrefix}-content`}>{children}</div>
    </div>
  );
});

Card.defaultProps = {};

interface CompoundedPros
  extends React.ForwardRefExoticComponent<
    ListItemProps & React.RefAttributes<HTMLDivElement>
  > {
  Meta: typeof Meta;
  Card: typeof Card;
}
const ListItem = React.forwardRef<any, ListItemProps>(
  ListItemHoc,
) as CompoundedPros;

ListItem.Meta = Meta;
ListItem.Card = Card;
ListItem.defaultProps = {};
export default ListItem;
