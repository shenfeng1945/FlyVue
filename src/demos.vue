<template xmlns="http://www.w3.org/1999/XSL/Transform">
  <div id="app">
     <f-button @click="open">点我</f-button>
  </div>
</template>
<script>

import Input from "./input/Input";
import Button from "./button/button";
export default {
  name: "Demos",
  components: {
    'f-input': Input,
    'f-button': Button,
  },
  data() {
    return {
      isOpen: false
    };
  },
  methods: {
    open(){
      this.$toast(`hello`, {
        position: 'top',
        buttonClose: {
          text: 'Close',
          callback: () => console.log('it close')
        }
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
