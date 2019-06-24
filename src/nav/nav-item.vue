<template>
  <div class="f-nav-item" :class="{selected,'f-sub-item': subItem}" @click="onClick">
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
      selected: false,
      subItem: false
    };
  },
  created() {
    // 获取顶级组件的实例
    this.root.addItems(this);
    this.subItem = this.$parent.$options.name === 'FlySubNav';
  },
  methods: {
    onClick() {
      this.root.namePath = [];
      this.$parent.updateNamePath && this.$parent.updateNamePath();
      this.$parent.clickClose && this.$parent.clickClose();
      this.$emit("add:selected", this.name);
      
    }
  }
};
</script>
<style lang="scss" scoped>
@import '_variable';
.f-nav-item {
  padding: 1em;
  cursor: pointer;
  &:hover{
    color: $active-color;
  }
  &.selected {
    box-shadow: inset 0 -2px 0 $active-color;
    color: $active-color;
  }
  &.f-sub-item{
    box-shadow: none;
  }
}
</style>


