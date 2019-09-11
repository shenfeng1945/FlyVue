<template>
  <div class="f-back-top" :style="getStyle" v-show="targetVisible" @click="clickBackTop">
    <template v-if="$slots.default">
      <slot></slot>
    </template>
    <template v-else>
      <div class="caret-up-wrapper">
        <f-icon name="caret-up"></f-icon>
      </div>
    </template>
  </div>
</template>

<script>
import Icon from '../icon/Icon';

const speedObj = {
    'slow': 10,
    'middle': 8,
    'quick': 6
};
export default {
  name: "FlyBackTop",
  props: {
    target: {
      type: String,
      default: "body"
    },
    visibilityHeight: {
      type: Number,
      default: 200
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
  components: {'f-icon': Icon },
  created() {
    this.bindEvent();
  },
  mounted() {
    this.onScrollEvent();
  },
  beforeDestroy(){
      document.removeEventListener('scroll', this.onScrollEvent)
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
      this.targetVisible = Math.abs(top) > this.visibilityHeight;
    },
    clickBackTop(){
      this.$emit('click');
      this.onBackTop()
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
  width: 40px;
  height: 40px;
  font-size: 20px;
}
.caret-up-wrapper{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    box-shadow: 0 0 6px rgba(0,0,0,.12);
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      fill: #409eff;
      width: 20px;
      height: 20px;
    }
    &:hover {
      background: #f2f6fc;
    }
  }
</style>

