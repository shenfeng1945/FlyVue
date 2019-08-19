---
title: Tabs 标签页 
sidebarDepth: 2
---

### Tabs 标签页

分隔内容上有关联但属于不同类别的数据集合。

<ClientOnly>
  <tabs-demos />
</ClientOnly>

#### Tabs Attributes

| 参数 | 说明 | 类型 | 可选择 | 默认值 |
| -- | -- | -- | -- | -- |
| selected | 绑定值，选中选项卡的name | string | - | - |
| direction | 选项卡所在位置 | string | horizontal/vertical | horizontal |
| renderActivePanel | 是否重新渲染选中的选项卡内容 | boolean | - | false |

#### TabsNav Attributes

| 参数 | 说明 | 类型 | 可选择 | 默认值 |
| -- | -- | -- | -- | -- |
| animate | 选项卡下标是否有动画 | boolean | - | true |

#### TabsPanel Attributes

| 参数 | 说明 | 类型 | 可选择 | 默认值 |
| -- | -- | -- | -- | -- |
| name | 与选项卡绑定值 value 对应的标识符，表示选项卡别名 | string/number | - | - |