<template>
  <div class="f-back-top" :style="getStyle" v-show="targetVisible" @click="onBackTop">
    <template v-if="$slots.default">
      <slot></slot>
    </template>
    <template v-else>
      <f-button leftIcon="back-top" intent="primary" circle></f-button>
    </template>
  </div>
</template>

<script>
import Button from "../button/button";

const speedObj = {
    'slow': 10,
    'middle': 8,
    'quick': 6
}
export default {
  name: "FlyBackTop",
  props: {
    target: {
      type: String,
      default: "body"
    },
    visibilityHeight: {
      type: Number,
      default: 400
    },
    right: {
      type: Number,
      default: 40
    },
    bottom: {
      type: Number,
      default: 40
    },
    speed: {
        type: String,
        default: 'middle',
        validator(val){return ['slow', 'middle', 'quick'].indexOf(val) > -1}
    }
  },
  components: { "f-button": Button },
  created() {
    this.bindEvent();
  },
  mounted() {
    this.onScrollEvent();
  },
  data() {
    return {
      targetVisible: false
    };
  },
  computed: {
    getStyle() {
      return {
        right: this.right + "px",
        bottom: this.bottom + "px"
      };
    }
  },
  methods: {
    bindEvent() {
      document.addEventListener("scroll", this.onScrollEvent);
    },
    onScrollEvent() {
      const targetEle = document.querySelector(this.target);
      const { top } = targetEle.getBoundingClientRect();
      if (Math.abs(top) > this.visibilityHeight) {
        this.targetVisible = true;
      } else {
        this.targetVisible = false;
      }
    },
    onBackTop() {
      const targetEle = document.querySelector(this.target);
      let { top } = targetEle.getBoundingClientRect();
      top = Math.abs(top);
      if (top > 0) {
        window.requestAnimationFrame(this.onBackTop);
        window.scrollTo(0, top - top / speedObj[this.speed]);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.f-back-top {
  position: fixed;
  z-index: 9;
  width: 32px;
  height: 32px;
}
</style>

