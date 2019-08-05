<template>
<div class="docs-input-demos">
  <f-init-docs></f-init-docs>
  <h4>基础用法</h4>
  <f-card-group :source="getBasicInput">
     <f-input v-model="basicValue" 
              :disabled="disabledValue"
              :readonly="readonlyValue"
              :clearable="clearableValue"
              :round="roundValue"
              :intent="intentValue"
              placeholder="请输入内容"/>
     <template slot="props">
        <h5 class="f-heading">Props</h5>
        <f-switch v-model="disabledValue" @change="disabledValue = $event;readonlyValue = false">Disabled</f-switch>
        <f-switch v-model="readonlyValue" @change="readonlyValue = $event;disabledValue = false">Readonly</f-switch>
        <f-switch v-model="clearableValue" @change="clearableValue = $event">Clearable</f-switch>
        <f-switch v-model="roundValue" @change="roundValue = $event">Round</f-switch>
        <p>Intent</p>
        <f-select :value="intentValue" @update="intentValue = $event">
          <f-option value="default"></f-option>
          <f-option value="primary"></f-option>
          <f-option value="success"></f-option>
          <f-option value="warn"></f-option>
          <f-option value="danger"></f-option>
        </f-select>
     </template>
  </f-card-group>
  
  
  
  <h4>带 icon 的输入框</h4>
  <f-card :source="IconInput">
    <f-input v-model="icon1Value" prefixIcon="search" placeholder="请输入内容" />
    &nbsp;&nbsp;
    <f-input v-model="icon2Value" suffixIcon="calendar" placeholder="请选择日期" />
  </f-card>
</div>
</template>

<script>
import InitDocs from "@/docs-components/initDocs";
import Input from '@/components/input/Input';
import ExampleCard from "@/docs-components/exampleCard";
import ExampleGroupCard from "@/docs-components/exampleGroupCard";
import Switch from "@/components/formControls/switch";
import Select from "@/components/formControls/select";
import Option from "@/components/formControls/option";
import { IconInput } from '../static/input-demos';
export default {
   name: 'InputDemos',
   components: {
     'f-input': Input,
     'f-init-docs': InitDocs,
     'f-card': ExampleCard,
     'f-card-group': ExampleGroupCard,
     'f-switch': Switch,
     'f-select': Select,
     'f-option': Option
   },
   data(){
     return {
       basicValue: '',
       disabledValue: false,
       readonlyValue: false,
       clearableValue: false,
       roundValue: false,
       intentValue: 'default',
       icon1Value: '',
       icon2Value: '',
       IconInput,
     }
   },
   computed: {
     getBasicInput(){
       let basicProps = `${this.disabledValue ? 'disabled' : ''} ${this.readonlyValue ? 'readonly' : ''} ${this.clearableValue ? 'clearable' : ''} ${this.roundValue ? 'round' : ''} ${this.intentValue === 'default' ? '' : `intent="${this.intentValue}"`}`;
       return {
         desc: '基础的Input组件支持 <code>disabled</code> <code>readonly</code> <code>clearable</code> <code>round</code> 和 <code>intent</code>属性，用于控制input各种状态。',
         code: `
<f-input v-model="value" placeholder="请输入内容" ${basicProps.trim()}/>

<script>
  export default {
    data(){
      return {
        value: ''
      }
    }
  }
<\/script>
         `
       }
     }
   }
}
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


