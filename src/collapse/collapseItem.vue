<template>
  <div class="collapseItem">
    <div
      class="title"
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
    }
  },
  data() {
    return {
      isOpen: false
    };
  },
  mounted() {
    this.eventBus &&
      this.eventBus.$on("update", vm => {
        if (vm !== this) {
          this.isOpen = false;
        }
      });
  },
  methods: {
    triggleClick() {
      if (this.isOpen) {
        this.isOpen = false;
      } else {
        this.isOpen = true;
        this.eventBus && this.eventBus.$emit("update", this);
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
  }
  &:first-child {
    > .title {
      border-top-left-radius: $border-radius;
      border-top-right-radius: $border-radius;
    }
  }
}
</style>