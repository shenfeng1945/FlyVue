---
title: Grid 栅格 
sidebarDepth: 2
---

### Grid 栅格

通过基础的 24 分栏，迅速简便地创建布局。

<ClientOnly>
  <grid-demos />
</ClientOnly>


#### Row Attributes

| 参数 | 说明 | 类型 | 可选择 | 默认值 |
| -- | -- | -- | -- | -- |
| gutter | 栅格间隔 | string/number | - | 0 |
| align | 栅格对齐方式 | sting | left/center/right | left |

#### Col Attributes

| 参数 | 说明 | 类型 | 可选择 | 默认值 |
| -- | -- | -- | -- | -- |
| span | 栅格占据列数 | number/string | - | 0 |
| offset | 栅格左侧的间隔格数 | number/string | - | 0 |
| ipad | > 577px 响应式栅格数据属性对象 | object(例如: {span: 4, offset: 4}) | - | - |
| narrowPc | > 769px 响应式栅格数据属性对象 | object(例如: {span: 4, offset: 4}) | - | - |
| pc | > 993px 响应式栅格数据属性对象 | object(例如: {span: 4, offset: 4}) | - | - |
| widePc | > 1021px 响应式栅格数据属性对象 | object(例如: {span: 4, offset: 4}) | - | - |
