<template>
  <div class="tabs-nav" ref="nav" :class="{'f-vertical': vertical}">
    <slot></slot>
    <div class="line" ref="line" v-if="animate"></div>
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "FlyTabsNav",
  inject: ["eventBus"],
  props: {
    animate: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      vertical: this.$parent.direction === "vertical"
    };
  },
  mounted() {
    this.eventBus.$on("update:selected", (name, vm) => {
      const { left, top, width, height } = vm.$el.getBoundingClientRect();
      const {
        left: leftParent,
        top: topParent
      } = vm.$parent.$el.getBoundingClientRect();
      if (this.animate && !this.vertical) {
        this.$refs.line.style.width = `${width}px`;
        this.$refs.line.style.transform = `translateX(${left - leftParent}px)`;
      } else if (this.animate && this.vertical) {
        this.$nextTick(() => {
           this.$refs.line.style.transform = `translateY(${vm.$el.getBoundingClientRect().top- topParent}px)`;
        })
      }
    });
  }
};
</script>
<style lang="scss" scoped>
@import "style/_variable";
.tabs-nav {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  > .line {
    position: absolute;
    bottom: 0;
    height: 3px;
    background: $active-color;
    transition: all 0.3s;
  }
  > .actions-wrapper {
    // 可使button 在最右边
    margin-left: auto;
  }
  &.f-vertical {
    flex-direction: column;
    align-items: flex-start;
    > .line {
      position: absolute;
      top: 0;
      height: 30px;
      width: 100%;
      background: $bg-selected;
      transition: all 0.3s;
      border-radius: $border-radius;
    }
  }
}
</style>

