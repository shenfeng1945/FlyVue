---
title: Popover 弹出框
sidebarDepth: 2
---

### Popover 弹出框

点击/鼠标移入元素，弹出气泡式的卡片浮层。

<ClientOnly>
  <popover-demos />
</ClientOnly>

### Popover Attributes

| 参数 | 说明 | 类型 | 可选择 | 默认值 |
| -- | -- | -- | -- | -- |
| trigger | 触发方式 | String | click/hover | click |
| position | 出现位置 | String | right/left/bottom/top | top |
| onlyTarget | 触发交互是否仅针对自身元素 | Boolean | - | false |
| width | 浮层内容宽度 | String\|Number | - | 200px |