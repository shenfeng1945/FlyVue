/**
 * 顶栏
 */
export const topNavMenuSource = {
  desc: '导航菜单默认为水平模式，在菜单中通过 <code>subNav</code>组件可以生成二级菜单。 NavItem组件支持 <code>disabled</code>属性表示是否禁用被选择。',
  code: `
<template>
  <f-nav :selected.sync="selected">
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
</template>

<script>
 export default {
   data(){
     return {
       selected: ['sports']
     }
   }
 }
<\/script>
  `
}

/**
 * 侧栏
 */
export const sideNavMenuSource = {
  desc: '通过设置 <code>direction</code>属性来控制菜单是水平还是垂直',
  code: `
<template>
  <f-nav :selected.sync="selected" direction="vertical" style="width: 200px;">
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
</template>
<script>
 export default {
   data(){
     return {
       selected: ['sports']
     }
   }
 }
<\/script>
  `
}