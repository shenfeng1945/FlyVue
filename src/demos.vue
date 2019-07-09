<template xmlns="http://www.w3.org/1999/XSL/Transform">
  <div id="app">
     <f-date-picker :value="xxx" @input="xxx = $event"></f-date-picker>
     {{value}}
     <f-select :value="value" @update="value = $event">
       <f-option value="请选择"></f-option>
       <f-option v-for="item of options" 
           :key="item.value"
           :value="item.value"
           :label="item.label"
           ></f-option>
     </f-select>
  </div>
</template>
<script>
import Input from "./input/Input";
import Button from "./button/button";
import Icon from "./icon/Icon";
import DatePicker from "./datepicker/datepicker";
import Select from "./formControls/select";
import Option from "./formControls/option";


export default {
  name: "Demos",
  components: {
    "f-input": Input,
    "f-icon": Icon,
    "f-button": Button,
    "f-date-picker": DatePicker,
    "f-option": Option,
    "f-select": Select

  },
  data() {
    return {
      xxx: new Date(),
      value: '选项1',
      options: [
        {value: '选项1', label: '黄金糕'},
        {value: '选项2', label: '双皮奶'},
        {value: '选项3', label: '蚵仔煎'},
        {value: '选项4', label: '龙须面'},
      ]
    };
  },
  created() {},
  methods: {
   
  }
};
</script>
<style lang="scss">
html,
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app{
  margin-left: 200px;
  margin-top: 200px;
}
</style>
