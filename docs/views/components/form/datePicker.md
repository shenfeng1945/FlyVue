---
title: DatePicker 日期选择器 
sidebarDepth: 2
---

### DatePicker 日期选择器

用于选择或输入日期

<ClientOnly>
  <datePicker-demos />
</ClientOnly>

### Attributes

| 参数 | 说明 | 类型 | 可选择 | 默认值 |
| -- | -- | -- | -- | -- |
| value | 绑定值 | date/null | - | null |
| readonly | 完全只读 | boolean | - | false |
| clearable | 输入框是否显示清除按钮 | boolean | - | true |
| placeholder | 输入框占位文本 | string | - | 请选择日期 |
| showActions | 日期框是否带快捷项 | boolean | - | false |
| reserveMonthAndYear | 日期框中月份与年是否对调 | boolean | - | false |
| highlightCurrentDay | 日期框中是否高亮今日日期 | boolean | - | false |

### Events


| 参数 | 说明 | 回调参数 | 
| -- | -- | -- | 
| input | 用户确认选定的值时触发 | (value: Date \| Object) |

