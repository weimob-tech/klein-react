import React, { useContext } from 'react';
import cln from 'classnames';
import { ConfigContext } from '../config-provider/context';
import type {
  TabsProps as RcTabsProps} from '../components/rc-tabs';
import RcTabs, {
  TabPane,
  TabPaneProps
} from '../components/rc-tabs';
import type { EditableConfig } from '../components/rc-tabs/interface';
import Icon from '../icon';

const { DownLine, DeleteLine, CloseLine, PlusLine } = Icon;

export interface TabsProps {
  /** 当前激活 tab 面板的 key */
  activeKey?: string | number;
  /** 尺寸 */
  size?: 'small' | 'middle' | 'large';
  /** 默认激活 tab 面板的 key */
  defaultActiveKey?: string;
  /** 改变回调 */
  onChange?: (activeKey: string | number) => void;
  /** 点击回调 */
  onTabClick?: (activeKey: string | number) => void;
  /** 页签的基本样式，可选 line、card 类型 */
  type?: 'line' | 'card';
  /** 自定义折叠 icon */
  moreIcon?: React.ReactNode;
  /* eslint-disable no-tabs */
  /** 替换TabBar，用于二次封装标签头	@link="`(props: any, DefaultTabBar: React.ComponentType) => React.ReactElement`" */
  renderTabBar?: RcTabsProps['renderTabBar'];
  /** 控制是否显示tabs下的横线 */
  tabLine?: boolean;
  /** tabpane是否允许新增删除 */
  editable?: boolean;
  /** 是否隐藏添加按钮 */
  hideAdd?: boolean;
  /** 自定义新增icon */
  addIcon?: React.ReactNode;
  /** 删除icon是否hover展示 */
  isHoverClose?: boolean;
  /** 自定义删除icon */
  deleteIcon?: React.ReactNode;
  /** 被隐藏时是否销毁 DOM 结构 */
  destroyInactiveTabPane?: boolean;
  className?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  /** 新增和删除页签的回调，仅在editable为true时有效 */
  onEdit?: (
    e: React.MouseEvent | React.KeyboardEvent | string,
    action: 'add' | 'remove',
  ) => void;
  getPopupContainer?: (node?: React.ReactElement) => React.ReactElement;
}

export { TabPaneProps };

const Tabs = React.forwardRef<unknown, TabsProps>(
  (
    {
      activeKey,
      className,
      type = 'line',
      moreIcon,
      hideAdd,
      size: customSize,
      tabLine,
      editable,
      addIcon,
      deleteIcon,
      onEdit,
      isHoverClose,
      getPopupContainer: outerGetPopupContainer,
      ...resetProps
    },
    ref,
  ) => {
    const tabRef = (ref as any) || React.useRef<HTMLElement>(null);
    const { getPrefixClassName, size, getPopupContainer } = useContext(
      ConfigContext,
    );
    const tabsPrefix = getPrefixClassName('tabs');
    const endSize = customSize || size;

    let editableConfig: EditableConfig | undefined;
    if (editable) {
      editableConfig = {
        onEdit: (editType, { key, event }) => {
          onEdit?.(editType === 'add' ? event : key!, editType);
        },
        removeIcon:
          deleteIcon || (type === 'line' ? <DeleteLine /> : <CloseLine />),
        addIcon: addIcon || <PlusLine />,
        showAdd: hideAdd !== true,
      };
    }

    const rcActiveKey = (activeKey as string)?.toString();
    const getSizeSuffixCls = () => {
      if (endSize === 'small') return 'sm';
      if (endSize === 'large') return 'lg';
      return '';
    };
    const sizeSuffixCls = getSizeSuffixCls();
    const endClassName = cln(
      {
        [`${tabsPrefix}-card`]: ['card'].includes(type as string),
        [`${tabsPrefix}-${sizeSuffixCls}`]: !!sizeSuffixCls,
        [`${tabsPrefix}-bottomLine`]: tabLine,
        [`${tabsPrefix}-line`]: type === 'line',
        [`${tabsPrefix}-hover-close`]: isHoverClose,
      },
      className,
    );

    const curMoreIcon = () => {
      if (!moreIcon) {
        return (
          <>
            更多
            <DownLine style={{ marginLeft: '4px' }} />
          </>
        );
      }
      return moreIcon;
    };

    return (
      <RcTabs
        activeKey={rcActiveKey}
        ref={tabRef}
        className={endClassName}
        prefixCls={tabsPrefix}
        moreIcon={curMoreIcon()}
        editable={editableConfig}
        getPopupContainer={outerGetPopupContainer || (getPopupContainer as any)}
        {...resetProps}
      />
    );
  },
);

export default Object.assign(Tabs, { TabPane });
