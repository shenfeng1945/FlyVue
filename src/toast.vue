<template>
  <div class="wrapper" :class="toastClass">
    <div class="toast" ref="toast">
      <div class="message">
        <slot v-if="!enableHtml"></slot>
        <div v-else v-html="$slots.default[0]"></div>
      </div>
      <div class="line" ref="line"></div>
      <div class="close" v-if="buttonClose" @click="onButtonClose">{{buttonClose.text}}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "FlyToast",
  props: {
    autoClose: {
      type: [Boolean,Number],
      default: 5,
      validator(value){
        return value === false || typeof value === 'number'
      }
    },
    buttonClose: {
      type: Object,
      default() {
        return {
          text: "关闭",
          callback: undefined
        };
      }
    },
    // 是否支持html
    enableHtml: {
      type: Boolean,
      default: false
    },
    position: {
      type: String,
      default: "top",
      validator(value) {
        return ["top", "bottom", "middle"].indexOf(value) > -1;
      }
    }
  },
  mounted() {
    this.handerAutoClose();
    this.initStyles();
  },
  computed: {
    toastClass() {
      return {
        [`position-${this.position}`]: true
      };
    }
  },
  methods: {
    initStyles() {
      this.$nextTick(() => {
        this.$refs.line.style.height = `${
          this.$refs.toast.getBoundingClientRect().height
        }px`;
        // this.$refs.toast.style.height >>> undefined 无法获取外联样式
      });
    },
    handerAutoClose() {
      if (this.autoClose) {
        setTimeout(() => {
          this.close();
        }, this.autoClose * 1000);
      }
    },
    close() {
      // dom元素remove
      this.$el.remove();
      this.$emit("close");
      // 组件死掉，注销绑定的事件
      this.$destroy();
    },
    onButtonClose() {
      this.close();
      if (
        this.buttonClose.callback &&
        typeof this.buttonClose.callback === "function"
      ) {
        this.buttonClose.callback();
      }
    }
  }
};
</script>

<style lang="scss" scoped>
$font-size: 14px;
$height: 40px;
$toast-bg: rgba(0, 0, 0, 0.75);
.wrapper{
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
   &.position-top {
    top: 0;
    .toast {
      animation: fade-down-in 0.8s;
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }
  }
  &.position-middle {
    top: 50%;
    animation: fade-in 0.8s;
    transform: translate(-50%,-50%);
  }
  &.position-bottom {
    top: inherit;
    bottom: 0;
    .toast {
      animation: fade-up-in 0.8s;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }
  }
}
.toast {
  @keyframes fade-up-in {
    0% {
      opacity: 0;
      transform: translateY(100%)
    }
    100% {
      opacity: 1;
      transform: translateY(0%)
    }
  }
  @keyframes fade-down-in {
    0% {
      opacity: 0;
      transform: translateY(-100%)
    }
    100% {
      opacity: 1;
      transform: translateY(0%)
    }
  }
  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  font-size: $font-size;
  top: 0;
  line-height: 1.7;
  min-height: $height;
  display: flex;
  align-items: center;
  color: white;
  background: $toast-bg;
  padding: 0 16px;
  border-radius: 4px;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);
 
  .message {
    padding: 8px 0;
  }
  .line {
    height: 100%;
    border-left: 1px solid #666;
    margin-left: 16px;
  }
  .close {
    padding-left: 16px;
    flex-shrink: 0;
  }
}
</style>

