import { lazy } from "react";
import { RouteObject } from "react-router-dom";

// const BasicsLayout = lazy(() => import('@/layouts/Basics'))
const BasicsLayout = lazy(() => import('../layouts/Basics'))

const routes: RouteObject[] = [
  {
    path: '/',
    Component: BasicsLayout,
    children: []
  },
  {
    path: '/login',
    Component: lazy(() => import('../pages/login'))
  },
  {
    path: '*',
    Component: lazy(() => import('../pages/error'))
  }
];

export default routes;
