<template>
  <div class="toast" ref="toast">
    <div class="message">
      <slot v-if="!enableHtml"></slot>
      <div v-else v-html="$slots.default[0]"></div>
    </div>
    <div class="line" ref="line"></div>
    <div class="close" v-if="buttonClose" @click="onButtonClose">{{buttonClose.text}}</div>
  </div>
</template>
<script>
export default {
  name: "GuluToast",
  props: {
    autoClose: {
      type: Boolean,
      default: true
    },
    autoCloseDelay: {
      type: Number,
      default: 50
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
    }
  },
  mounted() {
    this.handerAutoClose();
    this.initStyles()
  },
  methods: {
    initStyles(){
        this.$nextTick(() => {
          this.$refs.line.style.height = `${this.$refs.toast.getBoundingClientRect().height}px`
          // this.$refs.toast.style.height >>> undefined 无法获取外联样式
        },1000)
    },
    handerAutoClose() {
      if (this.autoClose) {
        setTimeout(() => {
          this.close();
        }, this.autoCloseDelay * 1000);
      }
    },
    close() {
      // dom元素remove
      this.$el.remove();
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
.toast {
  font-size: $font-size;
  position: fixed;
  top: 0;
  left: 50%;
  line-height: 1.7;
  min-height: $height;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  color: white;
  background: $toast-bg;
  padding: 0 16px;
  border-radius: 4px;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);
  .message{
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

