<template>
  <div id="app">
    <f-upload name="avatar" action="http://localhost:3000/upload">
      <input type="file">
    </f-upload>
  </div>
</template>
<script>
import Nav from "./nav/nav";
import NavItem from "./nav/nav-item";
import SubNav from "./nav/sub-nav";
import Button from "./button/button";
import Pager from "./pager/pager";
import Table from "./table/table";
import Upload from "./upload/upload"
export default {
  name: "Demos",
  components: {
    "f-nav": Nav,
    "f-nav-item": NavItem,
    "f-sub-nav": SubNav,
    "f-button": Button,
    "f-pager": Pager,
    "f-table": Table,
    "f-upload": Upload
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
</style>
