<template xmlns="http://www.w3.org/1999/XSL/Transform">
  <div id="app">
    <f-button @click="open">点我</f-button>
  </div>
</template>
<script>

import Input from "./input/Input";
import Button from "./button/button";
import Toast from "./toast/toast";
export default {
  name: "Demos",
  components: {
    'f-input': Input,
    'f-button': Button,
    'f-toast': Toast
  },
  data() {
    return {
    };
  },
  methods: {
    open(){
      this.$toast(`<h1>hello</h1>`, {
        enableHtml: true
      })
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
</style>
