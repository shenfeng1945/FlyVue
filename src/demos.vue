<template xmlns="http://www.w3.org/1999/XSL/Transform">
  <div id="app">
    <f-tabs selected="react">
      <f-tabs-nav animate>
        <f-tabs-item name="react">React</f-tabs-item>
        <f-tabs-item name="vue">Vue</f-tabs-item>
        <f-tabs-item name="angular">Angular</f-tabs-item>
        <f-tabs-item name="backbone" disabled>Backbone</f-tabs-item>
      </f-tabs-nav>
      <f-tabs-content style="margin-top: 20px;">
        <f-tabs-panel name="react">
          <h3>Example panel: React</h3>
          <p>Lots of people use React as the V in MVC. Since React makes no assumptions about the rest of your technology stack, it's easy to try it out on a small feature in an existing project.</p>
        </f-tabs-panel>
        <f-tabs-panel name="vue">world</f-tabs-panel>
        <f-tabs-panel name="angular">Angular</f-tabs-panel>
      </f-tabs-content>
    </f-tabs>
  </div>
</template>
<script>

import Input from "./input/Input";
import Button from "./button/button";
import Tabs from "./tabs/tabs";
import TabsContent from "./tabs/tabs-content";
import TabsItem from "./tabs/tabs-item";
import TabsNav from "./tabs/tabs-nav";
import TabsPanel from "./tabs/tabs-panel";
export default {
  name: "Demos",
  components: {
    'f-input': Input,
    'f-button': Button,
    'f-tabs': Tabs,
    'f-tabs-content': TabsContent,
    'f-tabs-item': TabsItem,
    'f-tabs-nav': TabsNav,
    'f-tabs-panel': TabsPanel
  },
  data() {
    return {
    };
  },
  methods: {
    
  }
};
</script>
<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body,html{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
