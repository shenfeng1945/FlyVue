---
title: Indicator 顶部进度条 
sidebarDepth: 2
---

### Indicator 顶部进度条

显示页面滚动的进度

<ClientOnly>
  <indicator-demos />
</ClientOnly>

#### Indicator Attributes

| 参数 | 说明 | 类型 | 可选择 | 默认值 |
| -- | -- | -- | -- | -- |
| color | 顶部滚动条的背景颜色 | string | - | #137cbd |
| z-index | 指定滚动元素的堆叠层级 | number | - | 999 |

#### Indicator Events

| 参数 | 说明 | 回调参数 |
| -- | -- | -- |
| end | 进度到达 100% 时触发 | - | 
