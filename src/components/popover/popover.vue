<template>
  <div class="popover" ref="popover">
    <div
      :class="getClassPosition"
      class="content-wrapper"
      ref="contentWrapper"
      v-if="visiable"
    >
      <slot name="content" :close="close"></slot>
    </div>
    <span class="trigger-wrapper" ref="triggerWrapper" style="display:inline-block;">
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
    },
    // popover动态挂载的容器，若不传默认挂载body上
    container: {
      type: Element
    },
    onlyTarget: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      visiable: false,
      clock: null,
      reversePositionY: false,
      reversePositionX: false
    };
  },
  mounted() {
    this.addTriggerEvent();
  },
  beforeDestroy() {
    this.visiable && this.putBackContent();
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
    },
    getClassPosition(){
      let direction = this.position;
      direction = this.getReverseDirection(direction);
      return `position-${direction}`;
    }
  },
  methods: {
    getReverseDirection(direc){
      if(this.reversePositionX && !this.reversePositionY){
        const objX = { 'left': 'right', 'right': 'left' };
        return objX[direc] || direc
      }else if(this.reversePositionY && !this.reversePositionX){
        const objY = { 'top': 'bottom', 'bottom': 'top' };
        return objY[direc] || direc
      }else if(this.reversePositionY && this.reversePositionX){
        const objY = { 'left': 'right', 'right': 'left','top': 'bottom', 'bottom': 'top' };
        return objY[direc]
      }else{
        return direc;
      }
    },
    putBackContent() {
      const { contentWrapper, popover } = this.$refs;
      console.log(popover,contentWrapper)
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
      (this.container || document.body).appendChild(contentWrapper);
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
      if(top < height2 + 10){ this.reversePositionY = true };
      if(left < width2 + 10){ this.reversePositionX = true };
      contentWrapper.style.left = positions[this.reversePositionX ? this.getReverseDirection(this.position): this.position].left + "px";
      contentWrapper.style.top = positions[this.reversePositionY ? this.getReverseDirection(this.position): this.position].top + "px";
    },
    addTriggerEvent() {
      const { triggerWrapper } = this.$refs;
      if (this.trigger === "click") {
        triggerWrapper.addEventListener("click", this.onClick);
      } else {
        triggerWrapper.addEventListener("mouseenter", this.hoverOpen);
        triggerWrapper.addEventListener("mouseleave", this.delayClose);
      }
    },
    removeTriggerEvent() {
      const { triggerWrapper, contentWrapper } = this.$refs;
      if (this.trigger === "click") {
        triggerWrapper.removeEventListener("click", this.onClick);
      } else {
        triggerWrapper.removeEventListener("mouseenter", this.hoverOpen);
        triggerWrapper.removeEventListener("mouseleave", this.delayClose);
        contentWrapper.addEventListener("mouseenter", this.clearClock);
        contentWrapper.addEventListener("mouseleave", this.delayClose);
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
    delayClose() {
      this.clock = setTimeout(this.close, 200);
    },
    clearClock() {
      this.clock && clearTimeout(this.clock);
    },
    close() {
      this.visiable = false;
      if(!this.onlyTarget){
        document.removeEventListener("click", this.onClickDocument);
      }
    },
    open() {
      this.visiable = true;
      this.$nextTick(() => {
        this.computePosition();
        if(!this.onlyTarget){
          document.addEventListener("click", this.onClickDocument);
        }
      });
    },
    hoverOpen() {
      this.clearClock();
      this.visiable = true;
      this.$nextTick(() => {
        const { contentWrapper, triggerWrapper } = this.$refs;
        this.computePosition();
        if(!this.onlyTarget){
          contentWrapper.addEventListener("mouseenter", this.clearClock);
          contentWrapper.addEventListener("mouseleave", this.delayClose);
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
@import "_variable";
.popover {
  position: relative;
  display: inline-block;
}
.content-wrapper {
  position: absolute;
  box-shadow: 0 0 0 1px rgba(16,22,26,.1), 0 2px 4px rgba(16,22,26,.2), 0 8px 24px rgba(16,22,26,.2);
  max-width: 20em;
  min-width: 5em;
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
      top: 50%;
      transform: translateY(-50%);
    }
    &::after {
      border-left-color: white;
      border-right: none;
      left: calc(100% - 1px);
      top: 50%;
      transform: translateY(-50%);
    }
  }
  &.position-right {
    margin-left: 10px;
    &::before {
      border-right-color: $border-color;
      border-left: none;
      right: 100%;
      top: 50%;
      transform: translateY(-50%);
    }
    &::after {
      border-right-color: white;
      border-left: none;
      right: calc(100% - 1px);
      top: 50%;
      transform: translateY(-50%);
    }
  }
}
</style>

