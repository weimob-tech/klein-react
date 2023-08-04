import React from 'react';
import classNames from 'classnames';
import { RcPagination } from '../components';
import { ConfigContext } from '../config-provider/context';
import Icon from '../icon';
import Select from '../select';
import MiniSelect from './MiniSelect';

const {
  LeftLine,
  RightLine,
  DoubleLeftLine,
  DoubleRightLine,
  EllipsisLine,
} = Icon;

export interface PaginationProps {
  /** 分页按钮数量 配置此项会固定显示分页按钮 */
  footerCount?: number;
  /** 大小 */
  size?: 'default' | 'mini' | 'small';
  /** 当前页 */
  current?: number;
  /** 默认每页条数 */
  defaultPageSize?: number;
  /** 每页多少条 */
  pageSize?: number;
  /** 是否禁用 */
  disabled?: boolean;
  /** 是否可以快速跳转至某页 */
  showQuickJumper?: boolean;
  /** 数据总数 */
  total?: number;
  /** 当添加该属性时，显示为简单分页 */
  simple?: boolean;
  /** 可用于自定义修改page的前一页，后一页，前5页，后5页的元素内容 */
  itemRender?: (
    page: number,
    type: 'page' | 'prev' | 'next' | 'jump-prev' | 'jump-next',
    originalElement: React.ReactNode,
  ) => React.ReactNode;
  /** 用于显示数据总量和当前数据顺序 */
  showTotal?: (total: number, range: number[]) => React.ReactNode;
  /** 页码改变的回调，参数是改变后的页码及每页条数 */
  onChange?: (page: number, pageSize: number) => void;
  /** 自定义样式类 */
  className?: string;
  /** TODO 依赖Select组件 是否展示 pageSize 切换器，当 total 大于 50 时默认为 true */
  showSizeChanger?: boolean;
  getSizeChangerContainer?: (node?: HTMLElement) => HTMLElement;
  /** TODO pageSize变化的回调 */
  onShowSizeChange?: (current?: number, size?: number) => void;
  /** 只有一页时是否隐藏分页器 */
  hideOnSinglePage?: boolean;
  /** 指定每页可以显示多少条 */
  pageSizeOptions?: number[];
  /** 是否显示较少页面内容 */
  showLessItems?: boolean;
  /** 配合showLessItems使用，只显示选中项间隔为1的左右两项，不包含首页和末尾页 */
  leftRightItemOne?: boolean;
  // selectPrefixCls?: string;
}

const getIconsProps = (prefixCls: string) => {
  const ellipsis = (
    <span className={`${prefixCls}-item-ellipsis`}>
      <EllipsisLine />
    </span>
  );
  const prevIcon = (
    <button className={`${prefixCls}-item-link`} type="button" tabIndex={-1}>
      <LeftLine className={`${prefixCls}-item-link-icon`} />
    </button>
  );
  const nextIcon = (
    <button className={`${prefixCls}-item-link`} type="button" tabIndex={-1}>
      <RightLine className={`${prefixCls}-item-link-icon`} />
    </button>
  );
  const jumpPrevIcon = (
    <a className={`${prefixCls}-item-link`}>
      <div className={`${prefixCls}-item-container`}>
        <DoubleLeftLine className={`${prefixCls}-item-link-icon`} />
        {ellipsis}
      </div>
    </a>
  );
  const jumpNextIcon = (
    <a className={`${prefixCls}-item-link`}>
      <div className={`${prefixCls}-item-container`}>
        <DoubleRightLine className={`${prefixCls}-item-link-icon`} />
        {ellipsis}
      </div>
    </a>
  );

  return {
    prevIcon,
    nextIcon,
    jumpPrevIcon,
    jumpNextIcon,
  };
};

const Pagination = React.forwardRef<unknown, PaginationProps>((props, ref) => {
  const { className, size, simple } = props;
  const { getPrefixClassName } = React.useContext(ConfigContext);
  const paginationCls = getPrefixClassName('pagination');
  const selectPrefixCls = getPrefixClassName('select');
  // const isMini = size === 'mini' || size === 'small';
  const isMini = size === 'mini' || size === 'small' || simple; // 如果要求simple时要展示mini效果，则用这一行
  const endCls = classNames(className, {
    [`${paginationCls}-mini`]: isMini,
    // [`${paginationCls}-disabled`]: disabled,
  });
  const comProps = {
    ...props,
    className: endCls,
  };

  return (
    <RcPagination
      ref={ref}
      prefixCls={paginationCls}
      selectPrefixCls={selectPrefixCls}
      {...comProps}
      {...getIconsProps(paginationCls)}
      selectComponentClass={isMini ? MiniSelect : Select}
    />
  );
});
Pagination.displayName = 'Pagination';
Pagination.defaultProps = {
  size: 'default',
  defaultPageSize: 10,
  disabled: false,
  showQuickJumper: false,
  total: 0,
  simple: false,
  hideOnSinglePage: false,
};

export default Pagination;
