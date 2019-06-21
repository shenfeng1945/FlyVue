<template xmlns="http://www.w3.org/1999/XSL/Transform">
  <div id="app">
    <f-slides :selected.sync="selected" :autoPlay="true" trigger="click">
      <f-slides-item name="1">
        <div class="box box1">hello</div>
      </f-slides-item>
      <f-slides-item name="2">
        <div class="box box2">hello</div>
      </f-slides-item>
      <f-slides-item name="3">
        <div class="box box3">allen</div>
      </f-slides-item>
    </f-slides>
  </div>
</template>
<script>
import Input from "./input/Input";
import Button from "./button/button";
import Icon from "./icon/Icon";
import Slides from "./carousel/slides";
import SlidesItem from "./carousel/slides-item";


export default {
  name: "Demos",
  components: {
    "f-input": Input,
    "f-icon": Icon,
    "f-button": Button,
    "f-slides": Slides,
    "f-slides-item": SlidesItem
  },
  data() {
    return {
      selected: '1'
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
  height: 350px;
  border: 1px solid red;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32px;
}
.box1{
  color: red;
}
.box2{
  color: yellow;
}
.box3{
  color: blue;
}

</style>
