<template>
  <div class="collapseItem">
    <div class="title" :class="{'f-isOpen': isOpen}" @click="triggleClick">
        <p v-if="title">{{title}}</p>
        <p v-else>
          <slot name="title"></slot>
        </p>
      <f-icon name="right" :class="{'f-rotate90': isOpen, 'f-antiRotate90': !isOpen}"></f-icon>
    </div>
    <transition name="expandHeight" @enter="enter" @leave="leave">
      <div class="content" v-if="isOpen" ref="content">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>
<script>
import Icon from "../icon/Icon";
export default {
  name: "FlyCollapseItem",
  props: {
    title: {
      type: String,
    },
    name: {
      type: String | Number,
      required: true
    }
  },
  components: {
    "f-icon": Icon
  },
  data() {
    return {
      isOpen: false
    };
  },
  mounted() {
    this.eventBus &&
      this.eventBus.$on("update:selected", selectedArray => {
        if (selectedArray.indexOf(this.name) > -1) {
          this.isOpen = true;
        } else {
          this.isOpen = false;
        }
      });
  },
  methods: {
    enter(el, done) {
      el.style.height = `auto`;
      const { height } = el.getBoundingClientRect();
      el.style.height = "0px";
      el.getBoundingClientRect();
      el.style.height = `${height}px`;
      el.addEventListener("transitionend", () => {
        done();
      });
    },
    leave(el, done) {
      const { height } = el.getBoundingClientRect();
      el.style.height = `${height}px`;
      el.getBoundingClientRect();
      el.style.height = "0px";
      el.addEventListener("transitionend", () => {
        done();
      });
    },
    triggleClick() {
      if (this.isOpen) {
        this.eventBus.$emit("update:removeSelected", this.name);
      } else {
        this.eventBus.$emit("update:addSelected", this.name);
      }
    }
  },
  inject: ["eventBus"]
};
</script>
<style lang="scss" scoped>
@import "style/_variable";
.collapseItem {
  border-bottom: 1px solid $border-color;
  > .title {
    margin-top: -1px;
    margin-left: -1px;
    margin-right: -1px;
    min-height: 32px;
    display: flex;
    align-items: center;
    padding: 0 8px;
    justify-content: space-between;
    cursor: pointer;
    .f-rotate90 {
      animation: rotate90 0.5s forwards;
    }
    .f-antiRotate90 {
      animation: anti-rotate90 0.5s forwards;
    }
    > svg {
      width: 13px;
      height: 13px;
      fill: #303133;
    }
  }
  // &:first-child {
  //   > .title {
  //     border-top-left-radius: $border-radius;
  //     border-top-right-radius: $border-radius;
  //   }
  // }
  // &:last-child {
  //   > .title:last-child {
  //     border-bottom-left-radius: $border-radius;
  //     border-bottom-right-radius: $border-radius;
  //   }
  // }
  .content {
    overflow: hidden;
    box-sizing: border-box;
    font-size: 14px;
  }
  
}
</style>