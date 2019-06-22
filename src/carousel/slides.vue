<template>
  <div
    class="f-slides"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
    @touchstart="onTouchStart"
    @touchmove="onTouchMove"
    @touchend="onTouchEnd"
  >
    <div class="f-slides-window">
      <div class="f-slides-wrapper" :style="{height}">
        <slot></slot>
      </div>
      <div class="dots" :class="{'f-vertical': direction === 'vertical'}">
        <span
          v-for="index in childrenLength"
          :key="index"
          :class="{active: selectedIndex === (index - 1)}"
          @mouseenter="trigger === 'hover' && select(index - 1)"
          @click="trigger === 'click' && select(index-1)"
          :data-index="index-1"
        >
          {{index}}
        </span>
      </div>
      <template v-if="direction === 'horizontal'">
        <div class="f-slides-control-left" @click="goPrev">
          <f-icon name="left"></f-icon>    
        </div>
        <div class="f-slides-control-right" @click="goNext">
          <f-icon name="right"></f-icon>    
        </div>
      </template>
      <template v-else>
        <div class="f-slides-control-top" @click="goPrev">
          <f-icon name="top"></f-icon>    
        </div>
        <div class="f-slides-control-bottom" @click="goNext">
          <f-icon name="down"></f-icon>    
        </div>
      </template>
    </div>

  </div>
</template>

<script>
// 待完善部分: 样式，前进后退到头不能再点
import Icon from "../icon/Icon";
import Button from "../button/button";
export default {
  name: "FlySlides",
  props: {
    selected: String,
    autoPlay: {
      type: Boolean,
      default: true
    },
    reverse: {
      type: Boolean,
      default: false
    },
    autoPlayDelay: {
      type: Number,
      default: 3000
    },
    trigger: {
      type: String,
      default: "hover"
    },
    height: String,
    direction: {
      type: String,
      default: "horizontal",
      validator(val) {
        return ["horizontal", "vertical"].indexOf(val);
      }
    }
  },
  components: {
    "f-icon": Icon,
    "f-button": Button
  },
  data() {
    return {
      childrenLength: 0,
      lastSelectedIndex: -1,
      timerId: null,
      touchPosition: {
        left: undefined,
        top: undefined,
        isTouch: false
      },
      // 移动端最小检测距离
      minDetectX: 30,
      minDetectY: 20
    };
  },
  computed: {
    selectedIndex() {
      return this.names.indexOf(this.selected);
    },
    names() {
      return this.$children
        .filter(vm => vm.$options.name === "FlySlidesItem")
        .map(vm => vm.name);
    }
  },
  mounted() {
    this.updateChildren();
    this.autoPlay && this.playAutomatically();
    this.childrenLength = this.names.length;
  },
  updated() {
    this.updateChildren();
  },
  methods: {
    updateChildren() {
      let selected = this.getSelected();
      this.$children.forEach(vm => {
        let reverse =
          this.selectedIndex > this.lastSelectedIndex ? false : true;
        //
        if (this.timerId || this.touchPosition.isTouch) {
          if (
            this.lastSelectedIndex === this.names.length - 1 &&
            this.selectedIndex === 0
          ) {
            reverse = false;
          }
          if (
            this.lastSelectedIndex === 0 &&
            this.selectedIndex === this.names.length - 1
          ) {
            reverse = true;
          }
        }
        vm.reverse = reverse;
        this.$nextTick(() => {
          // 确保执行动画前，reverse已经生效
          vm.selected = selected;
        });
      });
    },
    select(index) {
      // 加载时记录上一次的index
      this.lastSelectedIndex = this.selectedIndex;
      this.$emit("update:selected", this.names[index]);
    },
    getSelected() {
      return this.selected || this.$children[0].name;
    },
    onMouseEnter() {
      this.pause();
    },
    onMouseLeave() {
      this.autoPlay && this.playAutomatically();
    },
    onTouchStart(e) {
      // 只支持单点触控
      if (e.touches.length > 1) {
        return;
      }
      const { clientX: left, clientY: top } = e.touches[0];
      this.touchPosition = { left, top, isTouch: false };
      this.pause();
    },
    onTouchMove(e) {
      if(this.direction === 'vertical'){return}
      let { clientX: curX, clientY: curY } = e.touches[0];
      let { left, isTouch, top } = this.touchPosition;
      if (isTouch) {
        return;
      }
      if (
        curX > left &&
        Math.abs(curX - left) > this.minDetectX &&
        Math.abs(curY - top) < this.minDetectY
      ) {
        // 左滑滑
        this.goPrev();
        this.touchPosition.isTouch = true;
      }
      if (
        curX < left &&
        Math.abs(curX - left) > this.minDetectX &&
        Math.abs(curY - top) < this.minDetectY
      ) {
        // 右滑
        this.goNext();
        this.touchPosition.isTouch = true;
      }
    },
    goNext() {
      let nextIndex = this.selectedIndex + 1;
      if (nextIndex === this.names.length) {
        nextIndex = 0;
      }
      this.select(nextIndex);
    },
    goPrev() {
      let nextIndex = this.selectedIndex - 1;
      if (nextIndex === -1) {
        nextIndex = this.names.length - 1;
      }
      this.select(nextIndex);
    },
    onTouchEnd() {
      this.autoPlay && this.playAutomatically();
    },
    pause() {
      window.clearTimeout(this.timerId);
      this.timerId = null;
    },
    playAutomatically() {
      if (this.timerId) {
        return;
      }
      const names = this.names;
      const run = () => {
        let index = names.indexOf(this.getSelected());
        this.reverse ? index-- : index++;
        if (index === -1) {
          index = names.length - 1;
        }
        if (index === names.length) {
          index = 0;
        }
        this.select(index);
        this.timerId = setTimeout(run, this.autoPlayDelay);
      };
      this.timerId = setTimeout(run, this.autoPlayDelay);
    }
  }
};
</script>

<style lang="scss" scoped>
.f-slides {
  &-window {
    position: relative;
    overflow: hidden;
    .dots {
      position: absolute;
      left: 50%;
      bottom: 10%;
      transform: translateX(-50%);
      span {
        width: 1.2em;
        height: 1.2em;
        border-radius: 50%;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        background: white;
        cursor: pointer;
        margin: 0 0.3em;
        color: black;
      }
      > .active {
        background: black;
        color: white;
      }
    }
    .dots.f-vertical {
      left: 90%;
      bottom: 50%;
      transform: translateY(50%);
      display: flex;
      flex-direction: column;
      span {
        margin: 0.3em 0;
      }
    }
    .f-slides-control-left,
    .f-slides-control-right {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    }
    .f-slides-control-left {
      left: 1em;
      cursor: pointer;
    }
    .f-slides-control-right {
      right: 1em;
      cursor: pointer;
    }
    
    .f-slides-control-top,
    .f-slides-control-bottom {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
    .f-slides-control-top {
      top: 1em;
      cursor: pointer;
    }
    .f-slides-control-bottom {
      bottom: 1em;
      cursor: pointer;
    }
  }
}
</style>



