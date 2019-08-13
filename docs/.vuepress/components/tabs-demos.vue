<template>
  <div class="docs-tabs">
    <f-init-docs></f-init-docs>
    <h4>基本用法</h4>
    <p>标签页支持横向和水平方向布局</p>
    <f-card-group :source="getTabsSource">
      <f-tabs selected="vue" :direction="directionValue ? 'vertical' : 'horizontal'" :renderActivePanel="renderActivePanel">
        <f-tabs-nav :animate="animateValue">
          <f-tabs-item name="react">React</f-tabs-item>
          <f-tabs-item name="vue">Vue</f-tabs-item>
          <f-tabs-item name="angular">Angular</f-tabs-item>
          <f-tabs-item name="backbone" disabled>Backbone</f-tabs-item>
        </f-tabs-nav>
        <f-tabs-content>
          <f-tabs-panel name="react">
            <h3>Example panel: React</h3>
            <input type="text" />
          </f-tabs-panel>
          <f-tabs-panel name="vue">
            <h3>Example panel: Vue</h3>
          </f-tabs-panel>
          <f-tabs-panel name="angular">
            <h3>Example panel: Angular</h3>
          </f-tabs-panel>
        </f-tabs-content>
      </f-tabs>
      <template slot="props">
        <h5 class="f-heading">Props</h5>
        <f-switch v-model="animateValue" @change="animateValue = $event">Animate indicator</f-switch>
        <f-switch v-model="directionValue" @change="directionValue = $event">Use vertical tabs</f-switch>
        <f-switch v-model="renderActivePanel" @change="renderActivePanel = $event">Render active tab panel only</f-switch>
      </template>
    </f-card-group>
  </div>
</template>

<script>
import InitDocs from "@/docs-components/initDocs";
import ExampleGroupCard from "@/docs-components/exampleGroupCard";
import Switch from "@/components/formControls/switch";
import Tabs from "@/components/tabs/tabs";
import TabsContent from "@/components/tabs/tabs-content";
import TabsItem from "@/components/tabs/tabs-item";
import TabsNav from "@/components/tabs/tabs-nav";
import TabsPanel from "@/components/tabs/tabs-panel";
import Input from "@/components/input/Input";
export default {
  name: "TabsDemos",
  components: {
    "f-init-docs": InitDocs,
    "f-card-group": ExampleGroupCard,
    "f-input": Input,
    "f-switch": Switch,
    "f-tabs": Tabs,
    "f-tabs-content": TabsContent,
    "f-tabs-item": TabsItem,
    "f-tabs-nav": TabsNav,
    "f-tabs-panel": TabsPanel
  },
  data(){
    return {
      directionValue: false, 
      animateValue: false,
      renderActivePanel: false 
    }
  },
  computed: {
    getTabsSource() {
      return {
        desc: "",
        code: ""
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.f-heading {
  color: #182026;
  font-weight: 600;
  margin: 0 0 10px;
  padding: 0;
  font-size: 16px;
}
.f-switch {
    margin-bottom: 10px;
}
</style>


