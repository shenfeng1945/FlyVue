<template xmlns="http://www.w3.org/1999/XSL/Transform">
  <div id="app">
    <f-scroll style="width: 400px;height: 400px">
      <f-virtual-list :data="data"></f-virtual-list>
    </f-scroll>
  </div>
</template>
<script>
import Input from "./input/Input";
import Button from "./button/button";
import Icon from "./icon/Icon";
import Scroll from "./scroll/scroll";
import VirtualList from "./virtualList/virtualList";


export default {
  name: "Demos",
  components: {
    "f-input": Input,
    "f-icon": Icon,
    "f-button": Button,
    "f-scroll": Scroll,
    "f-virtual-list": VirtualList
  },
  data() {
    return {
      data: Array.from({length: 30}, (v,i) => i)
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
    width: 300px;
}
  ul,ol{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

</style>
