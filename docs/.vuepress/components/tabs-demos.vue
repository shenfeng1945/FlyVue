<template>
  <div class="docs-tabs">
    <f-init-docs></f-init-docs>
    <h4>基本用法</h4>
    <p>标签页支持横向和水平方向布局</p>
    <f-card-group :source="getTabsSource">
      <f-tabs selected="tab1" :direction="directionValue ? 'vertical' : 'horizontal'" :renderActivePanel="renderActivePanel">
        <f-tabs-nav :animate="animateValue">
          <f-tabs-item name="tab1">Tab 1</f-tabs-item>
          <f-tabs-item name="tab2">Tab 2</f-tabs-item>
          <f-tabs-item name="tab3">Tab 3</f-tabs-item>
          <f-tabs-item name="tab4" disabled>Tab 4</f-tabs-item>
        </f-tabs-nav>
        <f-tabs-content>
          <f-tabs-panel name="tab1">
            <p>Content of Tab Pane 1</p>
            <f-input></f-input>
          </f-tabs-panel>
          <f-tabs-panel name="tab2">
            <p>Content of Tab Pane 2</p>
          </f-tabs-panel>
          <f-tabs-panel name="tab3">
            <p>Content of Tab Pane 3</p>
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
      animateValue: true,
      renderActivePanel: false 
    }
  },
  computed: {
    getTabsSource() {
      const stringValue = `:direction="${this.directionValue ? 'vertical' : 'horizontal'}" ${this.renderActivePanel ? 'renderActivePanel' : ''}`
      return {
        desc: "<code>Tabs组件</code>支持<code>direction</code>和<code>renderActivePanel</code>属性分别设置标签的位置，是否重新渲染面板的内容。<code>TabsNav组件</code>支持<code>animate</code>属性控制下标是否有动画效果。",
        code: `
<template>
  <f-tabs selected="tab1" ${stringValue.trim()}>
    <f-tabs-nav ${this.animateValue ? 'animate' : ''}>
      <f-tabs-item name="tab1">Tab 1</f-tabs-item>
      <f-tabs-item name="tab2">Tab 2</f-tabs-item>
      <f-tabs-item name="tab3">Tab 3</f-tabs-item>
      <f-tabs-item name="tab4" disabled>Tab 4</f-tabs-item>
    </f-tabs-nav>
    <f-tabs-content>
      <f-tabs-panel name="tab1">
        <p>Content of Tab Pane 1</p>
        <f-input></f-input>
      </f-tabs-panel>
      <f-tabs-panel name="tab2">
        <p>Content of Tab Pane 2</p>
      </f-tabs-panel>
      <f-tabs-panel name="tab3">
        <p>Content of Tab Pane 3</p>
      </f-tabs-panel>
    </f-tabs-content>
  </f-tabs>
</template>
        `
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
    font-size: 14px;
}
</style>


