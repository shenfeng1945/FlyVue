<template>
  <div id="app">
    <f-upload name="avatar" action="http://localhost:3000/upload" :fileList.sync="fileList" :parse-response="parseResponse">
      <f-button>上传</f-button>
      <template slot="tips">
        <div>只能上传 300kb 以内的png、jpeg 文件</div>
      </template>
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
    "f-upload": Upload,
  },
  data() {
    return {
      fileList: []
    };
  },
  methods: {
   parseResponse(res){
     const id = JSON.parse(res).key;
     return `http://localhost:3000/preview/${id}`;
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
