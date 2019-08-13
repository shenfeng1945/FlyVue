---
title: Input 输入框 
sidebarDepth: 2
---

### Input 输入框

通过鼠标或键盘输入字符

::: warning
Input 为受控组件，它总会显示Vue绑定值
通常情况下，应当处理 input 事件，并更新组件的绑定值(或使用v-model)。否则，输入框显示的值不会改变。
:::

<ClientOnly>
  <input-demos />
</ClientOnly>


### Input Attributes

| 参数 | 说明 | 类型 | 可选择 | 默认值 |
| -- | -- | -- | -- | -- |
| value/v-model | 绑定值 | string/date | - | - |
| placeholder | 输入框占位文本 | string | - | - |
| disabled | 禁用 | boolean | - | false |
| readonly | 原生属性，是否只读 | boolean | - | false |
| clearable | 是否可清空 | boolean | - | false |
| round | 是否半圆角 | boolean | - | false |
| intent | 输入框状态 | string | default/primary/success/warn/danger | default |
| prefixIcon | 输入框头部图标 | string | - | - |
| suffixIcon | 输入框尾部图标 | string | - | - |

### Input Events

| 事件名称 | 说明 | 回调参数 |
| -- | -- | -- | 
| blur | 在 Input 失去焦点时触发 | (value: string) |
| focus | 在 Input 获取焦点时触发 | (value: string) |
| change | 在 Input 值改变时触发 | (value: string) |