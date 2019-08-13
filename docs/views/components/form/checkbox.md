---
title: Checkbox 多选框 
sidebarDepth: 2
---

### Checkbox 多选框

一组备选项中进行多选

<ClientOnly>
  <checkbox-demos />
</ClientOnly>


### Checkbox Attributes

| 参数 | 说明 | 类型 | 可选择 | 默认值 |
| -- | -- | -- | -- | -- |
| label | Checkbox 的 value | number/string | - | - |
| disabled | 是否禁用 | boolean | - | false |
| large | Checkbox 的是否为大尺寸 | boolean | - | false |
| alignRight | Checkbox 的圆圈是否在右侧显示 | boolean | - | false |


### Checkbox-Group Attributes

| 参数 | 说明 | 类型 | 可选择 | 默认值 |
| -- | -- | -- | -- | -- |
| value/v-model | 绑定值 | string/number | - | - |
| disabled | 多选组是否全部禁用 | boolean | - | false |
| inline | 多选组是否行内展示 | boolean | - | false |
| large | 多选组的是否为大尺寸 | boolean | - | false |
| alignRight | 多选组的每项圆圈是否在右侧展示 | boolean | - | false |

### Checkbox-Group Events

| 参数 | 说明 | 回调参数 | 
| -- | -- | -- | 
| change | 绑定值变化时触发的事件 | 选中的 Checkbox label 值 |
