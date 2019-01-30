#### Tabs 标签页

##### 需求

1. 可切换tabs
2. tabs里有icon
3. tabs可以横/竖
4. 右侧可加按钮
5. tabs可删除
##### Dom结构

```
<g-tabs selected="tab1">
 <g-tabs-nav>
   <g-tabs-item name="tab1"></g-tabs-item>
   <g-tabs-item name="tab2"></g-tabs-item>
 </g-tabs-nav>
 <g-tabs-content>
   <g-tabs-panel name="tab2"><g-tabs-panel>
   <g-tabs-panel name="tab1"><g-tabs-panel>
 </g-tabs-content>
</g-tabs>
```