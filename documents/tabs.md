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
##### 实现方案
1. 数据自上而下: 爷爷通知爸爸，爸爸通知儿子；事件自下而上: 儿子通知爸爸，爸爸通知爷爷。---- 差
2. 事件总线(EventBus)，全家订阅事件，孙子通知事件中心，由事件中心去通知订阅者。 ---- 好