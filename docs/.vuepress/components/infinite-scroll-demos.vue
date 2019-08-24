<template>
  <div class="docs-infinite-scroll">
    <f-init-docs></f-init-docs>
    <h4>基础用法</h4>
    <p>在要实现滚动加载的列表上上添加<code>v-infinite-scroll</code>，并赋值相应的加载方法，可实现滚动到底部时自动执行加载方法。</p>
    <f-card :source="basicInfiniteScrollSource">
    <ul class="infinite-list" v-infinite-scroll="load" :infinite-scroll-distance="10" style="overflow: auto;">
      <li v-for="i in count" :key="i">{{i}}</li>
    </ul>
    </f-card>
  </div>
</template>

<script>
import InitDocs from "@/docs-components/initDocs";
import ExampleCard from "@/docs-components/exampleCard";
import InfiniteScroll from '@/directives/infinite-scroll';
import {basicInfiniteScrollSource} from '../static/infinite-scroll-demos';
export default {
  name: 'InfiniteScrollDemos',
  components: {
    'f-init-docs': InitDocs,
    'f-card': ExampleCard
  },
  directives: {
    'infinite-scroll': InfiniteScroll
  },
  data(){
    return {
      count: 8,
      basicInfiniteScrollSource,
    }
  },
  methods: {
    load(){
      this.count += 2;
    }
  }
}
</script>

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


