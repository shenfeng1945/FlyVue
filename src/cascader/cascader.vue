<template>
  <div class="cascader">
    <div
      class="trriger"
      @click="popoverVisiable = !popoverVisiable"
    >
      <slot></slot>
    </div>
    <div
      class="popover-wrapper"
      v-if="popoverVisiable"
    >
      <cascader-items :items="sources" :height="popoverHeight" :level="level" :selected="selected" @update:selected="updateSelected($event)"></cascader-items>
    </div>
  </div>
</template>

<script>
import CascaderItems from "./cascaderItems";
export default {
  name: "FlyCascader",
  props: {
    sources: Array,
    popoverHeight: String,
    level: {
      type: Number,
      default: 0
    }
  },
  
  components: { "cascader-items": CascaderItems },
  data() {
    return {
      popoverVisiable: false,
      selected: [],
    };
  },
  methods: {
    updateSelected(newSelected){
      this.selected = newSelected
      // 在该父组件外面可以@update:selected拿到当前选择的数组
      this.$emit('update:selected',newSelected)
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../../style/variable';
.cascader {
  position: relative;
  .popover-wrapper {
    @extend .box-shadow;
    position: absolute;
    top: 100%;
    left: 0;
    background: white;
  }
}
</style>