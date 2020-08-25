import React from "react";

const routes = [
  {title: '其他页', path: '/other', name: 'Other', Component: React.lazy(() => import("../page/Other"))},
  {title: '用户页', path: '/nest/user', name: 'User', Component: React.lazy(() => import("../page/nest/User"))},
  {title: '测试页1', path: '/test1', name: 'Test1', Component: React.lazy(() => import("../page/Test1"))},
  {title: '测试页2', path: '/test2', name: 'Test2', Component: React.lazy(() => import("../page/Test2"))},
  {title: '测试页3', path: '/test3', name: 'Test3', Component: React.lazy(() => import("../page/Test3"))},
  {title: '测试页4', path: '/test4', name: 'Test4', Component: React.lazy(() => import("../page/Test4"))},
  {title: '首页', path: '/', exact: true, name: 'Home', Component: React.lazy(() => import("../page/Index"))},
]

export {routes}
