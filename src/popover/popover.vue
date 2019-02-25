<template>
  <div class="popover" ref="popover">
    <div class="content-wrapper" ref="contentWrapper" v-if="visiable">
      <slot name="content"></slot>
    </div>
    <span ref="triggerWrapper" style="display:inline-block;">
      <slot></slot>
    </span>
  </div>
</template>
<script>
export default {
  name: "GuluPopover",
  props: {
    trigger: {
      type: String,
      default: "click",
      validator(val) {
        return ["click", "mouse"].indexOf(val) > -1;
      }
    },
    position: {
      type: String,
      default: "top",
      validator(val) {
        return ["top", "bottom", "left", "right"].indexOf(val) > -1;
      }
    }
  },
  data() {
    return {
      visiable: false
    };
  },
  mounted() {
    this.addTriggerEvent();
  },
  beforeDestroy() {
    this.removeContentWrapper();
    this.removeTriggerEvent();
  },
  methods: {
    putBackContent() {
      const { contentWrapper, popover } = this.$refs;
      popover.appendChild(contentWrapper);
    },
    onClickDocument(e) {
      const { contentWrapper, triggerWrapper } = this.$refs;
      if (triggerWrapper.contains(e.target)) return;
      if (contentWrapper.contains(e.target)) return;
      this.close();
    },
    computePosition() {
      const { contentWrapper, triggerWrapper } = this.$refs;
      if (!contentWrapper) return;
      document.body.appendChild(contentWrapper);
      const {
        width,
        height,
        top,
        left
      } = triggerWrapper.getBoundingClientRect();
      const {
        height: height2,
        width: width2
      } = contentWrapper.getBoundingClientRect();
      contentWrapper.style.left = left + window.scrollX + "px";
      contentWrapper.style.top = top + window.scrollY + "px";
    },
    addTriggerEvent() {
      const { triggerWrapper } = this.$refs;
      if (this.trigger === "click") {
        triggerWrapper.addEventListener("click", this.onClick);
      } else {
        triggerWrapper.addEventListener("mouseenter", this.open);
        triggerWrapper.addEventListener("mouseover", this.close);
      }
    },
    removeTriggerEvent() {
      const { triggerWrapper } = this.$refs;
      if (this.trigger === "click") {
        triggerWrapper.removeEventListener("click", this.onClick);
      } else {
        triggerWrapper.removeEventListener("mouseenter", this.open);
        triggerWrapper.removeEventListener("mouseover", this.close);
      }
    },
    onClick(e) {
      const { triggerWrapper } = this.$refs;
      if (triggerWrapper.contains(e.target)) {
        if (this.visiable) {
          this.close();
        } else {
          this.open();
        }
      }
    },
    close() {
      this.visiable = false;
      document.removeEventListener("click", this.onClickDocument);
    },
    open() {
      this.visiable = true;
      this.$nextTick(() => {
        this.computePosition();
        document.addEventListener("click", this.onClickDocument);
      });
    }
  }
};
</script>
<style lang="scss" scoped>
$border-color: #333;
$border-radius: 4px;
.popover {
  margin: 100px;
  position: relative;
}
.content-wrapper {
  position: absolute;
  border: 1px solid $border-color;
  // box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
  filter: drop-shadow(0 0 3px rgba(0,0,0,.5));
  max-width: 20em;
  background:white;
  word-break: break-all;
  border-radius: $border-radius;
  padding: .5em 1em;
  transform: translateY(-100%);
  margin-top: -10px;
  &::before,&::after{
    content: '';
    position: absolute;
    display: block;
    width:0;height:0;
    border: 8px solid transparent;
    left: 10px;
  }
  &::before{
    border-top-color: $border-color;
    top:100%;
  }
  &::after{
    border-top-color: white;
    top: calc(100% - 1px);
  }
}
</style>

