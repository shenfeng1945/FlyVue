<template>
  <div class="docs-data-picker">
    <f-init-docs></f-init-docs>
    
    <h4>选择日</h4>
    <p>以「日」为基本单位，基础的日期选择控件</p>
    <f-card-group :source="getDatePickerSource">
       <f-date-picker :value="value" @input="value = $event" :showActions="showBarActionValue" :reserveMonthAndYear="reverseMonthValue" :highlightCurrentDay="highlightCurrentDay" :readonly="readonlyValue" :clearable="clearableValue"/>
       <template slot="props">
        <h5 class="f-heading">Props</h5>
        <f-switch v-model="readonlyValue" @change="readonlyValue = $event">Readonly</f-switch>
        <f-switch v-model="showBarActionValue" @change="showBarActionValue = $event">Show actions bar</f-switch>
        <f-switch v-model="highlightCurrentDay" @change="highlightCurrentDay = $event">Highlight current day</f-switch>
        <f-switch v-model="reverseMonthValue" @change="reverseMonthValue = $event">Reverse month and year</f-switch>
        <f-switch v-model="clearableValue" @change="clearableValue = $event">Clearable</f-switch>
       </template>
    </f-card-group>
  </div>
</template>

<script>
import InitDocs from "@/docs-components/initDocs";
import ExampleGroupCard from "@/docs-components/exampleGroupCard";
import DatePicker from '@/components/datepicker/datepicker';
import Switch from "@/components/formControls/switch";
export default {
  name: 'DatePickerDemos' ,
  components: {
    "f-init-docs": InitDocs,
    "f-card-group": ExampleGroupCard,
    "f-date-picker": DatePicker,
    "f-switch": Switch,
  },
  computed: {
    getDatePickerSource(){
      const propsString = `${this.readonlyValue ? 'readonly' : ''} ${this.showBarActionValue ? 'showActions' : ''} ${this.highlightCurrentDay ? 'highlightCurrentDay' : ''} ${this.reverseMonthValue ? 'reserveMonthAndYear' : ''} ${this.clearableValue ? 'clearable' : ''}`
      return {
        desc: '',
        code: `
<template>
  <f-date-picker :value="value" @input="value = $event" ${propsString.trim()}/>
</template>

<script>
 export default {
   data(){
     return {
       value: null
     }
   }
 }
<\/script>
        
        `
      }
    }
  },
  data(){
    return {
      value: null,
      showBarActionValue: false,
      highlightCurrentDay: false,
      reverseMonthValue: false,
      readonlyValue: false,
      clearableValue: true
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


