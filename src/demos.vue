<template>
  <div id="app">
    <f-nav :selected.sync="selected" :multiple="false">
        <f-nav-item name="home">首页</f-nav-item>
        <f-nav-item name="about">关于</f-nav-item>
        <f-nav-item name="hire">招聘</f-nav-item>
    </f-nav>
  </div>
</template>
<script>
import Nav from './nav/nav'
import NavItem from './nav/nav-item'
import SubNav from './nav/sub-nav'
export default {
  name: "Demos",
  components: {
      'f-nav': Nav,
      'f-nav-item': NavItem,
      'f-sub-nav': SubNav
  },
  data(){
    return {
      selected: ['home']
    }
  },
};
</script>
<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

</style>


