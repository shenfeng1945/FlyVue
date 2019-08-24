<template xmlns="http://www.w3.org/1999/XSL/Transform">
  <div id="app">
    <ul class="infinite-list" v-infinite-scroll="load" :infinite-scroll-distance="10" style="overflow: auto;">
      <li v-for="i in count" :key="i">{{i}}</li>
    </ul>
  </div>
</template>

<script>
import Input from "@/components/input/Input";
import Button from "@/components/button/button";
import Icon from "@/components/icon/Icon";
import InfiniteScroll from './directives/infinite-scroll';

export default {
  name: "Demos",
  components: {
    "f-input": Input,
    "f-icon": Icon,
    "f-button": Button,
  },
  directives: {
    'infinite-scroll': InfiniteScroll
  },
  data() {
    return {
      count: 8,
    };
  },
  methods: {
    load(){
      this.count += 2;
    },
  }
};
</script>
<style lang="scss">
html,
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

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
