---
title: Cascader 级联选择器 
sidebarDepth: 2
---

### Cascader 级联选择器

当一个数据集合有清晰的层级结构时，可通过级联选择器逐级查看并选择。

<ClientOnly>
  <cascader-demos />
</ClientOnly>

### Cascader Attributes


| 参数 | 说明 | 类型 | 可选择 | 默认值 |
| -- | -- | -- | -- | -- |
| sources | 数据源, 支持 .sync 修饰符 | Array | - | [] |
| popoverHeight | 浮层高度 | String | 如'100px','1vh' | - |
| clearable | 是否支持清空选项 | Boolean | - | false |
| placeholder | 输入框占位文本 | String | - | 请选择 |
| loadData | 是否支持动态加载传递的函数 | Function | - | (item: Object, cb: Function) |
