<template xmlns="http://www.w3.org/1999/XSL/Transform">
  <div id="app">
      <f-checkbox @change="onChange" v-model="value" alignIndicator="right" indeterminate>Allen</f-checkbox>
  </div>
</template>
<script>
import Input from "./input/Input";
import Button from "./button/button";
import Icon from "./icon/Icon";
import Switch from "./formControls/switch";
import Checkbox from "./formControls/checkbox";

export default {
  name: "Demos",
  components: {
    "f-input": Input,
    "f-icon": Icon,
    "f-button": Button,
    "f-switch": Switch,
    "f-checkbox": Checkbox
  },
  data() {
    return {
      value: false,
    };
  },
  created() {
  },
  methods: {
      onChange(val){
          this.value = val;
      }
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
