---
title: Radio 单选框
sidebarDepth: 2
---

### Radio 单选框

单选按钮适用于在多个互斥的选项中选择的场景

<ClientOnly>
  <radio-demos />
</ClientOnly>

### Radio Attributes

| 参数 | 说明 | 类型 | 可选择 | 默认值 |
| -- | -- | -- | -- | -- |
| label | Radio 的 value | number/string | - | - |
| disabled | 是否禁用 | boolean | - | false |
| large | Radio 的是否为大尺寸 | boolean | - | false |
| alignRight | Radio 的圆圈是否在右侧显示 | boolean | - | false |


### Radio-group Attributes

| 参数 | 说明 | 类型 | 可选择 | 默认值 |
| -- | -- | -- | -- | -- |
| value/v-model | 绑定值 | string/number | - | - |
| name | 区别每个单选组 | string | - | - |
| disabled | 单选组是否全部禁用 | boolean | - | false |
| inline | 单选组是否行内展示 | boolean | - | false |
| large | 单选组的是否为大尺寸 | boolean | - | false |
| alignRight | 单选组的每项圆圈是否在右侧展示 | boolean | - | false |

### Radio-group Events

| 参数 | 说明 | 回调参数 | 
| -- | -- | -- | 
| change | 绑定值变化时触发的事件 | 选中的 Radio label 值 |
