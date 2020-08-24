React 项目模版

用于开启一个 React SPA 项目的模板

### 特性

- [x] Typescript
- [x] 路由
- [x] 路由动画
- [x] 路由鉴权
- [x] 多页 Tab
- [ ] Keep Alive
- [ ] 多布局 Layout
- [ ] HTTP 封装

### 目录说明

```
src
├── api                     # API 目录
├── assets                  # 静态资源目录 (需要打包的资源)
├── component               # 全局公共组件 (具备有通用性)
├── layout                  # 页面布局
├── page                    # 页面目录
├── router                  # 路由
└── store                   # 状态管理
└── vendor                  # 第三方包 (例如 SDK)
```

### 项目规范

#### 1. 不允许有 `any`

如果是在不行需要声明 `any` 则编译会报错，使用 `// @ts-expect-error` 进行忽略

#### 2. 组件必须声明 `prop` 的类型

```tsx
import React, {PropsWithChildren} from 'react';

interface Props extends PropsWithChildren<any> {
}

export function Hello (props: Props) {

}
```

#### 3. 所有路由都使用懒加载

#### 4. 所有路由页面都放在 `src/page` 目录下

#### 5. 所有的公共组件(具备有通用性)放在 `src/component` 下

#### 6. 页面独有的组件，放在页面，可以放在页面目录的 `component` 目录下

#### 7. 所有 `css` 均使用 `less`，并且文件名与组件文件(tsx)一致

#### 8. less 文件要使用作用域，不允许使用全局类

```less
.page-home{
  p{
    font-size: 22px;  
  }
}
```
