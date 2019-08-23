---
title: NavMenu 导航菜单 
sidebarDepth: 2
---

### NavMenu 导航菜单

为网站提供导航功能的菜单。

<ClientOnly>
  <navMenu-demos />
</ClientOnly>

#### Nav Attributes

| 参数 | 说明 | 类型 | 可选择 | 默认值 |
| -- | -- | -- | -- | -- |
| selected | 当前激活菜单的name值, 支持 .sync 修饰符 | array | - | - |
| multiple | 是否支持多项展开 | boolean | - | false |
| direction | 菜单的方向 | string | horizontal/vertical | horizontal |

#### NavItem Attributes

| 参数 | 说明 | 类型 | 可选择 | 默认值 |
| -- | -- | -- | -- | -- |
| name | 唯一标志 | string | - | - |
| disabled | 是否禁用 | boolean | - | false |

#### SubNav Attributes

| 参数 | 说明 | 类型 | 可选择 | 默认值 |
| -- | -- | -- | -- | -- |
| name | 唯一标志 | string | - | - |