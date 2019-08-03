<template>
  <div class="f-radio-demos">
    <f-init-docs></f-init-docs>
    <f-card-group :source="getRadioSource">
      <p style="margin: 20px 0px 10px 0px;">Determine lunch</p>
      <f-radio-group
        v-model="radio"
        @change="radio = $event"
        :disabled="disabledValue"
        :inline="inlineValue"
        :large="largeValue"
        :alignRight="alignRightValue"
      >
        <f-radio label="Soup">Soup</f-radio>
        <f-radio label="Salad">Salad</f-radio>
        <f-radio label="Sandwich">Sandwich</f-radio>
      </f-radio-group>
      <template slot="props">
        <h5 class="f-heading">Props</h5>
        <f-switch v-model="disabledValue" @change="disabledValue = $event">Disabled</f-switch>
        <f-switch v-model="inlineValue" @change="inlineValue = $event">Inline</f-switch>
        <f-switch v-model="largeValue" @change="largeValue = $event">Large</f-switch>
       <p>Align indicator</p>
         <f-switch v-model="alignRightValue" @change="alignRightValue = $event" activeText="right" inactiveText="left"></f-switch>
      </template>
    </f-card-group>
  </div>
</template>

<script>
import ExampleCard from "@/docs-components/exampleCard";
import InitDocs from "@/docs-components/initDocs";
import Radio from "@/components/formControls/radio";
import RadioGroup from "@/components/formControls/radioGroup";
import ExampleGroupCard from "@/docs-components/exampleGroupCard";
import Switch from "@/components/formControls/switch";
export default {
  name: "RadioDemos",
  components: {
    "f-card": ExampleCard,
    "f-init-docs": InitDocs,
    "f-radio": Radio,
    "f-radio-group": RadioGroup,
    "f-card-group": ExampleGroupCard,
    "f-switch": Switch
  },
  data() {
    return {
      radio: undefined,
      disabledValue: false,
      inlineValue: false,
      largeValue: false,
      alignRightValue: false,
    };
  },
  computed: {
    getRadioSource() {
      let propsString = `${this.disabledValue ? "disabled" : ''} ${this.inlineValue ? "inline" : ''} ${this.largeValue ? "large" : ''} ${this.alignRightValue ? 'alignRight' : ''}`;
      return {
        desc: '结合<code>f-radio-group</code>元素和子元素<code>f-radio</code>可以实现单选组,在<code>f-radio-group</code>设置v-model值，绑定change事件更改v-model值，在<code>f-radio</code>子元素设置label值即可。通过设置<code>disabled</code> <code>inline</code> <code>large</code>属性可以控制单选组的状态。',
        code: `
<f-radio-group v-model="radio" @change="radio = $event" ${propsString.trim()}>
    <f-radio label="Soup">Soup</f-radio>
    <f-radio label="Salad">Salad</f-radio>
    <f-radio label="Sandwich">Sandwich</f-radio>
</f-radio-group>

<script>
export default {
    data(){
        return {
            radio: undefined,
        }
    }
}
<\/script>
`
      };
    }
  }
};
</script>

<style scoped lang="scss">
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