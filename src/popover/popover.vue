<template>
  <div class="popover" ref="popover">
    <div
      class="content-wrapper"
      :class="[`position-${this.position}`]"
      ref="contentWrapper"
      v-if="visiable"
    >
      <slot name="content" :close="close"></slot>
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
        return ["click", "hover"].indexOf(val) > -1;
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
    this.putBackContent();
    this.removeTriggerEvent();
  },
  computed: {
    openEvent() {
      if (this.trigger === "click") {
        return "click";
      } else {
        return "mouseenter";
      }
    },
    closeEvent() {
      if (this.trigger === "click") {
        return "click";
      } else {
        return "mouseleave";
      }
    }
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
      let positions = {
        top: {
          top: top + window.scrollY,
          left: left + window.scrollX
        },
        bottom: {
          top: top + height + window.scrollY,
          left: left + window.scrollX
        },
        left: {
          top: top + (height - height2) / 2 + window.scrollY,
          left: left - width2 + window.scrollX
        },
        right: {
          top: top + (height - height2) / 2 + window.scrollY,
          left: left + width + window.scrollX
        }
      };
      contentWrapper.style.left = positions[this.position].left + "px";
      contentWrapper.style.top = positions[this.position].top + "px";
    },
    addTriggerEvent() {
      const { triggerWrapper } = this.$refs;
      if (this.trigger === "click") {
        triggerWrapper.addEventListener("click", this.onClick);
      } else {
        triggerWrapper.addEventListener("mouseenter", this.open);
        triggerWrapper.addEventListener("mouseleave", this.delayClose);
      }
    },
    removeTriggerEvent() {
      const { triggerWrapper } = this.$refs;
      if (this.trigger === "click") {
        triggerWrapper.removeEventListener("click", this.onClick);
      } else {
        triggerWrapper.removeEventListener("mouseenter", this.open);
        triggerWrapper.removeEventListener("mouseleave", this.delayClose);
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
    onHover(e) {
      const { contentWrapper } = this.$refs;
      if (contentWrapper.contains(e.target)) {
        if (this.visiable) {
          this.open();
        } else {
          this.close();
        }
      }
    },
    delayClose() {
      setTimeout(this.close, 200);
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
  position: relative;
  display: inline-block;
}
.content-wrapper {
  position: absolute;
  border: 1px solid $border-color;
  // box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
  filter: drop-shadow(0 0 3px rgba(0, 0, 0, 0.5));
  max-width: 20em;
  background: white;
  word-break: break-all;
  border-radius: $border-radius;
  padding: 0.5em 1em;
  &::before,
  &::after {
    content: "";
    position: absolute;
    display: block;
    width: 0;
    height: 0;
    border: 8px solid transparent;
  }
  &.position-top {
    transform: translateY(-100%);
    margin-top: -10px;
    &::before {
      border-top-color: $border-color;
      border-bottom: none;
      top: 100%;
      left: 10px;
    }
    &::after {
      border-top-color: white;
      border-bottom: none;
      top: calc(100% - 1px);
      left: 10px;
    }
  }
  &.position-bottom {
    margin-top: 10px;
    &::before {
      border-bottom-color: $border-color;
      border-top: none;
      bottom: 100%;
      left: 10px;
    }
    &::after {
      border-bottom-color: white;
      border-top: none;
      bottom: calc(100% - 1px);
      left: 10px;
    }
  }
  &.position-left {
    margin-left: -10px;
    &::before {
      border-left-color: $border-color;
      border-right: none;
      left: 100%;
      top: 10px;
    }
    &::after {
      border-left-color: white;
      border-right: none;
      left: calc(100% - 1px);
      top: 10px;
    }
  }
  &.position-right {
    margin-left: 10px;
    &::before {
      border-right-color: $border-color;
      border-left: none;
      right: 100%;
      top: 10px;
    }
    &::after {
      border-right-color: white;
      border-left: none;
      right: calc(100% - 1px);
      top: 10px;
    }
  }
}
</style>

