<template xmlns="http://www.w3.org/1999/XSL/Transform">
  <div id="app">
    <f-popover trigger="click" position="bottom">
      <f-button>Popover target</f-button>
      <template slot="content">
        <div>
          <h3>Confirm deletion</h3>
          <p>Are you sure you want to delete these items? You won't be able to recover them.</p>
          <p>
            <f-button>Cancel</f-button>
            <f-button intent="danger">Delete</f-button>
          </p>
        </div>
      </template>
    </f-popover>
  </div>
</template>
<script>

import Input from "./input/Input";
import Button from "./button/button";
import Popover from "./popover/popover";
export default {
  name: "Demos",
  components: {
    'f-input': Input,
    'f-button': Button,
    'f-popover': Popover
  },
  data() {
    return {
    };
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
body,html{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
