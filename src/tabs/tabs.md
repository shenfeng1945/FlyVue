#### 使用示例

```js
<f-tabs selected="vue" direction="horizontal" :renderActivePanel="true">
      <f-tabs-nav :animate="true">
        <f-tabs-item name="react">React</f-tabs-item>
        <f-tabs-item name="vue">Vue</f-tabs-item>
        <f-tabs-item name="angular">Angular</f-tabs-item>
        <f-tabs-item name="backbone" disabled>Backbone</f-tabs-item>
      </f-tabs-nav>
      <f-tabs-content>
        <f-tabs-panel name="react">
          <h3>Example panel: React</h3>
          <p>Lots of people use React as the V in MVC. Since React makes no assumptions about the rest of your technology stack, it's easy to try it out on a small feature in an existing project.</p>
        </f-tabs-panel>
        <f-tabs-panel name="vue">
          <input type="text">
        </f-tabs-panel>
        <f-tabs-panel name="angular">Angular</f-tabs-panel>
      </f-tabs-content>
</f-tabs>
```