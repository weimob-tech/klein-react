import React from 'react';

import Tree from '../tree';
import Select from '../select';
import { traverse } from '../tree/utils/traverseUtils';

import type { SelectProps } from '../select';
import type { DataNode, TreeProps, Key, TreeNode } from '../tree/interface';
import type { OptionProps } from '../components/rc-select/Option';

export interface FieldNames {
  title?: string;
  value?: string;
  children?: string;
}

export interface TreeSelectNode extends Omit<DataNode, 'key' | 'children'> {
  value: Key;
  children?: TreeSelectNode[];
}

export interface TreeSelectProps
  extends Omit<
    SelectProps,
    | 'mode'
    | 'filterSort'
    | 'menuItemSelectedIcon'
    | 'tokenSeparators'
    | 'onInputKeyDown'
    | 'onMouseEnter'
    | 'onMouseLeave'
    | 'onPopupScroll'
    | 'removeOption'
    | 'optionLabelProp'
    | 'labelInValue'
    | 'scrollInfinite'
    | 'infiniteHasMore'
    | 'itemindex'
    | 'filterOption'
    | 'options'
    | 'onBlur'
    | 'onFocus'
  > {
  fieldNames?: FieldNames;
  /** 数据 */
  treeData?: TreeSelectNode[];
  /** 支持多选（当设置 treeCheckable 时自动变为 true） */
  multiple?: boolean;
  /** 自动展开父节点 **/
  treeAutoExpandParent?: boolean;
  /** 搜索值 **/
  treeSearchValue?: string;
  /** 显示 Checkbox */
  treeCheckable?: boolean;
  /** 默认展开所有树节点 */
  treeDefaultExpandAll?: boolean;
  /** 默认展开的树节点 */
  treeDefaultExpandedKeys?: Key[];
  /** 设置展开的树节点 */
  treeExpandedKeys?: Key[];
  // /** 自定义树节点图标 */
  // treeIcon?: React.ReactNode;
  /** 展示节点图标 */
  showTreeIcon?: boolean;
  /** 是否展示线条样式 */
  treeLine?: boolean;
  /** 树节点切换icon */
  treeSwitcherIcon?: TreeProps['switcherIcon'];
  /** 树节点展开时触发 */
  onTreeExpand?: TreeProps['onExpand'];
  /** 按需加载数据 */
  loadData?: TreeProps['loadData'];
  /** 格外的select的options，数据按需加载并且需要搜索时使用 */
  treeNodePlaceholder?: number;
  nodeTextWidth?: number;
  additionalSelectOptions?: OptionProps[];
}

export type ValueType = SelectProps['value'];

function valuetoArray(val: SelectProps['value']) {
  if (typeof val === 'undefined' || val === null) return [];
  return Array.isArray(val) ? val : [val];
}

const TreeSelectRenderFunction: React.ForwardRefRenderFunction<
  unknown,
  TreeSelectProps
