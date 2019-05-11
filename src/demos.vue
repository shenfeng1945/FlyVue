<template>
  <div id="app">
    <f-nav :selected.sync="selected" :multiple="false" vertical style="width: 100px;">
      <f-nav-item name="home">首页</f-nav-item>
      <f-sub-nav name="about">
        <template slot="title">关于</template>
        <f-nav-item name="culture">企业文化</f-nav-item>
        <f-nav-item name="company">公司规模</f-nav-item>
        <f-sub-nav name="contacts">
          <template slot="title">联系电话</template>
          <f-nav-item name="wechat">微信</f-nav-item>
          <f-nav-item name="qq">QQ</f-nav-item>
          <f-nav-item name="phone">电话</f-nav-item>
        </f-sub-nav>
      </f-sub-nav>
      <f-nav-item name="hire">招聘</f-nav-item>
    </f-nav>
    <f-pager :total-page="10" :current-page.sync="currentPage" onChange="onChange($event)"></f-pager>
  </div>
</template>
<script>
import Nav from "./nav/nav";
import NavItem from "./nav/nav-item";
import SubNav from "./nav/sub-nav";
import Button from "./button/button";
import Pager from "./pager/pager";
export default {
  name: "Demos",
  components: {
    "f-nav": Nav,
    "f-nav-item": NavItem,
    "f-sub-nav": SubNav,
    "f-button": Button,
    "f-pager": Pager
  },
  data() {
    return {
      selected: ["home"],
      currentPage: 1
    };
  },
  methods: {
    onChange(page){
      console.log('请求第' + page + '页');
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


