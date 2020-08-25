React 项目模版

用于开始一个 React SPA 项目的模板

基于 Typescript + React + react-router + antd

## 特性

- [x] 路由
- [x] 路由动画
- [ ] 路由鉴权
- [x] 多页 Tab
- [ ] Keep Alive
- [ ] 多布局 Layout
- [ ] 自定义主题
- [ ] HTTP 封装
- [ ] 代码格式化
- [ ] commit 规范
- [ ] 文件/目录的风格检测

## 目录说明

```
src
├── api                     # API 目录
├── assets                  # 静态资源目录 (需要打包的资源)
├── component               # 全局公共组件 (具备有通用性)
├── layout                  # 页面布局
├── lib                     # 业务相关的类/库或封装
├── page                    # 页面目录
├── router                  # 路由
└── store                   # 状态管理
└── types                   # 外部的声明文件
└── util                    # 工具函数 (与业务不相关)
└── vendor                  # 第三方包 (例如 SDK)
```

## 项目规范

### 目录规范

- `tsx` 文件一律使用大写开头-驼峰式，例如 `Home.tsx`, 其余文件使用小写-驼峰式，例如 `http.ts`

- 所有 `css` 均使用 `less`，并且文件名与组件文件名(tsx)一致，例如 `Home.tsx` 和 `Home.less`/`Home.module.less`

- 所有路由页面都放在 `src/page` 目录下

- 页面独有的组件，放在页面，可以放在页面目录的 `component` 目录下

- 所有的公共组件(具备有通用性)放在 `src/component` 下

### 代码规范

- 不允许有 `any`，请使用 `unknown`

  如果是在不行需要声明 `any`，使用 `// @ts-expect-error` 进行忽略而不是 `// @ts-ignore`

- 组件必须声明 `prop` 的类型

  ```tsx
  import React, { PropsWithChildren } from "react";

  interface Props extends PropsWithChildren<any> {}

  export function Hello(props: Props) {
    return <div>Hello world</div>;
  }
  ```

- 所有路由都使用懒加载

- less 文件要使用作用域，不允许使用全局类

  ```less
  .page-home {
    p {
      font-size: 22px;
    }
  }
  ```

- 除了 `page` 的页面导出，其余所有导出均使用 `export { xxx }` 的形式，不允许有默认导出 `export default xxx`
