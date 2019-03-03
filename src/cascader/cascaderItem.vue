<template>
  <div class="cascader-item">
    <div class="name">{{sourcesItem.name}}</div>
    <template v-if="sourcesItem.children">
      <FlyCascaderItem v-for="(item,i) in sourcesItem.children" :key="i" :sourcesItem="item"></FlyCascaderItem>
    </template>
  </div>
</template>

<script>
export default {
  name: "FlyCascaderItem",
  props: {
      sourcesItem: Object
  }
};
</script>

<style lang="scss" scoped>
.cascader-item {
}
</style>