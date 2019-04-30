<template>
  <div class="f-sub-nav" :class="{active}" v-click-outside="close">
    <span @click="open = !open">
      <slot name="title"></slot>
    </span>
    <div class="f-sub-nav-popover" v-show="open">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import ClickOutSide from '../cascader/cascader-click-outside'
export default {
  name: "FlySubNav",
  data(){
    return {
      open: false,
    }
  },
  computed: {
    active(){
      return this.root.namePath.indexOf(this.name) > -1;
    }
  },
  directives: {'click-outside': ClickOutSide},
  props: {
    name: {
      type: String,
      required: true
    }
  },
  inject: ['root'],
  methods:{
     updateNamePath(){
       this.root.namePath.unshift(this.name)
       if(this.$parent.updateNamePath){
         this.$parent.updateNamePath();
       }else{
        // 到顶了
       }
     },
     close(){
       this.open = false;
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
      &.active::after{
         content: '';
         position: absolute;
         bottom: 0;
         left: 0;
         border-bottom: 2px solid blue;
         width: 100%;
      }
  }
</style>


