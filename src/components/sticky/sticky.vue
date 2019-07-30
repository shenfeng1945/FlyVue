<template>
  <div class="f-sticky-wrapper" ref="wrapper" :style="{height}">
    <div class="f-sticky" :class="classes" :style="{left,width,top,bottom}">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import {getViewPortHeight} from '@/utils/browser.js';
export default {
  name: "FlySticky",
  props: {
    distance: {
      type: Number,
      default: 0
    },
    position: {
      type: String,
      default: "top",
      validator(val) {
        return ["top", "bottom"].indexOf(val) > -1;
      }
    },
    eventBus: Object
  },
  data() {
    return {
      sticky: false,
      width: undefined,
      left: undefined,
      height: undefined,
      top: undefined,
      bottom: undefined,
      viewportHeight: undefined,
    };
  },
  created(){
    this.eventBus && this.eventBus.$on('forceUpdate', this.forceUpdate);
  },
  mounted() {
    this.setViewPortHeight();
    this.windowScrollHandler = this._windowScrollHandler.bind(this);
    window.addEventListener("scroll", this.windowScrollHandler);
    window.addEventListener('resize', this.setViewPortHeight)
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.windowScrollHandler);
    window.removeEventListener('resize', this.setViewPortHeight)
  },
  methods: {
    setViewPortHeight(){
      this.viewportHeight = getViewPortHeight();
    },
    forceUpdate(){
      this.$refs.wrapper && this._windowScrollHandler();
    },
    topAndHeight() {
      const { top, height } = this.$refs.wrapper.getBoundingClientRect();
      return { top: top + window.scrollY, height };
    },
    computedTopDistance(top) {
      if (window.scrollY > top - this.distance) {
        const {
          height,
          left,
          width
        } = this.$refs.wrapper.getBoundingClientRect();
        this.height = height + "px";
        this.left = left + "px";
        this.width = width + "px";
        this.top = this.distance + "px";
        this.sticky = true;
      } else {
        this.height = undefined;
        this.left = undefined;
        this.top = undefined;
        this.width = undefined;
        this.sticky = false;
      }
    },
    computedBottomDistance(top){
      const {height, left, width} = this.$refs.wrapper.getBoundingClientRect();
      if(window.scrollY < top - this.viewportHeight + height + this.distance){
        this.height = height + "px";
        this.left = left + "px";
        this.width = width + "px";
        this.bottom = this.distance + "px";
        this.sticky = true;
      }else{
        this.height = undefined;
        this.left = undefined;
        this.bottom = undefined;
        this.width = undefined;
        this.sticky = false;
      }
    },
    _windowScrollHandler() {
      const { top } = this.topAndHeight();
      if (this.position === "top") {
        this.computedTopDistance(top);
      }else {
        this.computedBottomDistance(top);
      }
    }
  },
  computed: {
    classes() {
      return {
        sticky: this.sticky
      };
    }
  }
};
</script>

<style scoped lang="scss">
.f-sticky {
  &.sticky {
    position: fixed;
  }
}
</style>
