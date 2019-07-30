---
title: Layout 布局
sidebarDepth: 2
---

### Layout 布局

协助进行页面级整体布局

<ClientOnly>
  <layout-demos />
</ClientOnly>

#### 组件概述

- `Layout`: 布局容器，其下可嵌套 `Header` `Sider` `Content` `Footer` 或 `Layout` 本身，可放在任何父容器中。
- `Header`: 顶部布局，可嵌套任何元素，只能放在 `Layout` 中。
- `Sider`: 侧边栏，可嵌套任何元素，只能放在 `Layout` 中。
- `Content`: 内容部分，可嵌套任何元素，只能放在 `Layout` 中。
- `Footer`: 底部布局，可嵌套任何元素，只能放在 `Layout` 中。

::: tip
采用 flex 布局实现，请注意[浏览器兼容性](http://caniuse.com/#search=flex)问题。
:::