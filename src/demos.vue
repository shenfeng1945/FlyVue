<template xmlns="http://www.w3.org/1999/XSL/Transform">
  <div id="app">
    <f-tree :data="data"></f-tree>
  </div>
</template>
<script>
import Input from "./input/Input";
import Button from "./button/button";
import Icon from "./icon/Icon";
import Tree from "./tree/tree";

export default {
  name: "Demos",
  components: {
    "f-input": Input,
    "f-icon": Icon,
    "f-button": Button,
    "f-tree": Tree
  },
  data() {
    return {
      data: [{
          label: '一级 1',
          children: [{
            label: '二级 1-1',
            children: [{
              label: '三级 1-1-1'
            }]
          }]
        }, {
          label: '一级 2',
          children: [{
            label: '二级 2-1',
            children: [{
              label: '三级 2-1-1'
            }]
          }, {
            label: '二级 2-2',
            children: [{
              label: '三级 2-2-1'
            }]
          }]
        }, {
          label: '一级 3',
          children: [{
            label: '二级 3-1',
            children: [{
              label: '三级 3-1-1'
            }]
          }, {
            label: '二级 3-2',
            children: [{
              label: '三级 3-2-1'
            }]
          }]
        }],
    };
  },
  created() {},
  methods: {}
};
</script>
<style lang="scss">
html,
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
