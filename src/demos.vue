<template xmlns="http://www.w3.org/1999/XSL/Transform">
  <div id="app">
     <f-date-picker :value="value" @input="value = $event" :showActions="false" :reserveMonthAndYear="true"></f-date-picker>
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
      value: null,
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
