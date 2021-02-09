---
title: Switch 开关 
sidebarDepth: 2
---

### Switch 开关

表示两种相互对立的状态间的切换，多用于触发「开/关」。

<ClientOnly>
  <switch-demos />
</ClientOnly>

### Switch Attributes

| 参数 | 说明 | 类型 | 可选择 | 默认值 |
| -- | -- | -- | -- | -- |
| value/v-model | 绑定值 | boolean | - | - |
| disabled | 是否禁用 | boolean | - | false |
| large | Switch 的是否为大尺寸 | boolean | - | false |
| active-color | Switch 打开时的背景色 | string | - | #137cbd |
| inactive-color | Switch 关闭时的背景色 | string | - | rgba(167,182,194,.5) |
| active-text | Switch 打开时的文字描述 | string | - | - |
| inactive-text | Switch 关闭时的文字描述 | string | - | - |
| width | Switch 的宽度 | string/number | - | 30/'30' |

### Switch Event

| 事件名称 | 说明 | 回调参数 |
| -- | -- | -- | 
| change | Switch 状态发生变化的回调函数 | 新状态的值 |