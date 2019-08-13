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
| selected | 当前激活的面板 | array | - | [] |
| single | 是否手风琴模式 | boolean | - | false |

#### Collapse Events

| 参数 | 说明 | 回调参数 | 
| -- | -- | -- | 
| update:selected | 当前激活面板改变时触发 | (activeValues: array) |

#### CollapseItem Attributes 

| 参数 | 说明 | 类型 | 可选择 | 默认值 |
| -- | -- | -- | -- | -- |
| title | 面板标题 | string | - | - |
| name | 唯一标志符 | string/number | - | - |