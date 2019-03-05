<template>
  <div class="cascader">
    <div class="trriger" @click="popoverVisiable = !popoverVisiable">
      <slot></slot>
    </div>
    <div class="popover" v-if="popoverVisiable">
      <cascader-items :items="sources"></cascader-items>
    </div>
  </div>
</template>

<script>
import CascaderItems from "./cascaderItems";
console.log(CascaderItems)
export default {
  name: "FlyCascader",
  props: {
    sources: Array
  },
  components:{'cascader-items':CascaderItems},
  data(){
    return {
      popoverVisiable: false,
    }
  },
};
</script>

<style lang="scss" scoped>
.cascader {
  padding: 100px;
  position: relative;
  .popover{
    border: 1px solid black;
  }
}
</style>