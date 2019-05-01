<template>
  <div class="f-sub-nav" :class="{active}" v-click-outside="close">
    <span @click="open = !open" class="f-sub-nav-label">
      <slot name="title"></slot>
        <span class="f-sub-nav-icon">
          <f-icon name="right" :class="{open}"></f-icon>
        </span>
    </span>
    <div class="f-sub-nav-popover" v-show="open">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import ClickOutSide from '../cascader/cascader-click-outside'
import Icon from "../icon/Icon";
export default {
  name: "FlySubNav",
  data(){
    return {
      open: false,
    }
  },
  components: {'f-icon': Icon},
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
       this.root.namePath.unshift(this.name);
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

    &-label {
        padding: 1em;
        display: block;
      }

    &-icon {
      display: none;
    }
      &-popover{
          position:absolute;
          top:100%;
          left: 0;
          border: 1px solid;
          white-space: nowrap;
      }

    & & {
      > .f-sub-nav-label {
        padding: 1em 0 1em 1em;
        display: flex;
        align-items: center;
        justify-content: space-between;

        svg {
          fill: red;
        }
      }

      .f-sub-nav-popover {
        position: absolute;
        left: 100%;
        top: 0;
      }

      .f-sub-nav-icon {
        display: inline-flex;
        margin-left: 1em;
        > .open{
          transform: rotate(90deg);
          transition: all .3s;
        }
      }
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


