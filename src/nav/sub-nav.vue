<template>
  <div class="f-sub-nav" :class="{active}" v-click-outside="close">
    <span @click="open = !open" class="f-sub-nav-label">
      <slot name="title"></slot>
      <span class="f-sub-nav-icon">
        <f-icon name="right" :class="{open}"></f-icon>
      </span>
    </span>
    <transition name="expand" @enter="enter" @leave="leave" @after-leave="afterLeave" @after-enter="afterEnter">
      <div class="f-sub-nav-popover" v-show="open" :class="{'f-vertical': vertical}">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>
<script>
import ClickOutSide from "../cascader/cascader-click-outside";
import Icon from "../icon/Icon";
export default {
  name: "FlySubNav",
  data() {
    return {
      open: false
    };
  },
  components: { "f-icon": Icon },
  computed: {
    active() {
      return this.root.namePath.indexOf(this.name) > -1;
    }
  },
  directives: { "click-outside": ClickOutSide },
  props: {
    name: {
      type: String,
      required: true
    }
  },
  inject: ["root", "vertical"],
  methods: {
    updateNamePath() {
      this.root.namePath.unshift(this.name);
      if (this.$parent.updateNamePath) {
        this.$parent.updateNamePath();
      } else {
        // 到顶了
      }
    },
    close() {
      this.open = false;
    },
    enter(el, done){
      el.style.height = `auto`;
      const {height} = el.getBoundingClientRect();
      el.style.height = '0px';
      el.getBoundingClientRect();
      el.style.height = `${height}px`;
      el.addEventListener('transitionend',() =>{
        done()
      })
    },
    afterEnter(el){
      el.style.height = 'auto';
    },
    leave(el, done){
      const {height} = el.getBoundingClientRect();
      el.style.height = `${height}px`;
      el.getBoundingClientRect();
      el.style.height = '0px';
      el.addEventListener('transitionend',() =>{
        done()
      })
    },
    afterLeave(el){
      el.style.height = 'auto';
    },
  }
};
</script>
<style lang="scss" scoped>
.f-sub-nav {
  position: relative;

  &-label {
    padding: 1em;
    display: block;
  }

  &-icon {
    display: none;
  }
  &-popover {
    position: absolute;
    top: 100%;
    left: 0;
    border: 1px solid;
    white-space: nowrap;
    &.f-vertical {
      position: static;
      border: none;
      overflow: hidden;
    }
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
      &.f-vertical {
        position: static;
        border: none;
      }
    }

    .f-sub-nav-icon {
      display: inline-flex;
      margin-left: 1em;
      > .open {
        transform: rotate(90deg);
        transition: all 0.3s;
      }
    }
  }
  &.active::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    border-bottom: 2px solid blue;
    width: 100%;
  }
}

.expand-enter-active, .expand-leave-active {
   transition: height .3s;
}
.expand-enter, .expand-leave-to /* .fade-leave-active below version 2.1.8 */ {
  height: auto;
}
</style>


