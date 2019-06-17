<template>
  <div class="collapseItem">
    <div
      class="title"
      :class="{'f-isOpen': isOpen}"
      @click="triggleClick"
    >
        <p>{{title}}</p>
        <f-icon name="right" :class="{'f-rotate90': isOpen, 'f-antiRotate90': !isOpen}"></f-icon>
    </div>
      <transition name="expandHeight">

    <div
      class="content"
      v-if="isOpen"
    >
      <slot></slot>
    </div>
      </transition>
  </div>
</template>
<script>
import Icon from '../icon/Icon';
export default {
  name: "FlyCollapseItem",
  props: {
    title: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  },
  components: {
    'f-icon': Icon
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
  @import '_variable';
$grey: #ddd;
$border-radius: 4px;
.collapseItem {
  > .title {
    border: 1px solid $grey;
    margin-top: -1px;
    margin-left: -1px;
    margin-right: -1px;
    min-height: 32px;
    display: flex;
    align-items: center;
    padding: 0 8px;
    justify-content: space-between;
    .f-rotate90{
      animation: rotate90 0.5s forwards;
    }
    .f-antiRotate90{
      animation: anti-rotate90 0.5s forwards;
    }
  }
  &:first-child {
    > .title {
      border-top-left-radius: $border-radius;
      border-top-right-radius: $border-radius;
    }
  }
  &:last-child {
    > .title:last-child {
      border-bottom-left-radius: $border-radius;
      border-bottom-right-radius: $border-radius;
      border-bottom: none;
    }
  }
  .content {
    overflow: hidden;
    box-sizing: border-box;
  }
  &.f-isOpen{
    border-bottom: none;
  }
}
</style>