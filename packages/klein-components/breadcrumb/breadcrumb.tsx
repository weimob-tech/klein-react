import React, { useContext } from 'react';
import classNames from 'classnames';
import { ConfigContext } from '../config-provider/context';
import { cloneElement } from '../utils/ReactNodeValidate';
import BreadcrumbItem from './breadcrumb-item';
import BreadcrumbSeparator from './BreadcrumbSeparator';
import Menu from '../menu';

export interface BreadcrumbProps {
  /** 自定义分隔符 */
  separator?: React.ReactNode;
  /** router的路由栈信息 */
  routes?: Route[];
  /** 路由的参数 */
  params?: any;
  /** router的路由栈信息 */
  itemRender?: (
    route: Route,
    params: any,
    routes: Route[],
    paths: string[],
  ) => React.ReactNode;
  /** 行内样式 */
  style?: React.CSSProperties;
  /** 自定义样式 */
  className?: string;
}

export interface Route {
  path: string;
  breadcrumbName: string;
  children?: Omit<Route, 'children'>[];
}

function getBreadcrumbName(route: Route, params: any) {
  if (!route.breadcrumbName) {
    return null;
  }

  const paramsKeys = Object.keys(params).join('|');
  const name = route.breadcrumbName.replace(
    new RegExp(`:(${paramsKeys})`, 'g'),
    (replacement, key) => params[key] || replacement,
  );
  return name;
}

function defaultItemRender(
  route: Route,
  params: any,
  routes: Route[],
  paths: string[],
) {
  const isLastItem = routes.indexOf(route) === routes.length - 1;
  const name = getBreadcrumbName(route, params);
  return isLastItem ? (
    <span>{name}</span>
  ) : (
    <a href={`#/${paths.join('/')}`}>{name}</a>
  );
}

const getPath = (path: string, params: any) => {
  let pt = (path || '').replace(/^\//, '');
  Object.keys(params).forEach((key) => {
    pt = pt.replace(`:${key}`, params[key]);
  });
  return pt;
};

const addChildPath = (paths: string[], childPath: string = '', params: any) => {
  let lastPaths;

  const originalPaths = [...paths];
  const path = getPath(childPath, params);
  if (path) {
    originalPaths.push(path);
    lastPaths = originalPaths;
  }
  return lastPaths;
};

interface BreadcrumbInterface extends React.FC<BreadcrumbProps> {
  Item: typeof BreadcrumbItem;
  Separator: typeof BreadcrumbSeparator;
}
const Breadcrumb: BreadcrumbInterface = (props) => {
  const {
    separator = '/',
    routes,
    children,
    itemRender = defaultItemRender,
    style,
    params = {},
    className,
    ...restProps
  } = props;
  const { getPrefixClassName } = useContext(ConfigContext);
  const breadcrumbCla = getPrefixClassName('bread-crumb');
  const breadcrumbClassName = classNames(breadcrumbCla, className);

  let breadcrumbNode: React.ReactNode;

  if (routes && routes.length > 0) {
    const paths: string[] = [];
    breadcrumbNode = routes.map((route) => {
      const path = getPath(route.path, params);
      if (path) {
        paths.push(path);
      }
      // generated overlay by route.children
      let overlay;
      if (route.children && route.children.length) {
        overlay = (
          <Menu>
            {route.children.map((child) => (
              <Menu.Item key={child.path || child.breadcrumbName}>
                {itemRender(
                  child,
                  params,
                  routes,
                  addChildPath(paths, child.path, params) as any,
                )}
              </Menu.Item>
            ))}
          </Menu>
        );
      }
      return (
        <BreadcrumbItem
          overlay={overlay}
          separator={separator}
          key={path || route.breadcrumbName}
        >
          {itemRender(route, params, routes, paths)}
        </BreadcrumbItem>
      );
    });
  } else if (children) {
    // 当只 children  只有一个元素的时候。只是一个对象； 不是数组；所以需要包装成一个数组
    const arrElement: any =
      children && !Array.isArray(children) ? [children] : children;
    breadcrumbNode = arrElement.map((element: any, index: number) => {
      if (!element) {
        return element;
      }
      return cloneElement(element, {
        separator,
        key: index,
      });
    });
  }
  return (
    <div className={breadcrumbClassName} style={style} {...restProps}>
      {breadcrumbNode}
    </div>
  );
};
Breadcrumb.Item = BreadcrumbItem;
Breadcrumb.Separator = BreadcrumbSeparator;
export default Breadcrumb;
