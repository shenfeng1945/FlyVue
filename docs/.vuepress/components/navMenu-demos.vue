<template>
  <div class="nav-menu-docs">
    <f-init-docs></f-init-docs>
    <h4>顶栏</h4>
    <p>适用广泛的基础用法。</p>
    <f-card :source="topNavMenuSource">
      <f-nav :selected.sync="selected1">
        <f-nav-item name="sports">体育</f-nav-item>
        <f-sub-nav name="news">
          <template slot="title">新闻</template>
          <f-nav-item name="new1">网易新闻</f-nav-item>
          <f-nav-item name="new2">腾讯新闻</f-nav-item>
          <f-sub-nav name="toutiao">
            <template slot="title">今日头条</template>
            <f-nav-item name="toutiao1">选项1</f-nav-item>
            <f-nav-item name="toutiao2">选项2</f-nav-item>
            <f-nav-item name="toutiao3">选项3</f-nav-item>
          </f-sub-nav>
        </f-sub-nav>
        <f-nav-item name="finance" disabled>财经</f-nav-item>
        <f-nav-item name="flyVue">
          <a href="https://github.com/shenfeng/FlyVue" target="_blank">FlyVue</a>
        </f-nav-item>
      </f-nav>
    </f-card>
    
    <h4>侧栏</h4>
    <p>垂直菜单，可内嵌子菜单。</p>
    <f-card :source="sideNavMenuSource">
      <f-nav :selected.sync="selected2" direction="vertical" multiple style="width: 200px;">
        <f-nav-item name="sports">体育</f-nav-item>
        <f-sub-nav name="news">
          <template slot="title">新闻</template>
          <f-nav-item name="new1">网易新闻</f-nav-item>
          <f-nav-item name="new2">腾讯新闻</f-nav-item>
          <f-sub-nav name="toutiao">
            <template slot="title">今日头条</template>
            <f-nav-item name="toutiao1">选项1</f-nav-item>
            <f-nav-item name="toutiao2">选项2</f-nav-item>
            <f-nav-item name="toutiao3">选项3</f-nav-item>
          </f-sub-nav>
        </f-sub-nav>
        <f-nav-item name="finance" disabled>财经</f-nav-item>
        <f-nav-item name="flyVue">
          <a href="https://github.com/shenfeng/FlyVue" target="_blank">FlyVue</a>
        </f-nav-item>
      </f-nav>
    </f-card>
  </div>
</template>

<script>
import ExampleCard from "@/docs-components/exampleCard";
import InitDocs from "@/docs-components/initDocs";
import Nav from "@/components/nav/nav";
import NavItem from "@/components/nav/nav-item";
import SubNav from "@/components/nav/sub-nav";
import { topNavMenuSource, sideNavMenuSource } from "../static/navMenu-demos";
export default {
  name: "NavMenuDemos",
  components: {
    "f-nav": Nav,
    "f-nav-item": NavItem,
    "f-sub-nav": SubNav,
    "f-init-docs": InitDocs,
    "f-card": ExampleCard
  },
  data() {
    return {
      topNavMenuSource,
      sideNavMenuSource,
      selected1: ["sports"],
      selected2: ["sports"],
    };
  }
};
</script>

<style lang="scss" scoped>
.nav-menu-docs {
  a {
    color: inherit;
    text-decoration: none;
    vertical-align: middle;
  }
}
</style>


