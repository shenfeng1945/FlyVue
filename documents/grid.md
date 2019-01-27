#### Grid
##### 什么是网格系统/栅格系统
把一个div分成N个部分(N=12,16,24),每个部分无空隙或者有空隙
1. 设计API---用户如何使用
```
// 一行两列各占50%，中间隔8px
<g-row gutter="8">
  <g-col span="12"></g-col>
  <g-col span="12"></g-col>
</g-row>
// 一行三列均三等份，彼此无间隙
<g-row>
  <g-col span="8"></g-col>
  <g-col span="8"></g-col>
  <g-col span="8"></g-col>
</g-row>
```