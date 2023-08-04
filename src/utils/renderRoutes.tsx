import React, { Suspense } from 'react';
import { Route, Outlet } from 'react-router-dom';
import { RouteProps } from '@/utils/types';

const getRouteProps = (route: RouteProps, prefix: string) => {
  const newProps: {
    route?: RouteProps;
    prefix?: string;
  } = {};

  if (route.layout) {
    newProps.route = route;
  }
  newProps.prefix = prefix;

  return newProps;
};

const renderRoutes = (prefix: string, routes?: RouteProps[]) => {
  if (!routes || !routes.length) return null;
  return routes.map((route: RouteProps, i: number) => {
    const childRoutes = renderRoutes(prefix, route.routes);
    const { element: ReactComponent, path } = route;
    const componentChild = childRoutes ? <Outlet></Outlet> : null;
    let routeElement = componentChild;
    if (typeof ReactComponent !== 'undefined') {
      routeElement = (
        <Suspense fallback=''>
          <ReactComponent {...getRouteProps(route, prefix)}>
            {componentChild}
          </ReactComponent>
        </Suspense>
      );
    }

    return (
      <Route {...route} key={path} element={routeElement}>
        {childRoutes}
      </Route>
    );
  });
};

export default renderRoutes;
