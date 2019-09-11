---
title: Backtop 回到顶部 
sidebarDepth: 2
---

### Backtop 回到顶部

返回页面顶部的操作按钮

<ClientOnly>
  <backtop-demos />
</ClientOnly>

#### Backtop Attributes

| 参数 | 说明 | 类型 | 可选择 | 默认值 |
| -- | -- | -- | -- | -- |
| target | 触发滚动的对象 | string | - | body |
| visibility-height | 滚动高度达到此参数才出现 | number | - | 200 |
| right | 控制其显示位置，距离页面右边距 | number | - | 40 |
| bottom | 控制其显示位置, 距离页面底部距离 | number | - | 40 |
| speed | 控制其回到顶部的速率 | string | slow/middle/quick | middle |

#### Backtop Events

| 参数 | 说明 | 回调事件 |
| -- | -- | -- |
| click | 点击按钮触发的事件 | 点击事件 |


