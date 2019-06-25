<template xmlns="http://www.w3.org/1999/XSL/Transform">
  <div id="app">
    <f-nav :selected.sync="selected" direction="vertical">
      <f-nav-item name="sports">体育</f-nav-item>
      <f-sub-nav name="news">
        <template slot="title">新闻</template>
        <f-nav-item name="new1">网易新闻</f-nav-item>
        <f-nav-item name="new2">腾讯新闻</f-nav-item>
        <f-sub-nav name="toutiao">
          <template slot="title">今日头条</template>
          <f-nav-item name="toutiao1">xxxx</f-nav-item>
          <f-nav-item name="toutiao2">yyyy</f-nav-item>
          <f-nav-item name="toutiao3">zzzz</f-nav-item>
        </f-sub-nav>
      </f-sub-nav>
      <f-nav-item name="finance" disabled>财经</f-nav-item>
    </f-nav>
  </div>
</template>
<script>
import Input from "./input/Input";
import Button from "./button/button";
import Icon from "./icon/Icon";
import Nav from './nav/nav';
import NavItem from './nav/nav-item';
import SubNav from './nav/sub-nav';
import Tabs from './tabs/tabs';
import TabsItem from './tabs/tabs-item';
import TabsNav from './tabs/tabs-nav';
import TabsPanel from './tabs/tabs-panel';
import TabsContent from './tabs/tabs-content';


export default {
  name: "Demos",
  components: {
    "f-input": Input,
    "f-icon": Icon,
    "f-button": Button,
    "f-nav": Nav,
    "f-nav-item": NavItem,
    "f-sub-nav": SubNav,
  },
  data() {
    return {
      selected: []
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
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  height: 100%;
}
.box1{
  color: white;
  background: red;
}
.box2{
  color: white;
  background: yellow;
}
.box3{
  background: blue;
  color: white;
}

</style>
