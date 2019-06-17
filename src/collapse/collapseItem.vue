<template>
  <div class="collapseItem">
    <div
      class="title"
      :class="{'f-isOpen': isOpen}"
      @click="triggleClick"
    >{{title}}</div>
    <div
      class="content"
      v-if="isOpen"
    >
      <slot></slot>
    </div>
  </div>
</template>
<script>
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
    padding: 8px;
  }
  &.f-isOpen{
    border-bottom: none;
  }
}
</style>