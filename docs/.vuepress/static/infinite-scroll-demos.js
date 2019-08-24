/**
 * 基础用法
 */
export const basicInfiniteScrollSource = {
  desc: '通过设置 <code>infinite-scroll-distance</code>属性可以控制触发加载的距离阈值。',
  code: `
<template>
  <ul class="infinite-list" v-infinite-scroll="load" :infinite-scroll-distance="10" style="overflow: auto;">
    <li v-for="i in count" :key="i">{{i}}</li>
  </ul>
</template>       

<script>
  export default {
    data(){
      count: 8
    },
    methods: {
      load(){
        this.count += 2;
      }
    }
  }
<\/script>

<style lang="scss" scoped>
.infinite-list {
  padding: 0;
  margin: 0;
  height: 300px;
  list-style: none;
  li {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    background: #e8f3fe;
    margin: 10px;
    color: #7dbcfc;
  }
}
</style>
`
}