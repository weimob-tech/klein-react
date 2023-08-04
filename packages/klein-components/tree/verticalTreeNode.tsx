import React from 'react';
import classNames from 'classnames';

import Icon from '../icon';
import Checkbox from '../checkbox';
import { ConfigContext } from '../config-provider/context';
import { __AsTargetChildXOffset__, handleExportNodes } from './utils/_utils';
import type {
  TreeNode,
  Hover,
  DragEventHandler,
  DragOverInfo,
  FieldNames,
  Key,
} from './interface';

const { ArrowRightFill, LoadingLine, NavigationLine } = Icon;

export interface VerticalTreeNodeProps extends TreeNode {
  childrenLen: number;
  searchValue: string;
  dragoverInfo: DragOverInfo;
  indexAtLevel: number;
  fieldNames: FieldNames;
  numberKeysSet: Set<Key>;
  renderSearchedTitle: (title: React.ReactNode, searchValue: string) => void;
  onNodeExpand: (node: TreeNode) => void;
  // onNodeDrag?: DragEventHandler;
  onNodeDragStart: DragEventHandler;
  onNodeDragEnd: DragEventHandler;
  onNodeDragEnter: DragEventHandler;
  onNodeDragOver: DragEventHandler;
  onNodeDragLeave: DragEventHandler;
  onNodeDrop: DragEventHandler;

  hover?: Hover;
  draggable?: boolean;
  allLineClickable?: boolean;
  showLine?: boolean;
  renderTreeNode?: (node: TreeNode) => React.ReactNode;
  renderExtra?: (node: TreeNode) => React.ReactNode;
}

const TreeNodeRenderFunction: React.ForwardRefRenderFunction<
  unknown,
  VerticalTreeNodeProps
