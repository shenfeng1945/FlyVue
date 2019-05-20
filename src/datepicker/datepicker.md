#### DatePicker需求分析
1. 选日期
  - 默认时间
  - 高亮今天
  - 清除
  - 日期范围
2. 选两个日期(日期范围)
3. 选择年/月

#### DatePicker API设计
```
<f-data-picker @update:value="xxx"> 选择一个时间
<f-daterange-picker v-model="xxx"> 选择一段时间
<f-month-picker> 选择一个月
<f-year-picker> 选择一年
```