import React from "react";

const routes = [
  {title: '其他页', path: '/other', name: 'Other', Component: React.lazy(() => import("../page/other"))},
  {title: '用户页', path: '/nest/user', name: 'User', Component: React.lazy(() => import("../page/nest/user"))},
  {title: '测试页1', path: '/test1', name: 'Test1', Component: React.lazy(() => import("../page/test1"))},
  {title: '测试页2', path: '/test2', name: 'Test2', Component: React.lazy(() => import("../page/test2"))},
  {title: '测试页3', path: '/test3', name: 'Test3', Component: React.lazy(() => import("../page/test3"))},
  {title: '测试页4', path: '/test4', name: 'Test4', Component: React.lazy(() => import("../page/test4"))},
  {title: '首页', path: '/', exact: true, name: 'Home', Component: React.lazy(() => import("../page/index"))},
]

export {routes}
