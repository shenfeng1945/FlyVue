<template>
  <div class="f-nav-item" :class="{selected,'f-sub-item': subItem, disabled}" @click="onClick">
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
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  inject: ["root","direction"],
  data() {
    return {
      selected: false,
      subItem: false
    };
  },
  created() {
    // 获取顶级组件的实例
    this.root.addItems(this);
    this.subItem = this.$parent.$options.name === 'FlySubNav' || this.direction === 'vertical';
  },
  methods: {
    onClick() {
      if(this.disabled){return};
      this.root.namePath = [];
      this.$parent.updateNamePath && this.$parent.updateNamePath();
      if(this.direction === 'horizontal'){
        this.root.$children.forEach(item => item.$options.name === 'FlySubNav' && item.clickClose && item.clickClose());
      }
      this.$emit("add:selected", this.name);
    }
  }
};
</script>
<style lang="scss" scoped>
@import 'style/_variable';
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
  &.disabled{
    &:hover{
      color: $grey;
    }
    &.selected{
      box-shadow: none;
      color: inherit;
    }
    cursor: not-allowed;
    color: $grey;
  }
}
</style>


