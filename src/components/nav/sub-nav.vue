<template>
  <div
    class="f-sub-nav"
    :class="{active,isParentSub, [direction]: true}"
    @mouseenter="mouseenter"
    @mouseleave="mouseleave"
  >
    <span class="f-sub-nav-label" :class="{active}" @click="triggerSub">
      <slot name="title"></slot>
      <span class="f-sub-nav-icon">
        <f-icon :name="isParentSub || (direction === 'vertical') ? 'top': 'right'" :class="{rotate180,antiRotate180}"></f-icon>
      </span>
    </span>
    <transition
      name="expand"
      @enter="enter"
      @after-enter="afterEnter"
    >
    <div class="f-sub-nav-popover" v-show="isOpen" :class="direction">
      <slot></slot>
    </div>
    </transition>
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
      closeTimeId: null,
      triggerTimeId: null
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
  inject: ["root", "direction"],
  mounted() {
    this.isParentSub = this.$parent.$options.name === "FlyNav";
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
      el.style.overflow = 'hidden';
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
      el.style.overflow = 'unset';
    },
    // leave(el, done) {
    //   const { height } = el.getBoundingClientRect();
    //   el.style.height = `${height}px`;
    //   el.getBoundingClientRect();
    //   el.style.height = "0px";
    //   el.addEventListener("transitionend", () => {
    //     done();
    //   });
    // },
    // afterLeave(el) {
    //   el.style.height = "auto";
    // },
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
    clickClose() {
      this.isOpen = false;
      this.rotate180 = false;
      this.antiRotate180 = true;
    },
    mouseenter() {
      if(this.direction === 'vertical'){return};
      this.open();
    },
    mouseleave() {
      if(this.direction === 'vertical'){return};
      this.close();
    },
    triggerSub(){
      if(this.triggerTimeId){return};
      this.triggerTimeId = setTimeout(() => {
        this.isOpen = !this.isOpen;
        this.rotate180 = !this.isOpen;
        this.antiRotate180 = this.isOpen;
        clearTimeout(this.triggerTimeId);
        this.triggerTimeId = null;
      }, 300);
    }
  }
};
</script>
<style lang="scss" scoped>
@import "style/_variable";
.f-sub-nav {
  position: relative;

  &-label {
    padding: 1em;
    display: block;
    cursor: pointer;
    &:hover,&.active.horizontal{
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
    background: white;
    @extend .box-shadow;
    white-space: nowrap;
    &.vertical {
      position: static;
      border: none;
      overflow: hidden;
      box-shadow: none;
    }
  }

  & {
    .f-sub-nav-icon {
      margin-left: 0.3em;
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
      &.vertical {
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
  &.isParentSub.active.horizontal {
    box-shadow: inset 0 -2px 0 $active-color;
  }
}

.expand-enter-active{
  transition: height 0.3s;
}

.expand-leave-active {
  transition: height 0.1s;
}
.expand-enter, .expand-leave-to /* .fade-leave-active below version 2.1.8 */ {
  height: auto;
}
</style>


