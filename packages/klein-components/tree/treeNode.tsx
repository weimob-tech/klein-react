import React from 'react';
import classNames from 'classnames';

import Icon from '../icon';
import Checkbox from '../checkbox';
import { ConfigContext } from '../config-provider/context';
import type {
  TreeNode as TreeNodeProps,
  CheckboxChangeEvent,
} from './interface';

const { RightLine, LoadingLine } = Icon;

const TreeNode: React.FC<TreeNodeProps> = (props) => {
  const {
    title,
    selected,
    checked,
    checkable,
    indeterminate,
    switcherIcon,
    isLeaf,
    loading,
    nodeKey,
    children,
    level,
    parent,
    icon,
    showIcon,
    className,
    onNodeSelect,
    onNodeCheck,
  } = props;

  // const nodeProps = React.useMemo(() => ({
  //   title,
  //   selected,
  //   checked,
  //   indeterminate,
  //   isLeaf,
  //   nodeKey,
  //   children: childs,
  //   parent,
  //   level
  // }), [
  //   title,
  //   selected,
  //   checked,
  //   indeterminate,
  //   isLeaf,
  //   nodeKey,
  //   children,
  //   parent,
  //   level
  // ])

  const { getPrefixClassName } = React.useContext(ConfigContext);
  const treeNodePrefix = getPrefixClassName('tree-node');
  const checkboxRef = React.useRef<any>(null);

  const onSelect = (e: React.MouseEvent<HTMLSpanElement>) => {
    e.persist?.();
    if (
      checkboxRef.current &&
      e.nativeEvent.target === checkboxRef.current.input
    )
      return;
    onNodeSelect?.(e, props);
  };

  const onCheck = (e: CheckboxChangeEvent) => {
    onNodeCheck?.(e, props);
  };

  const renderCheckbox = () => {
    if (!checkable) return null;
    return (
      <span className={`${treeNodePrefix}-checkbox`}>
        <Checkbox
          indeterminate={indeterminate}
          checked={checked}
          onChange={onCheck}
          ref={checkboxRef}
        />
      </span>
    );
  };

  const renderSwitcherIcon = () => {
    if (isLeaf) return null;
    return (
      <span className={`${treeNodePrefix}-hSwitcher`}>
        {loading ? <LoadingLine /> : switcherIcon || <RightLine />}
      </span>
    );
  };

  return (
    <div
      className={classNames(treeNodePrefix, className, {
        [`${treeNodePrefix}-selected`]: selected,
      })}
      onClick={onSelect}
    >
      {renderCheckbox()}
      <span className={`${treeNodePrefix}-title`}>
        {showIcon && <span className={`${treeNodePrefix}-icon`}>{icon}</span>}
        {title}
      </span>
      {renderSwitcherIcon()}
    </div>
  );
};

export default TreeNode;
