<template>
  <div class="f-sub-nav" :class="{active,isParentSub}" @mouseenter="mouseenter" @mouseleave="mouseleave">
    <span class="f-sub-nav-label">
      <slot name="title"></slot>
      <span class="f-sub-nav-icon">
        <f-icon :name="isParentSub? 'down': 'right'" :class="{rotate180,antiRotate180}"></f-icon>
      </span>
    </span>
    <!-- <transition
      name="expand"
      @enter="enter"
      @leave="leave"
      @after-leave="afterLeave"
      @after-enter="afterEnter"
    > -->
      <div class="f-sub-nav-popover" v-show="isOpen" :class="{'f-vertical': vertical}">
        <slot></slot>
      </div>
    <!-- </transition> -->
  </div>
</template>
<script>
import Icon from "../icon/Icon";
export default {
  name: "FlySubNav",
  data() {
    return {
      isOpen: false,
      rotate180: false,
      antiRotate180: false,
      isParentSub: false,
      openTimeId: null,
      closeTimeId: null
    };
  },
  components: { "f-icon": Icon },
  computed: {
    active() {
      return this.root.namePath.indexOf(this.name) > -1;
    }
  },
  props: {
    name: {
      type: String,
      required: true
    }
  },
  inject: ["root", "vertical"],
  mounted(){
    this.isParentSub = this.$parent.$options.name === 'FlyNav';
  },
  methods: {
    updateNamePath() {
      this.root.namePath.unshift(this.name);
      if (this.$parent.updateNamePath) {
        this.$parent.updateNamePath();
      } else {
        // 到顶了
      }
    },
    enter(el, done) {
      el.style.height = `auto`;
      const { height } = el.getBoundingClientRect();
      el.style.height = "0px";
      el.getBoundingClientRect();
      el.style.height = `${height}px`;
      el.addEventListener("transitionend", () => {
        done();
      });
    },
    afterEnter(el) {
      el.style.height = "auto";
    },
    leave(el, done) {
      const { height } = el.getBoundingClientRect();
      el.style.height = `${height}px`;
      el.getBoundingClientRect();
      el.style.height = "0px";
      el.addEventListener("transitionend", () => {
        done();
      });
    },
    afterLeave(el) {
      el.style.height = "auto";
    },
    open() {
      this.closeTimeId && clearTimeout(this.closeTimeId);
      this.openTimeId = setTimeout(() => {
        this.isOpen = true;
        this.rotate180 = true;
        this.antiRotate180 = false;
      }, 300);
    },
    close() {
      this.openTimeId && clearTimeout(this.openTimeId);
      this.closeTimeId = setTimeout(() => {
        this.isOpen = false;
        this.rotate180 = false;
        this.antiRotate180 = true;
      }, 300);
    },
    clickClose(){
      this.isOpen = false;
      this.rotate180 = false;
      this.antiRotate180 = true;
    },
    mouseenter() {
      this.open();
    },
    mouseleave() {
      this.close();
    }
  }
};
</script>
<style lang="scss" scoped>
@import "_variable";
.f-sub-nav {
  position: relative;

  &-label {
    padding: 1em;
    display: block;
    cursor: pointer;
    &:hover {
      color: $active-color;
      .icon {
        fill: $active-color;
      }
    }
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
  

  &{
   .f-sub-nav-icon {
      margin-left: .3em;
      .rotate180 {
        transform: rotateZ(180deg);
        transition: transform 0.3s;
      }
      .antiRotate180 {
        transform: rotateZ(0deg);
        transition: transform 0.3s;
      }
    }
  }

  & & {
    > .f-sub-nav-label {
      padding: 1em;
      display: flex;
      align-items: center;
      justify-content: space-between;
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
      > .isOpen {
        transform: rotate(90deg);
        transition: all 0.3s;
      }
    }
  }
  &.isParentSub.active {
    box-shadow: inset 0 -2px 0 $active-color;
  }
}

.expand-enter-active,
.expand-leave-active {
  transition: height 0.2s;
}
.expand-enter, .expand-leave-to /* .fade-leave-active below version 2.1.8 */ {
  height: auto;
}
</style>