> = (props, ref) => {
  const {
    treeData = [],
    value: outerValue,
    open: outerOpen,
    treeSearchValue: outerSearchValue,
    multiple,
    treeCheckable,
    onChange,
    showTreeIcon,
    fieldNames = {
      title: 'title',
      value: 'value',
      children: 'children',
    },
    virtual,
    listHeight,
    onTreeExpand: outerOnTreeExpand,
    // onTreeExpand,
    loadData,
    dropdownRender,
    nodeTextWidth = 100,
    treeNodePlaceholder = 30,
    additionalSelectOptions,
    treeExpandedKeys,
    treeDefaultExpandAll,
    treeDefaultExpandedKeys,
    treeSwitcherIcon,
    treeAutoExpandParent = true,
    // treeIcon,
    showSearch,
    onClear,
    onSearch,
    onDropdownVisibleChange,
    dropdownStyle,
    dropdownMatchSelectWidth,
    // renderSelectOptions,
    ...reset
  } = props;

  const [value, setValue] = React.useState<ValueType[]>(
    valuetoArray(outerValue),
  );
  const [searchValue, setSearchValue] = React.useState<string>(
    outerSearchValue || '',
  );
  const [dropdownWidth, setDropdownWidth] = React.useState<number>();
  // const [expandedKeys, setExpandedKeys] = React.useState<Key[]>(
  //   treeExpandedKeys || [],
  // );
  const [open, setOpen] = React.useState<boolean>(!!outerOpen);
  // const [autoExpandParent, setAutoExpandParent] = React.useState<boolean>(
  //   treeAutoExpandParent,
  // );

  const valueRef = React.useRef<ValueType>(outerValue);
  const treeRef = React.useRef<any>(null);
  const selectRef = React.useRef<any>(null);
  // 保存最深的层级
  const maxLevelRef = React.useRef<number>(0);

  if (typeof outerValue !== 'undefined' && outerValue !== valueRef.current) {
    setValue(valuetoArray(outerValue));
  }

  if (typeof outerOpen !== 'undefined' && outerOpen !== open) {
    setOpen(outerOpen);
  }

  if (
    typeof outerSearchValue !== 'undefined' &&
    outerSearchValue !== searchValue
  ) {
    setSearchValue(outerSearchValue);
  }

  // if (
  //   typeof treeExpandedKeys !== 'undefined' &&
  //   treeExpandedKeys !== expandedKeys
  // ) {
  //   setExpandedKeys(treeExpandedKeys);
  // }

  valueRef.current = outerValue;

  const onValueChange = (val: ValueType) => {
    // 单选的情况，不能反选
    if (!multiple && !treeCheckable) {
      if (Array.isArray(val)) {
        if (typeof outerValue === 'undefined') {
          setValue(val.length === 0 ? value : valuetoArray(val));
        }
        onChange?.(val.length === 0 ? value[0] : val[0]);
      }
    } else {
      if (typeof outerValue === 'undefined') {
        setValue(valuetoArray(val));
      }
      onChange?.(val);
    }
  };

  const onTreeSelect = (selectKeys: Key[]) => {
    if (treeCheckable) return;
    if (!multiple) {
      setOpen(false);
    }
    onValueChange(selectKeys);
  };

  const onTreeCheck = (checkedKeys: Key[]) => {
    onValueChange(checkedKeys);
  };

  // const onTreeExpand: TreeProps['onExpand'] = (eKeys, info) => {
  //   console.log('eKeys, info....', eKeys, info)
  //   if (typeof treeExpandedKeys === 'undefined') {
  //     setExpandedKeys(eKeys);
  //   }
  // if (typeof treeAutoExpandParent === 'undefined') {
  //   setAutoExpandParent(false);
  // }
  // outerOnTreeExpand?.(eKeys, info);
  // };

  // 当最深的层级变化时更新dropdown宽度
  // 给一个大概的计算，只要节点能看清楚即可
  const onLevelChange = () => {
    const currentLevel = maxLevelRef.current + 1;
    const selectContainerDomWdith =
      selectRef.current?.selectRef?.current?.containerRef?.current?.offsetWidth;
    // 理论上应有宽度
    const shouldBeWidth = currentLevel * treeNodePlaceholder + nodeTextWidth;
    if (shouldBeWidth > selectContainerDomWdith) {
      // 降低优先级
      setTimeout(() => {
        setDropdownWidth(shouldBeWidth);
      });
    }
  };

  const onTreeExpand: TreeProps['onExpand'] = (eKeys, info) => {
    // 展开的节点层级太深时，层级深的节点会看不见
    // 由于虚拟列表的限制，针对此情况动态设置外部容器的宽度
    // 不考虑treeDefaultExpandAll的情况，这种情况下使用者自定义dropdownStyle即可
    if (
      !dropdownMatchSelectWidth &&
      virtual &&
      typeof listHeight !== 'undefined'
    ) {
      const {
        node: { level = 0 },
      } = info;
      if (level > maxLevelRef.current) {
        maxLevelRef.current = level;
        onLevelChange();
      }
    }
    outerOnTreeExpand?.(eKeys, info);
  };

  const onSelectDropdownVisibleChange = (visible: boolean) => {
    if (typeof outerOpen === 'undefined') {
      setOpen(visible);
    }
    if (visible === false) {
      setSearchValue('');
    }
    onDropdownVisibleChange?.(visible);
  };

  const onDeselect = (tagValue: ValueType) => {
    onValueChange(value.filter((v) => v !== tagValue));
  };

  const onSelectClear = () => {
    if (typeof outerValue === 'undefined') {
      setValue([]);
    }
    onChange?.(multiple ? [] : undefined);
    onClear?.();
  };

  const onSelectSearch = (searchVal: string) => {
    if (typeof outerSearchValue === 'undefined') {
      setSearchValue(searchVal);
    }
    treeRef.current?.onSearchChange(searchVal);
    onSearch?.(searchVal);
  };

  const renderDropdownRender = () => {
    const treeDom = (
      <Tree
        ref={treeRef}
        searchValue={searchValue}
        treeData={treeData as any[]}
        fieldNames={{
          title: fieldNames.title,
          key: fieldNames.value,
          children: fieldNames.children,
        }}
        switcherIcon={treeSwitcherIcon}
        defaultExpandAll={treeDefaultExpandAll}
        defaultExpandedKeys={treeDefaultExpandedKeys}
        expandedKeys={treeExpandedKeys}
        // autoExpandParent={autoExpandParent}
        autoExpandParent={treeAutoExpandParent}
        // icon={treeIcon}
        showIcon={showTreeIcon}
        allLineClickable
        virtual={virtual}
        height={listHeight}
        selectedKeys={!treeCheckable ? (value as React.Key[]) : undefined}
        checkedKeys={treeCheckable ? (value as React.Key[]) : undefined}
        multiple={multiple}
        checkable={treeCheckable}
        direction="vertical"
        loadData={loadData}
        onSelect={onTreeSelect}
        onCheck={onTreeCheck}
        onExpand={onTreeExpand}
      />
    );

    if (dropdownRender) {
      return dropdownRender(treeDom);
    }

    return treeDom;
  };

  const selectOptions = React.useMemo(() => {
    // 给一个空数组，防止select认为无数据
    const selectOpts = [
      {
        value: '',
        title: '',
      },
      ...(additionalSelectOptions || []),
    ];

    if (Array.isArray(value)) {
      value.forEach((key) => {
        traverse(treeData as any[], (option: any) => {
          if (option.value === key) {
            selectOpts.push({
              title: option.title,
              value: option.value,
            });
          }
        });
      });
    }

    return (
      <>
        {selectOpts.map((opt) =>
          opt ? (
            <Select.Option key={opt.value} value={opt.value}>
              {opt?.title}
            </Select.Option>
          ) : null,
        )}
      </>
    );
  }, [value, additionalSelectOptions]);

  const renderSelect = () => {
    return (
      <Select
        ref={selectRef}
        open={open}
        value={value}
        mode={multiple || treeCheckable ? 'multiple' : undefined}
        onClear={onSelectClear}
        onDeselect={onDeselect}
        onDropdownVisibleChange={onSelectDropdownVisibleChange}
        dropdownRender={renderDropdownRender}
        onSearch={onSelectSearch}
        showSearch={
          typeof showSearch !== 'undefined' ? showSearch : !!onSelectSearch
        }
        dropdownStyle={{
          width: dropdownWidth,
          ...dropdownStyle,
        }}
        dropdownMatchSelectWidth={dropdownMatchSelectWidth}
        // select组件内部定义的onClick事件会导致 dropdown中的checkbox onChange事件失效
        // @ts-ignore
        onClick={() => {}}
        {...reset}
      >
        {selectOptions}
      </Select>
    );
  };

  return <>{renderSelect()}</>;
};

const TreeSelect = React.forwardRef(TreeSelectRenderFunction);

TreeSelect.defaultProps = {
  virtual: true,
  multiple: false,
  treeCheckable: false,
  treeAutoExpandParent: true,
  dropdownMatchSelectWidth: true,
};

TreeSelect.displayName = 'TreeSelect';

export default TreeSelect;
