---
title: Collapse 折叠面板 
sidebarDepth: 2
---

### Collapse 折叠面板 

通过折叠面板收纳内容区域


<ClientOnly>
  <collapse-demos />
</ClientOnly>

#### Collapse Attributes

| 参数 | 说明 | 类型 | 可选择 | 默认值 |
| -- | -- | -- | -- | -- |
| selected | 当前激活的面板, 支持 .sync 修饰符 | array | - | [] |
| single | 是否手风琴模式 | boolean | - | false |

#### CollapseItem Attributes 

| 参数 | 说明 | 类型 | 可选择 | 默认值 |
| -- | -- | -- | -- | -- |
| title | 面板标题 | string | - | - |
| name | 唯一标志符 | string/number | - | - |