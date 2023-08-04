import React, { useState, useCallback, useRef } from 'react';
import arrayTreeFilter from 'array-tree-filter';
import classNames from 'classnames';
import MutipleDropdown from './mutiple-dropdown-node';
import type { CheckedInfo, Key, SelectedInfo } from '../tree/interface';
import type { SelectProps } from '../select';
import Select from '../select';
import type { LabeledValue } from '../select/select';
import RcCascader from '../components/rc-cascader';
import KeyCode from '../components/rc-util/KeyCode';
import { ConfigContext } from '../config-provider/context';
import type { InputProps } from '../input';
import Input from '../input';
import { Icons } from '../components';
import { replaceElement } from '../utils/ReactNodeValidate';
import { scrollInfiniteFun } from '../select/scrollInfinite';
import {
  generateOpts,
  traverseOptions,
  getSelectOpts,
  isReadOnly,
} from './_util';
// @ts-ignore
import loadingGif from '../spin/gif/loading-basic-gray.gif';

export interface optionProps {
  value?: string | number;
  label?: React.ReactNode;
  disabled?: boolean;
  children?: optionProps[];
}
export interface ShowSearchType {
  filter?: (
    inputValue: string,
    path: CascaderOptionType[],
    names: any,
  ) => boolean;
  render?: (
    inputValue: string,
    path: CascaderOptionType[],
    prefixCls: string | undefined,
    names: any,
  ) => React.ReactNode;
  sort?: (
    a: CascaderOptionType[],
    b: CascaderOptionType[],
    inputValue: string,
    names: any,
  ) => number;
  matchInputWidth?: boolean;
  limit?: number | false;
}

export type CascaderValueType = (string | number)[];
export type MutiCascaderValueType = (string | number)[][];

