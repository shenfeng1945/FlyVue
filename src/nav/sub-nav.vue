<template>
  <div class="f-sub-nav">
    <span @click="open = !open">
      <slot name="title"></slot>
    </span>
    <div class="f-sub-nav-popover" v-show="open">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "FlySubNav",
  data(){
    return {
      open: false
    }
  }
};
</script>
<style lang="scss" scoped>
  .f-sub-nav{
      position: relative;
      > span{
        padding: 1em;
        display: block;
      }
      &-popover{
          position:absolute;
          top:100%;
          left: 0;
          border: 1px solid;
          white-space: nowrap;
      }
      .f-sub-nav .f-sub-nav-popover{
        position: absolute;
        left: 100%;
        top: 0;
      }
  }
</style>


