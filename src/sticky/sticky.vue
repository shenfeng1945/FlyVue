<template>
  <div class="f-sticky-wrapper" ref="wrapper" :style="{height}">
    <div class="f-sticky" :class="classes" :style="{left,width}">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "FlySticky",
  data() {
    return {
      sticky: false,
      width: undefined,
      left: undefined,
      height: undefined
    };
  },
  mounted() {
    const { top } = this.topAndHeight();
    this.windowScrollHandler = this._windowScrollHandler.bind(this);
    window.addEventListener("scroll", this.windowScrollHandler);
  },
  beforeDestory() {
    window.removeEventListener("scroll", this.windowScrollHandler);
  },
  methods: {
    topAndHeight() {
      const { top, height } = this.$refs.wrapper.getBoundingClientRect();
      return { top: top + window.scrollY, height };
    },
    _windowScrollHandler() {
      if (window.scrollY > top) {
        const {
          height,
          left,
          width
        } = this.$refs.wrapper.getBoundingClientRect();
        this.height = height + "px";
        this.left = left + "px";
        this.width = width + "px";
        this.sticky = true;
      } else {
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
    top: 0;
  }
}
</style>
