import React from 'react';
import classNames from 'classnames';

import { ConfigContext } from '../config-provider/context';
import type { VerticalTreeProps } from './verticalTree';
import VerticalTree from './verticalTree';
import HorizontalTree, { HorizontalTreeProps } from './horizontalTree';

export { HorizontalTreeProps };

const TreeRefRenderFunction: React.ForwardRefRenderFunction<
  unknown,
  HorizontalTreeProps | VerticalTreeProps
> = (props, ref) => {
  const { prefixCls, direction, className } = props;
  const { getPrefixClassName } = React.useContext(ConfigContext);
  const treePrefix = getPrefixClassName('tree', prefixCls);

  const cls = classNames(
    treePrefix,
    {
      [`${treePrefix}-${direction}`]: direction,
    },
    className,
  );

  return (
    <>
      {direction === 'horizontal' ? (
        <HorizontalTree
          {...(props as HorizontalTreeProps)}
          prefixCls={treePrefix}
          className={cls}
          ref={ref}
        />
      ) : (
        <VerticalTree
          {...(props as VerticalTreeProps)}
          prefixCls={treePrefix}
          className={cls}
          ref={ref}
        />
      )}
    </>
  );
};

const Tree = React.forwardRef(TreeRefRenderFunction);

Tree.defaultProps = {
  direction: 'horizontal',
  // selectedKeys: [],
  // defaultSelectedKeys: []
};

export default Tree;
