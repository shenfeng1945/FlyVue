<template xmlns="http://www.w3.org/1999/XSL/Transform">
  <div id="app">
   
  </div>
</template>
<script>
import Input from "./input/Input";
import Button from "./button/button";
import Icon from "./icon/Icon";
import Switch from "./formControls/switch";
import Checkbox from "./formControls/checkbox";
import CheckboxGroup from "./formControls/checkboxGroup";
import Radio from "./formControls/radio";
import RadioGroup from "./formControls/radioGroup";

export default {
  name: "Demos",
  components: {
    "f-input": Input,
    "f-icon": Icon,
    "f-button": Button,
    "f-switch": Switch,
    "f-checkbox": Checkbox,
    "f-checkbox-group": CheckboxGroup,
    "f-radio": Radio,
    "f-radio-group": RadioGroup
  },
  data() {
    return {
      radio: undefined,
    };
  },
  created() {
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
.box{
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  height: 100%;
}
.box1{
  color: white;
  background: red;
}
.box2{
  color: white;
  background: yellow;
}
.box3{
  background: blue;
  color: white;
}

</style>
