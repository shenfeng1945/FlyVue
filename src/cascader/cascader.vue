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
      <cascader-items :items="sources" :height="popoverHeight" :level="level" :selected="selected" @update:selected="onUpdateSelected($event)"></cascader-items>
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
    },
    loadData: Function
  },
  
  components: { "cascader-items": CascaderItems },
  data() {
    return {
      popoverVisiable: false,
      selected: [],
    };
  },
  methods:{
      onUpdateSelected(selected){
          this.$emit('update:selected',selected)
          this.selected = selected;
          const lastItem = selected[selected.length - 1];
          let updateSource = (result) => {
            console.log(result,'result')
          }
          this.loadData(lastItem,updateSource)
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