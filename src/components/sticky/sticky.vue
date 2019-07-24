<template>
  <div class="f-sticky-wrapper" ref="wrapper" :style="{height}">
    <div class="f-sticky" :class="classes" :style="{left,width,top}">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "FlySticky",
  props: {
    distance: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      sticky: false,
      width: undefined,
      left: undefined,
      height: undefined,
      top: undefined
    };
  },
  mounted() {
    this.windowScrollHandler = this._windowScrollHandler.bind(this);
    window.addEventListener("scroll", this.windowScrollHandler);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.windowScrollHandler);
  },
  methods: {
    topAndHeight() {
      const { top, height } = this.$refs.wrapper.getBoundingClientRect();
      return { top: top + window.scrollY, height };
    },
    _windowScrollHandler() {
      const { top } = this.topAndHeight();
      if (window.scrollY > top - this.distance) {
        const {
          height,
          left,
          width
        } = this.$refs.wrapper.getBoundingClientRect();
        this.height = height + "px";
        this.left = left + "px";
        this.width = width + "px";
        this.top = this.distance + 'px';
        this.sticky = true;
      } else {
        this.height = undefined;
        this.left = undefined;
        this.top = undefined;
        this.width = undefined;
        this.sticky = false;
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
