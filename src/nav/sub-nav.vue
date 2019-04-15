<template>
  <div class="f-sub-nav">
    <span>
      <slot name="title"></slot>
    </span>
    <div class="f-sub-nav-popover">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "FlySubNav"
};
</script>
<style lang="scss" scoped>
  .f-sub-nav{
      position: relative;
      padding: 1em;
      &-popover{
          position:absolute;
          top:100%;
          left: 0;
          border: 1px solid;
          white-space: nowrap;
      }
  }
</style>


