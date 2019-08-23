---
title: Pagination 分页
sidebarDepth: 2
---

### Pagination 分页

当数据量过多时，使用分页分解数据。

<ClientOnly>
  <pager-demos />
</ClientOnly>

#### Pagination Attributes

| 参数 | 说明 | 类型 | 可选择 | 默认值 |
| -- | -- | -- | -- | -- |
| totalPage | 总条目数 | number | - | - |
| currentPage | 当前展示页面，支持 .sync 修饰符 | number | - | 1 |
| background | 是否为分页按钮添加背景色 | boolean | - | false |

#### Pagination Events

| 事件名称 | 说明 | 回调参数 |
| -- | -- | -- | 
| onChange | currentPage 改变时会触发 | (val: number) |