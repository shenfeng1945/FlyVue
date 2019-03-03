<template>
  <div class="cascader">
    <div class="trriger">
      <slot></slot>
    </div>
    <div class="popover">
      <f-cascasder-item v-for="(sourcesItem,index) in sources" :key="index" :sourcesItem="sourcesItem"></f-cascasder-item>
    </div>
  </div>
</template>

<script>
import FlyCascaderItem from "./cascaderItem";
export default {
  name: "FlyCascader",
  props: {
    sources: Array
  },
  components: {
    'f-cascasder-item': FlyCascaderItem
  }
};
</script>

<style lang="scss" scoped>
.cascader {
  padding: 100px;
}
</style>