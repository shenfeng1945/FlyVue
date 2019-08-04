<template>
    <div class="docs-checkbox-demos">
        <f-init-docs></f-init-docs>
        <f-card-group :source="getCheckboxSource">
            <p style="margin: 20px 0 10px 0;">Assign responsibility</p>
            <f-checkbox-group v-model="checklist"
                              @change="checklist = $event"
                              :disabled="disabledValue"
                              :inline="inlineValue"
                              :large="largeValue"
                              :alignRight="alignRightValue"
            >
                <f-checkbox label="Gilad Gray">Gilad Gray</f-checkbox>
                <f-checkbox label="Jason Killian">Jason Killian</f-checkbox>
                <f-checkbox label="Antoine Llorca">Antoine Llorca</f-checkbox>
            </f-checkbox-group>
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
    import InitDocs from "@/docs-components/initDocs";
    import ExampleGroupCard from "@/docs-components/exampleGroupCard";
    import Switch from "@/components/formControls/switch";
    import Checkbox from '@/components/formControls/checkbox';
    import CheckboxGroup from '@/components/formControls/checkboxGroup';
    export default {
        name: "CheckboxDemos",
        components: {
            'f-init-docs': InitDocs,
            'f-card-group': ExampleGroupCard,
            'f-switch': Switch,
            'f-checkbox': Checkbox,
            'f-checkbox-group': CheckboxGroup
        },
        data(){
            return {
                checklist: [],
                disabledValue: false,
                inlineValue: false,
                largeValue: false,
                alignRightValue: false,
            }
        },
        computed: {
            getCheckboxSource() {
      let propsString = `${this.disabledValue ? "disabled" : ''} ${this.inlineValue ? "inline" : ''} ${this.largeValue ? "large" : ''} ${this.alignRightValue ? 'alignRight' : ''}`;
      return {
        desc: '<code>checkbox-group</code>元素能把多个checkbox管理为一组，只需要在<code>Group</code>中使用<code>v-model</code>绑定<code>Array</code>类型的变量，绑定change事件更改v-model值即可。通过设置<code>disabled</code> <code>inline</code> <code>large</code>和<code>alignRight</code>属性可以控制多选框的状态。',
        code: `
<f-radio-group v-model="checklist" @change="checklist = $event" ${propsString.trim()}>
    <f-checkbox label="Gilad Gray">Gilad Gray</f-checkbox>
    <f-checkbox label="Jason Killian">Jason Killian</f-checkbox>
    <f-checkbox label="Antoine Llorca">Antoine Llorca</f-checkbox>
</f-radio-group>

<script>
export default {
    data(){
        return {
            checklist: [],
        }
    }
}
<\/script>
`
      };
    }
        }
    }
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