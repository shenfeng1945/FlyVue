<template>
  <div class="f-nav-item" :class="{selected}" @click="onClick">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "FlyNavItem",
  props: {
    name: {
      type: String,
      required: true
    }
  },
  inject: ["root"],
  data() {
    return {
      selected: false
    };
  },
  created() {
    // 获取顶级组件的实例
    this.root.addItems(this);
  },
  methods: {
    onClick() {
      this.root.namePath = [];
      this.$parent.updateNamePath && this.$parent.updateNamePath();
      this.$emit("add:selected", this.name);
    }
  }
};
</script>
<style lang="scss" scoped>
.f-nav-item {
  padding: 1em;
  &.selected {
    position: relative;
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      border-bottom: 2px solid blue;
      width: 100%;
    }
  }
}
</style>


