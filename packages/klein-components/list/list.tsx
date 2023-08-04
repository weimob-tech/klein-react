// import useMemo from '@/components/rc-util/hooks/useMemo';
import React from 'react';
import { ConfigContext } from '../config-provider/context';
import ListItem from './list-item';
import Pagination from '../pagination/index';

// interface renderItemProps {
//   title?: string;
//   describe?: string;
//   avatar: string;
//   content: string;
// }
export interface ListProps {
  /** 列表数据源 */
  dataSource?: any[];
  /** 设置 List.Item 布局, 设置成 vertical 则竖直样式显示, 默认横排 */
  itemLayout?: 'horizontal' | 'vertical';
  /** 加载更多 */
  loadMore?: React.ReactNode;
  /** 对应的 pagination 配置, 设置 false 不显示 */
  pagination?: object;
  /** 当 renderItem 自定义渲染列表项有效时，自定义每一行的 key 的获取方式 */
  renderItem?: (item?: any) => React.ReactNode;
  /** list 的尺寸 */
  size?: 'default' | 'large' | 'small';
  /** 是否展示分割线 */
  split?: boolean;
  /** 列表方向 */
  direction?: 'horizontal' | 'vertical';
  /** 自定义空状态 */
  locale?: React.ReactNode;
}
interface ListConsumerProps {
  direction?: string;
  split?: boolean;
  itemLayout?: string;
  size?: 'default' | 'large' | 'small';
}
export const ListContext = React.createContext<ListConsumerProps>({});

const ListHoc: React.ForwardRefRenderFunction<HTMLDivElement, ListProps> = (
  props,
  ref,
) => {
  const {
    dataSource,
    renderItem,
    split,
    direction,
    pagination,
    loadMore,
    itemLayout,
    size,
    locale,
  } = props;
  const { getPrefixClassName } = React.useContext(ConfigContext);
  const listPrefix = getPrefixClassName('list');

  const renderEmptyFunc = (prefixCls: string) => (
    <div className={`${prefixCls}-empty`}>{locale}</div>
  );

  return (
    <ListContext.Provider value={{ itemLayout, size, direction, split }}>
      <div ref={ref} className={`${listPrefix}-container`}>
        {(dataSource as any).length > 0 ? (
          <div className={`${listPrefix}-list ${direction}`}>
            {dataSource?.map((item) => {
              return renderItem?.(item);
            })}
          </div>
        ) : (
          renderEmptyFunc(listPrefix)
        )}

        {pagination && (
          <div className={`${listPrefix}-pagination`}>
            <Pagination {...pagination} />
          </div>
        )}
        {!pagination && loadMore}
      </div>
    </ListContext.Provider>
  );
};

interface compoundedProps
  extends React.ForwardRefExoticComponent<
    ListProps & React.RefAttributes<HTMLDivElement>
  > {
  Item: typeof ListItem;
}
const List = React.forwardRef<any, ListProps>(ListHoc) as compoundedProps;
List.Item = ListItem;

List.defaultProps = {
  dataSource: [],
  itemLayout: 'horizontal',
  size: 'default',
  split: true,
  direction: 'vertical',
};
export default List;
