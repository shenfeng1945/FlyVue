<template xmlns="http://www.w3.org/1999/XSL/Transform">
  <div id="app">
    <f-pull-down-refresh @onRefresh="onRefresh">
      <ul class="list">
        <li v-for="i of count" :key="i">{{i}}</li>
      </ul>
    </f-pull-down-refresh>
  </div>
</template>

<script>
import Input from "@/components/input/Input";
import Button from "@/components/button/button";
import Icon from "@/components/icon/Icon";
import PullDownRefresh from "@/components/pullDownRefresh/pullDownRefresh";

export default {
  name: "Demos",
  components: {
    "f-input": Input,
    "f-icon": Icon,
    "f-button": Button,
    'f-pull-down-refresh': PullDownRefresh
  },
  data() {
    return {
      count: 3,
    };
  },
  methods: {
    load(){
      this.count += 2;
    },
    onRefresh(cb){
      setTimeout(() => {
        cb()
      }, 500)
    }
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

.list {
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