export interface CascaderOptionType {
  value?: string | number;
  label?: React.ReactNode;
  disabled?: boolean;
  isLeaf?: boolean;
  loading?: boolean;
  children?: CascaderOptionType[];
  [key: string]: any;
}
export interface CascaderProps {
  /** 可选项数据源 */
  options?: optionProps[];
  /** 下拉菜单每一列的宽度 */
  dropdownMenuColumnWidth?: number;
  /** 下拉菜单每一列的样式 */
  dropdownMenuColumnStyle?: React.CSSProperties;
  /** 选择完成后的回调 */
  onChange?: (
    value: unknown,
    selectedOptions?: CascaderOptionType | MutiCascaderValueType,
  ) => void;
  /** search时输入框改变时回调 */
  onInputChange?: (val: string) => void;
  /** 输入框占位文本 */
  placeholder?: string;
  /** loadData触发方式 */
  expandTrigger?: string;
  /** 自定义样式 */
  className?: string;
  /** 控制覆层显示 */
  popupVisible?: boolean;
  /** 控制覆层的回调 */
  onPopupVisibleChange?: (popupVisible: boolean) => void;
  /** 自定义选择筐后续Icon */
  suffixIcon?: React.ReactNode;
  /** 指定选中项 */
  value?: any;
  /** 默认的选中项 */
  defaultValue?: any;
  /** 输入框的值 */
  inputValue?: any;
  /** 自动获取焦点 */
  autoFocus?: boolean;
  /** 允许清除数据 */
  allowClear?: boolean;
  /** 是否开启多选 */
  multiple?: boolean;
  /** 多选情况下是否折叠选中项目 */
  collapse?: boolean | number;
  /** 禁用 */
  disabled?: boolean;
  /** 用于动态加载选项，无法与 showSearch 一起使用 */
  loadData?: (selectedOptions: any) => void;
  /** 展开时回调 */
  onExpand?: (selectOptions: CascaderOptionType[]) => void;
  showSearch?: boolean | ShowSearchType;
  /** 控制输入框是否只读 */
  readOnly?: boolean;
  /** 当此项为 true 时，点选每级菜单选项值都会发生变化 */
  changeOnSelect?: boolean;
  notFoundContent?: React.ReactNode;
  flattenOptions?: any;
  hasChecked?: boolean;
  /** 选择器浮层挂载点，默认挂载到 body 上 */
  getPopupContainer?: (triggerNode: HTMLElement) => HTMLElement;
  /** 选择后展示的渲染函数 */
  displayRender?: (
    label: string[],
    selectedOptions?: CascaderOptionType[],
  ) => React.ReactNode;
  /** 输入框大小 */
  size?: InputProps['size'];
  /** 自由扩展下拉菜单 */
  dropdownRender?: (menus: React.ReactNode) => React.ReactNode;
  /** 下拉滚动加载 */
  scrollInfinite?: (e: React.UIEvent<HTMLDivElement>, index: number) => void;
  /** 是否还有更多下拉内容 */
  infiniteHasMore?: boolean;
  /** 定义下拉菜单默认底部的内容 */
  dropdownFooterContent?: React.ReactNode;
  /** 自定义 options 中 label name children 的字段 */
  fieldNames?: Partial<FilledFieldNamesType>;
  /** 最多显示多少个 tag（仅在多选时生效) */
  maxTagCount?: number;
  /** 最大显示的 tag 文本长度(仅在多选时生效）*/
  maxTagTextLength?: number;
  /** 自定义 tag 内容 render	 */
  tagRender?: SelectProps['tagRender'];
  /** 当内容显示不全时显示title	 */
  showPickerTitle?: boolean;
  pickerTitle?: string;
  style?: React.CSSProperties;
  scrollEventDelegation?: boolean;
  onPopupScroll?: (
    e: React.UIEvent<HTMLDivElement>,
    currentNode: HTMLDivElement,
    currentIndex: number,
  ) => void; // by szp
}
const { DownLine, RightLine, CloseFill } = Icons;
export interface FilledFieldNamesType {
  value: string | number;
  label: string;
  children: string;
}
function getFieldNames({ fieldNames }: any) {
  return fieldNames;
}
function getFilledFieldNames(props: CascaderProps) {
  const fieldNames = getFieldNames(props) || {};
  const names: FilledFieldNamesType = {
    children: fieldNames.children || 'children',
    label: fieldNames.label || 'label',
    value: fieldNames.value || 'value',
  };
  return names;
}
function highlightKeyword(
  str: string,
  keyword: string,
  prefixCls: string | undefined,
) {
  return str.split(keyword).map((node: string, index: number) =>
    index === 0
      ? node
      : [
          <span className={`${prefixCls}-menu-item-keyword`} key="seperator">
            {keyword}
          </span>,
          node,
        ],
  );
}
// 搜索时 拍平树
function flattenTree(
  options: any[],
  props: CascaderProps,
  ancestor: CascaderOptionType[] = [],
) {
  const names: FilledFieldNamesType = getFilledFieldNames(props);
  let flattenOptions: CascaderOptionType[][] = [];
  const childrenName = names.children;
  options.forEach((option) => {
    const path = ancestor.concat(option);
    if (
      props.changeOnSelect ||
      !option[childrenName] ||
      !option[childrenName].length
    ) {
      flattenOptions.push(path);
    }
    if (option[childrenName]) {
      flattenOptions = flattenOptions.concat(
        flattenTree(option[childrenName], props, path),
      );
    }
  });
  return flattenOptions;
}
const Cascader: React.FC<CascaderProps> = (props) => {
  const {
    onChange,
    placeholder,
    className,
    disabled,
    autoFocus,
    suffixIcon,
    defaultValue,
    pickerTitle,
    showPickerTitle,
    popupVisible = false,
    multiple,
    collapse,
    dropdownMenuColumnWidth,
    dropdownMenuColumnStyle,
    onPopupVisibleChange,
    getPopupContainer,
    showSearch,
    readOnly = true,
    inputValue: outerInputValue,
    size,
    dropdownRender,
    dropdownFooterContent,
    style,
    allowClear,
    onPopupScroll,
    scrollInfinite,
    infiniteHasMore,
    loadData,
    tagRender,
    maxTagCount = 1,
    maxTagTextLength,
    onInputChange,
    ...restProps
  } = props;
  const {
    size: contextSize,
    getPrefixClassName,
    getPopupContainer: getCtxPopupContainer,
  } = React.useContext(ConfigContext);

  const endSize = size || contextSize;
  const prefixCls = getPrefixClassName('cascader');
  // const rcCascaderPrefixCls = classNames(prefixCls, {
  //   [`${prefixCls}-size`]: size
  // })
  // console.log('rcCascaderPrefixCls..', rcCascaderPrefixCls)
  const [inputValue, setInputValue] = useState(outerInputValue);
  const [value, setRcVal] = useState(props.value || props.defaultValue);
  const [selectVisible, setSelectVisible] = useState(popupVisible);
  const [inputFocused, setInputFocused] = useState(false);
  const inputRef = useRef(null);
  // const mutipleTreeValsRef = useRef(value);
  let clearSelectionTimeout: any;

  if ('value' in props && props.value !== value) {
    setRcVal(props.value);
    // mutipleTreeValsRef.current = props.value;
  }

  if ('inputValue' in props && outerInputValue !== inputValue) {
    setInputValue(outerInputValue);
    // mutipleTreeValsRef.current = props.value;
  }

  if ('popupVisible' in props && props.popupVisible !== selectVisible) {
    setSelectVisible(!!props.popupVisible);
  }

  React.useEffect(() => {
    return () => {
      if (clearSelectionTimeout) {
        clearTimeout(clearSelectionTimeout);
      }
    };
  }, []);
  // 搜索数据
  const flattenOptions = showSearch
    ? flattenTree(props.options!, props)
    : undefined;
  const pickerCls = classNames(
    `${prefixCls}-picker`,
    {
      // [`${prefixCls}-picker-rtl`]: isRtlLayout,
      [`${prefixCls}-picker-with-value`]: inputValue,
      [`${prefixCls}-picker-disabled`]: disabled,
      // [`${prefixCls}-picker-${mergedSize}`]: !!mergedSize,
      [`${prefixCls}-picker-show-search`]: !!showSearch,
      [`${prefixCls}-picker-focused`]: inputFocused,
      // [`${prefixCls}-picker-borderless`]: !bordered,
    },
    className,
  );

  const renderEmpty = () => (
    <div className={`${prefixCls}-no-data`}>暂无数据</div>
  );
  // keep value when filtering
  const keepFilteredValueField = '__KEEP_FILTERED_OPTION_VALUE';
  // 搜索的方法 数据处理；
  function defaultFilterOption(
    val: string,
    path: CascaderOptionType[],
    arr: FilledFieldNamesType,
  ) {
    return path.some(
      (option) => (option[arr.label] as string).indexOf(val) > -1,
    );
  }

  function defaultRenderFilteredOption(
    val: string,
    path: CascaderOptionType[],
    prefixClss: string | undefined,
    arr: FilledFieldNamesType,
  ) {
    return path.map((option, index) => {
      const label = option[arr.label];
      const node =
        (label as string).indexOf(inputValue) > -1
          ? highlightKeyword(label as string, val, prefixClss)
          : label;
      return index === 0 ? node : [' / ', node];
    });
  }
  function getEmptyNode(
    renderEmptys: any,
    arr: FilledFieldNamesType,
    notFoundContent?: React.ReactNode,
  ) {
    return {
      [arr.value]: 'NOT_FOUND',
      [arr.label]: notFoundContent || renderEmptys('Cascader'),
      disabled: true,
      isEmptyNode: true,
    };
  }
  function defaultSortFilteredOption(
    a: CascaderOptionType[],
    b: CascaderOptionType[],
    val: string,
    arr: FilledFieldNamesType,
  ) {
    function callback(elem: CascaderOptionType) {
      return (elem[arr.label] as string).indexOf(val) > -1;
    }

    return a.findIndex(callback) - b.findIndex(callback);
  }
  // We limit the filtered item count by default
  const defaultLimit = 50;
  // 过滤数据
  const generateFilteredOptions = (
    prefixClss: string | undefined,
    renderEmptys: any,
  ) => {
    const { notFoundContent } = props;
    const arr: FilledFieldNamesType = getFilledFieldNames(props);
    const {
      filter = defaultFilterOption,
      render = defaultRenderFilteredOption,
      sort = defaultSortFilteredOption,
      limit = defaultLimit,
    } = showSearch as ShowSearchType;

    // Limit the filter if needed
    let filtered: CascaderOptionType[][];
    if (limit > 0) {
      filtered = [];
      let matchCount = 0;

      // Perf optimization to filter items only below the limit
      flattenOptions!.some((path: any) => {
        const match = filter(inputValue, path, arr);
        if (match) {
          filtered.push(path);
          matchCount += 1;
        }
        return matchCount >= limit;
      });
    } else {
      filtered = flattenOptions!.filter((path: any) =>
        filter(inputValue, path, arr),
      );
    }

    filtered = filtered.sort((a, b) => sort(a, b, inputValue, arr));

    if (filtered.length > 0) {
      const field =
        arr.value === arr.label ? keepFilteredValueField : arr.value;

      return filtered.map(
        (path: CascaderOptionType[]) =>
          ({
            klein__IS_FILTERED_OPTION: true,
            path,
            [field]: path.map((o: CascaderOptionType) => o[arr.value]),
            [arr.label]: render(inputValue, path, prefixClss, arr),
            disabled: path.some((o: CascaderOptionType) => !!o.disabled),
            isEmptyNode: true,
            checked: props.hasChecked,
          } as CascaderOptionType),
      );
    }
    return [getEmptyNode(renderEmptys, arr, notFoundContent)];
  };
  const handlePopupVisibleChange = (flag: boolean) => {
    if (!('popupVisible' in props)) {
      setSelectVisible(flag);
      setInputFocused(flag);
      setInputValue((pre: string) => pre);
    }
    onPopupVisibleChange?.(flag);
  };
  // 搜索 过滤数据
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!popupVisible) {
      handlePopupVisibleChange(true);
    }
    setInputVal(e.target.value);
  };
  // 清除选中值
  const clearSelection = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (!inputValue) {
      handlePopupVisibleChange(false);
      clearSelectionTimeout = setTimeout(() => {
        setValue([]);
      }, 200);
    } else {
      setInputVal('');
    }
  };
  // render clear icon
  const renderClearIcon =
    (value?.length > 0 || inputValue?.length > 0) && allowClear ? (
      <CloseFill
        className={`${prefixCls}-picker-clear`}
        onClick={clearSelection}
      />
    ) : null;
  let { options } = props;
  const arrPd: FilledFieldNamesType = getFilledFieldNames(props);
  if (options && options.length > 0) {
    // console.log(options, '----options'); // szp

    if (inputValue && showSearch) {
      options = generateFilteredOptions(prefixCls, renderEmpty);
    }
  } else {
    options = [getEmptyNode(renderEmpty, arrPd, props.notFoundContent)];
  }

  const handleInputBlur = () => {
    setInputFocused(false);
  };
  const handleInputClick = (e: React.MouseEvent<HTMLInputElement>) => {
    // Prevent `Trigger` behaviour.
    if (inputFocused || popupVisible) {
      e.stopPropagation();
    }
  };
  // 阻止回退键的删除事件 在showSearch 属性
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode === KeyCode.BACKSPACE || e.keyCode === KeyCode.SPACE) {
      e.stopPropagation();
    }
  };
  const setValue = (
    arrVal: CascaderValueType,
    selectedOptions: CascaderOptionType[] = [],
    // mutipleValues?: boolean,
  ) => {
    if (!('value' in props)) {
      setRcVal(arrVal);
    }
    // if (mutipleValues) {
    //   onChange?.(mutipleValues);
    //   return;
    // }
    onChange?.(arrVal, selectedOptions);
  };

  const setInputVal = (val: string) => {
    if (typeof outerInputValue === 'undefined') {
      setInputValue(val);
    }
    onInputChange?.(val);
  };

  const handleChange = (
    values: CascaderValueType,
    selectedOptions: CascaderOptionType[],
  ) => {
    setInputValue('');
    // 搜索过滤的时候
    if (selectedOptions[0].klein__IS_FILTERED_OPTION) {
      const unwrappedValue =
        selectedOptions[0][keepFilteredValueField] === undefined
          ? values[0]
          : selectedOptions[0][keepFilteredValueField];
      const unwrappedSelectedOptions = selectedOptions[0].path;
      setValue(unwrappedValue, unwrappedSelectedOptions);
      return;
    }
    setValue(values, selectedOptions);
  };
  const defaultDisplayRender = (label: string[]) => label.join(' / ');

  const getLabel = () => {
    const { displayRender = defaultDisplayRender as Function } = props;
    if (value) {
      // 未选择的时候 可能是undefined
      const arrs = getFilledFieldNames(props);
      const unwrappedValue = Array.isArray(value[0]) ? value[0] : value;
      const selectedOptions: CascaderOptionType[] = arrayTreeFilter(
        props.options as any,
        (o: CascaderOptionType, level: number) =>
          o[arrs.value] === unwrappedValue[level],
        { childrenKeyName: arrs.children },
      );
      // debugger
      const label = selectedOptions.length
        ? selectedOptions.map((o) => o[arrs.label])
        : value;
      return displayRender(label, selectedOptions);
    }
    return null;
  };

  const rcCascaderPopupClassName = classNames({
    // [`${prefixCls}-menu-${direction}`]: direction === 'rtl',
    [`${prefixCls}-menu-empty`]:
      options.length === 1 && options[0].value === 'NOT_FOUND',
  });
  // 输入框后面的图标
  const arrowCls = classNames({
    [`${prefixCls}-picker-arrow`]: true,
    [`${prefixCls}-picker-arrow-expand`]: popupVisible,
  });
  const pickerLabelCls = classNames(`${prefixCls}-picker-label`, {
    [`${prefixCls}-picker-${endSize}`]: endSize,
  });
  // 获取到输入框中的icon
  const getInputIcon = (): React.ReactNode => {
    return suffixIcon ? (
      replaceElement(
        suffixIcon,
        <span className={`${prefixCls}-picker-arrow`}>{suffixIcon}</span>,
        () => ({
          className: classNames({
            [(suffixIcon as any).props.className!]: (suffixIcon as any).props
              .className,
            [`${prefixCls}-picker-arrow`]: true,
          }),
        }),
      )
    ) : (
      <DownLine className={arrowCls} />
    );
  };
  const renderElement: React.ReactElement = (props.children as React.ReactElement) || (
    <span
      className={pickerCls}
      style={style}
      title={showPickerTitle ? pickerTitle || getLabel() : undefined}
    >
      {/* <span className={`${prefixCls}-picker-label`}> {getSelectedValue()}</span> */}
      {value?.length > 0 ? (
        <span className={pickerLabelCls}>{getLabel()}</span>
      ) : null}
      <Input
        ref={inputRef}
        tabIndex={-1}
        placeholder={value && value.length > 0 ? undefined : placeholder}
        className={`${prefixCls}-input`}
        disabled={disabled}
        value={inputValue}
        readOnly={isReadOnly(showSearch, readOnly)}
        onChange={
          !isReadOnly(showSearch, readOnly) ? handleInputChange : undefined
        }
        onClick={
          !isReadOnly(showSearch, readOnly) ? handleInputClick : undefined
        }
        onKeyDown={handleKeyDown}
        onBlur={!isReadOnly(showSearch, readOnly) ? handleInputBlur : undefined}
        size={endSize}
      />
      {renderClearIcon}
      {getInputIcon()}
    </span>
  );

  /** ------ 级联多选 ------ */
  const onItemRemove = (curVal: string | number | LabeledValue) => {
    const result = value.filter(
      (keys: (string | number)[]) => keys.join('/') !== curVal,
    );
    setValue(result);
  };

  const renderMutipleSelect = () => {
    const fields = getFilledFieldNames(props);
    const [selectOpts, selectVals] = getSelectOpts(
      fields,
      value,
      props.options,
    );
    const selectProps: SelectProps = {
      placeholder: '请选择' || placeholder,
      mode: 'multiple',
      dropdownRender: (menu: React.ReactNode) => null,
      dropdownStyle: { padding: 0 },
      value: selectVals,
      onDeselect: onItemRemove,
      tagRender,
      maxTagCount,
      maxTagTextLength,
      showSearch: false,
      showArrow: true,
      suffixIcon,
    };

    if (typeof collapse === 'boolean') {
      selectProps.maxTagCount = maxTagCount;
    } else {
      selectProps.maxTagCount = collapse;
    }

    return (
      <Select {...selectProps} style={style} className={className}>
        {selectOpts.map((item) => (
          <Select.Option key={item.value} value={item.value}>
            {item.label}
          </Select.Option>
        ))}
      </Select>
    );
  };

  const onTreeCheck = (keys: (Key | undefined)[][], info: CheckedInfo) => {
    setValue(info.checkedChildrenKeys as any, []);
    // mutipleTreeValsRef.current = keys as CascaderValueType[];
  };

  const onTreeSelect = (
    keys: Key[],
    info: SelectedInfo,
    checkedKeys?: Key[][],
  ) => {
    // 如果是多选 + 数据按需加载的情况下
    if (multiple && loadData) {
      setValue(checkedKeys as any, []);
    }
  };

  const defaultDropdownRender = (menus: React.ReactNode) => (
    <>
      {multiple &&
      options?.filter((item) => !(item as CascaderOptionType).isEmptyNode)
        .length ? (
        <MutipleDropdown
          treeData={options as any}
          onCheck={onTreeCheck}
          onSelect={onTreeSelect}
          checkedKeys={value}
          loadData={loadData as any}
          columnWidth={dropdownMenuColumnWidth}
          columnStyle={dropdownMenuColumnStyle}
          fieldNames={getFilledFieldNames(props)}
        />
      ) : (
        menus
      )}
      {dropdownFooterContent && (
        <div className={`${prefixCls}-footer`}>{dropdownFooterContent}</div>
      )}
    </>
  );

  /** ------ 级联多选 ------ */

  const loadingIcon = (
    <span className={`${prefixCls}-menu-item-loading-icon`}>
      <img
        src={loadingGif}
        style={{ width: 16, marginTop: 3 }}
        alt="加载中。。。。"
      />
      {/* <LoadingLine /> */}
    </span>
  );

  // fetch options by scroll infinite
  const handleScroll: React.UIEventHandler<HTMLDivElement> = useCallback(
    scrollInfiniteFun(
      infiniteHasMore as boolean,
      scrollInfinite,
      onPopupScroll,
    ),
    [infiniteHasMore, scrollInfinite, onPopupScroll],
  );

  return (
    <RcCascader
      {...restProps}
      getPopupContainer={getPopupContainer || getCtxPopupContainer}
      prefixCls={prefixCls}
      options={options}
      value={value}
      dropdownMenuColumnStyle={{
        width: dropdownMenuColumnWidth,
        ...dropdownMenuColumnStyle,
      }}
      popupClassName={rcCascaderPopupClassName}
      popupVisible={selectVisible}
      onPopupVisibleChange={handlePopupVisibleChange}
      onChange={handleChange}
      expandIcon={<RightLine />}
      loadingIcon={loadingIcon}
      disabled={disabled}
      dropdownRender={dropdownRender || defaultDropdownRender}
      onPopupScroll={handleScroll}
      loadData={loadData}
    >
      {!multiple ? renderElement : renderMutipleSelect()}
    </RcCascader>
  );
};

Cascader.defaultProps = {
  // size: 'medium',
  disabled: false,
  allowClear: true,
  infiniteHasMore: true,
};

export default Cascader;
