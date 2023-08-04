import { pathToRegexp } from 'path-to-regexp';
import { RouteProps, RouteCollection } from './types';

function getRoutesCollection(routes?: RouteProps[]) {
  const routesCollection: RouteCollection = [];

  function dfs(data?: RouteProps[]) {
    if (!data || !data.length) return;
    data.forEach(route => {
      if (route) {
        routesCollection.push({
          route,
          reg: pathToRegexp(route.path!),
        });

        dfs(route.routes);
      }
    });
  }
  dfs(routes);

  return routesCollection;
}

export default getRoutesCollection;
