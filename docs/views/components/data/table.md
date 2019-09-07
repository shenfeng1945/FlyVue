---
title: Table 表格
sidebarDepth: 2
---

### Table 表格

<ClientOnly>
  <table-demos />
</ClientOnly>

#### Table Attributes

| 参数 | 说明 | 类型 | 可选择 | 默认值 |
| -- | -- | -- | -- | -- |
| data-source | 显示的数据 | array | - | [] |
| numberVisible | 是否展示头部序号 | boolean | - | false |
| bordered | 是否带有纵向边框 | boolean | - | false |
| striped | 是否为斑马纹 table | boolean | - | false |
| selectedItems | 表格为多选时，表示已选中的列表, 支持修饰符 .sync | array | - | [] |
| checkable | 表格是否支持多选，需搭配selectedItems使用 | boolean | - | false |
| orderBy | 默认的排序列和顺序，field属性指定默认的排序的列，order 指定默认排序的顺序，支持修饰符 .sync | object | order: esc(升)/desc(降) | - |
| loading | 是否显示加载动画，可结合异步加载数据时使用 | boolean | - | false |
| height | 表格高度，用于固定表头 | number | - | - |
| expandField | 表示要展开的key，对应于data-source中的属性。 | string | - | - |

#### TableColumn Attributes

| 参数 | 说明 | 类型 | 可选择 | 默认值 |
| -- | -- | -- | -- | -- |
| text | 显示的标题 | string | - | - |
| field | 对应列内容的字段名 | string | - | - |
| width | 对应列宽 | string/number | - | - |
| sortable | 对应列是否可以排序 | boolean | - | false |