> = (props, ref) => {
  const {
    hover,
    level,
    title,
    isLeaf,
    checked,
    loading,
    icon,
    childrenLen,
    showIcon,
    showLine,
    switcherIcon,
    searchValue,
    expanded,
    indexAtLevel,
    checkable,
    draggable,
    allLineClickable,
    lineClickable,
    nodeKey,
    numberKeysSet,
    selected,
    fieldNames,
    dragoverInfo,
    indeterminate,
    disabled,
    disableCheckbox,
    // onCheck,
    // onNodeDrag,
    renderExtra,
    renderSearchedTitle,
    onNodeDragStart,
    onNodeDragEnd,
    onNodeDragEnter,
    onNodeDragOver,
    onNodeDragLeave,
    onNodeDrop,
    onNodeCheck,
    onNodeSelect,
    onNodeExpand,
  } = props;

  const checkboxRef = React.useRef<any>(null);
  const titleRef = React.useRef<HTMLSpanElement>(null);

  const { getPrefixClassName } = React.useContext(ConfigContext);
  const treeNodePrefix = getPrefixClassName('tree-node');

  const onNodeAllLineClick = () => {
    if (typeof lineClickable === 'boolean' && !lineClickable) return;
    if (!allLineClickable) return;
    if (checkable) {
      checkboxRef.current?.input?.click();
      // checkboxRef.current?.
    } else {
      titleRef.current?.click();
    }
  };

  const renderPlaceholder = () => {
    if (!level) return null;
    return new Array(level).fill(1).map((item, index) => (
      <div className={`${treeNodePrefix}-placeholder`} key={index}>
        {showLine && (
          <>
            <span className={`${treeNodePrefix}-line-top`} />
            {(indexAtLevel !== childrenLen - 1 || index !== level - 1) && (
              <span className={`${treeNodePrefix}-line-bottom`} />
            )}
            {index === level - 1 && (
              <span className={`${treeNodePrefix}-line-horizontal`} />
            )}
          </>
        )}
      </div>
    ));
  };

  const renderExpandIcon = () => {
    if (isLeaf)
      return <div className={`${treeNodePrefix}-switcher-placeholder`} />;

    let iconNode: React.ReactNode = null;
    if (loading) {
      iconNode = <LoadingLine />;
    } else if (Array.isArray(switcherIcon)) {
      iconNode = expanded ? switcherIcon[1] : switcherIcon[0];
    } else {
      iconNode = switcherIcon || <ArrowRightFill />;
    }
    return (
      <div
        className={classNames(`${treeNodePrefix}-switcher`, {
          [`${treeNodePrefix}-switcher-close`]: !expanded,
          [`${treeNodePrefix}-switcher-open`]: expanded,
        })}
        onClick={(e) => {
          e.stopPropagation();
          onNodeExpand(props);
        }}
      >
        {iconNode}
      </div>
    );
  };

  const renderDragIcon = () => {
    if (!draggable) return null;

    return (
      <div className={`${treeNodePrefix}-drag`}>
        <NavigationLine />
      </div>
    );
  };

  // checkbox + title + underline + extra
  const renderContent = () => {
    const { dragBottom, dragTop, targetKey } = dragoverInfo;

    const underline =
      draggable && targetKey === nodeKey ? (
        <div
          className={classNames(`${treeNodePrefix}-drag`, {
            [`${treeNodePrefix}-drag-offset`]: dragBottom && !dragTop,
            [`${treeNodePrefix}-drag-bottom`]: !dragTop,
            [`${treeNodePrefix}-drag-top`]: dragTop,
          })}
        >
          <span className={`${treeNodePrefix}-drag-underline`} />
          <span className={`${treeNodePrefix}-drag-underline-circle`} />
          <span className={`${treeNodePrefix}-drag-underline-innerCircle`} />
        </div>
      ) : null;

    const nodeTitle = (
      <span
        ref={titleRef}
        className={classNames({
          [`${treeNodePrefix}-title-selected`]: selected,
        })}
        onClick={(e) => {
          e.stopPropagation();
          if (!disabled) {
            onNodeSelect?.(e, props);
          }
        }}
      >
        {showIcon && (
          <span className={`${treeNodePrefix}-customizeIcon`}>{icon}</span>
        )}
        {renderSearchedTitle(title, searchValue)}
      </span>
    );

    const nodeCheckBox = checkable ? (
      <span className={`${treeNodePrefix}-checkbox`}>
        <Checkbox
          ref={checkboxRef}
          checked={checked}
          indeterminate={indeterminate}
          disabled={
            typeof disableCheckbox !== 'undefined' ? disableCheckbox : disabled
          }
          // @ts-ignore
          onClick={(e) => {
            e.stopPropagation();
          }}
          onChange={(e) => {
            e.stopPropagation();
            onNodeCheck?.(e, props);
          }}
          // onChange={onCheck}
        />
      </span>
    ) : null;

    return (
      <div
        className={classNames(`${treeNodePrefix}-title`, {
          [`${treeNodePrefix}-hover-${hover}`]: hover !== 'longtest',
        })}
      >
        {nodeCheckBox}
        {nodeTitle}
        {underline}
      </div>
    );
  };

  return (
    <div
      className={classNames(treeNodePrefix, {
        [`${treeNodePrefix}-hover-longtest`]: hover === 'longtest',
        [`${treeNodePrefix}-disabled`]: disabled,
      })}
      title={title as string}
      draggable={draggable}
      // onDrag={e => onNodeDrag(e, props)}
      onClick={onNodeAllLineClick}
      onDragStart={(e) => onNodeDragStart(e, props)}
      onDragEnd={(e) => onNodeDragEnd(e, props)}
      onDragEnter={(e) => onNodeDragEnter(e, props)}
      onDragOver={(e) => onNodeDragOver(e, props)}
      onDragLeave={(e) => onNodeDragLeave(e, props)}
      onDrop={(e) => onNodeDrop(e, props)}
    >
      {renderDragIcon()}
      {renderPlaceholder()}
      {renderExpandIcon()}
      {renderContent()}
      {renderExtra ? (
        <span className={`${treeNodePrefix}-extra`}>
          {renderExtra(
            handleExportNodes([], fieldNames, props, numberKeysSet)?.[1],
          )}
        </span>
      ) : null}
    </div>
  );
};

const VerticalTreeNode = React.forwardRef(TreeNodeRenderFunction);

export default VerticalTreeNode;
