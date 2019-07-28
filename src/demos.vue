<template xmlns="http://www.w3.org/1999/XSL/Transform">
  <div id="app">
  </div>
</template>

<script>
import Input from "@/components/input/Input";
import Button from "@/components/button/button";
import Icon from "@/components/icon/Icon";

export default {
  name: "Demos",
  components: {
    "f-input": Input,
    "f-icon": Icon,
    "f-button": Button,
  },
  data() {
    return {
    };
  },
  created() {
  },
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

.description {
    display: block;
    padding: 0 16px;
    margin: 10px 0;
    line-height: 1.35em;
    overflow: hidden;
    word-wrap: break-word;
}
</style>
