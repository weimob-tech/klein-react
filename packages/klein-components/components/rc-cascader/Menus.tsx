// @ts-nocheck
import * as React from 'react';
import arrayTreeFilter from 'array-tree-filter';
import { CascaderOption, CascaderFieldNames } from './Cascader';
import Checkbox from '../../checkbox';
interface MenusProps {
  value?: (string | number)[];
  activeValue?: (string | number)[];
  options?: CascaderOption[];
  prefixCls?: string;
  expandTrigger?: string;
  onSelect?: (
    targetOption: string[],
    index: number,
    e: React.KeyboardEvent<HTMLElement>,
  ) => void;
  visible?: boolean;
  dropdownMenuColumnStyle?: React.CSSProperties;
  defaultFieldNames?: CascaderFieldNames;
  fieldNames?: CascaderFieldNames;
  expandIcon?: React.ReactNode;
  loadingIcon?: React.ReactNode;
  scrollEventDelegation?: boolean;
  onItemDoubleClick?: (
    targetOption: string[],
    index: number,
    e: React.MouseEvent<HTMLElement>,
  ) => void;
  onPopupScroll?: (enevt?: any) => void;
}

interface MenuItems {
  [index: number]: HTMLLIElement;
}
let checkedNode;
class Menus extends React.Component<MenusProps> {
  menuItems: MenuItems = {};

  // by szp -----
  constructor(props: MenusProps) {
    super(props);
    this.state = {
      onPopupScroll: props.onPopupScroll,
    };
  }
  //-----

  delayTimer: number;
  static defaultProps: MenusProps = {
    options: [],
    value: [],
    activeValue: [],
    onSelect() {},
    prefixCls: 'rc-cascader-menus',
    visible: false,
    expandTrigger: 'click',
  };
  state = {
    isChecked: false,
  };

  componentDidMount() {
    this.scrollActiveItemToView();
  }

  componentDidUpdate(prevProps: MenusProps) {
    if (!prevProps.visible && this.props.visible) {
      this.scrollActiveItemToView();
    }
  }

  getFieldName(name) {
    const { fieldNames, defaultFieldNames } = this.props;
    // 防止只设置单个属性的名字
    return fieldNames[name] || defaultFieldNames[name];
  }

  getOption(option: CascaderOption, menuIndex: number) {
    const { prefixCls, expandTrigger, expandIcon, loadingIcon } = this.props;
    const onSelect = this.props.onSelect.bind(this, option, menuIndex);
    const onItemDoubleClick = this.props.onItemDoubleClick.bind(
      this,
      option,
      menuIndex,
    );
    let expandProps: any = {
      onClick: onSelect,
      onDoubleClick: onItemDoubleClick,
    };
    let menuItemCls = `${prefixCls}-menu-item`;
    let expandIconNode = null;
    const hasChildren =
      option[this.getFieldName('children')] &&
      option[this.getFieldName('children')].length > 0;
    if (hasChildren || option.isLeaf === false) {
      menuItemCls += ` ${prefixCls}-menu-item-expand`;
      if (!option.loading) {
        expandIconNode = (
          <span className={`${prefixCls}-menu-item-expand-icon`}>
            {expandIcon}
          </span>
        );
      }
    }

    if (expandTrigger === 'hover' && (hasChildren || option.isLeaf === false)) {
      expandProps = {
        onMouseEnter: this.delayOnSelect.bind(this, onSelect),
        onMouseLeave: this.delayOnSelect.bind(this),
        onClick: onSelect,
      };
    }
    if (this.isActiveOption(option, menuIndex)) {
      menuItemCls += ` ${prefixCls}-menu-item-active`;
      expandProps.ref = this.saveMenuItem(menuIndex);
    }
    if (option.disabled) {
      menuItemCls += ` ${prefixCls}-menu-item-disabled`;
    }

    let loadingIconNode = null;
    if (option.loading) {
      menuItemCls += ` ${prefixCls}-menu-item-loading`;
      loadingIconNode = loadingIcon || null;
    }

    let title = '';
    if ('title' in option) {
      // eslint-disable-next-line prefer-destructuring
      title = option.title;
    } else if (typeof option[this.getFieldName('label')] === 'string') {
      title = option[this.getFieldName('label')];
    }
    // 渲染checked
    const hasChecked = option[this.getFieldName('checked')];
    const checkedNode = hasChecked ? (
      <Checkbox
        // indeterminate={this.isActiveOption(option, menuIndex) && this.getFieldName('children')}
        disabled={option.disabled}
        checked={this.isActiveOption(option, menuIndex)}
        onChange={() => {}}
        style={{ width: '100%' }}
      >
        {option[this.getFieldName('label')]}
      </Checkbox>
    ) : (
      option[this.getFieldName('label')]
    );

    return (
      <li
        key={option[this.getFieldName('value')]}
        className={menuItemCls}
        title={title}
        {...expandProps}
        role="menuitem"
        style={{ width: hasChecked ? '232px' : '' }}
        onMouseDown={(e) => e.preventDefault()}
      >
        {checkedNode}
        {expandIconNode}
        {loadingIconNode}
      </li>
    );
  }

  getActiveOptions(values?: CascaderOption[]): CascaderOption[] {
    const { options } = this.props;
    const activeValue = values || this.props.activeValue;
    return arrayTreeFilter(
      options,
      (o, level) => o[this.getFieldName('value')] === activeValue[level],
      { childrenKeyName: this.getFieldName('children') },
    );
  }

  getShowOptions(): CascaderOption[][] {
    const { options } = this.props;
    const result = this.getActiveOptions()
      .map((activeOption) => activeOption[this.getFieldName('children')])
      .filter((activeOption) => !!activeOption);
    result.unshift(options);
    return result;
  }

  delayOnSelect(onSelect, ...args) {
    if (this.delayTimer) {
      clearTimeout(this.delayTimer);
      this.delayTimer = null;
    }
    if (typeof onSelect === 'function') {
      this.delayTimer = window.setTimeout(() => {
        onSelect(args);
        this.delayTimer = null;
      }, 150);
    }
  }

  scrollActiveItemToView() {
    // scroll into view
    const optionsLength = this.getShowOptions().length;
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < optionsLength; i++) {
      const itemComponent = this.menuItems[i];
      if (itemComponent && itemComponent.parentElement) {
        itemComponent.parentElement.scrollTop = itemComponent.offsetTop;
      }
    }
  }

  isActiveOption(option, menuIndex) {
    const { activeValue = [] } = this.props;
    return activeValue[menuIndex] === option[this.getFieldName('value')];
  }

  saveMenuItem = (index) => (node) => {
    this.menuItems[index] = node;
  };

  render() {
    const {
      prefixCls,
      dropdownMenuColumnStyle,
      scrollEventDelegation = true,
    } = this.props;
    return (
      // react17版本不再支持scroll事件委托
      <div
        onScroll={scrollEventDelegation ? this.state.onPopupScroll : undefined}
      >
        {this.getShowOptions().map((options, menuIndex) => (
          <ul
            className={`${prefixCls}-menu`}
            key={menuIndex}
            style={dropdownMenuColumnStyle}
            onScroll={
              !scrollEventDelegation ? this.state.onPopupScroll : undefined
            }
          >
            {options.map((option) => this.getOption(option, menuIndex))}
          </ul>
        ))}
      </div>
    );
  }
}

export default Menus;
