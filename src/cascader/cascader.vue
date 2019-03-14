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
      <cascader-items
        :items="sources"
        :height="popoverHeight"
        :level="level"
        :selected="selected"
        @update:selected="onUpdateSelected($event)"
      ></cascader-items>
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
      selected: []
    };
  },
  methods: {
    onUpdateSelected(selected) {
      this.$emit("update:selected", selected);
      const lastItem = selected[selected.length - 1];
      this.selected = selected;
      let simpleCompare = (children, id) => {
        return children.filter(item => item.id === id)[0];
      };
      let complexCompare = (children, id) => {
        let noChildren = [];
        let hasChildren = [];
        children.forEach(item => {
          if (item.children) {
            hasChildren.push(item);
          } else {
            noChildren.push(item);
          }
        });
        // 无孩子中寻1
        let found = simpleCompare(noChildren, id);
        if (found) {
          return found;
        } else {
          found = simpleCompare(hasChildren, id);
          if (found) {
            return found;
          } else {
            for (let i = 0; i < hasChildren.length; i++) {
              found = complexCompare(hasChildren[i].children, id);
              if (found) {
                return found;
              }
            }
            return undefined;
          }
        }
      };
      let updateSource = result => {
        let deepSources = JSON.parse(JSON.stringify(this.sources));
        let toUpdate = complexCompare(deepSources, lastItem.id);
        toUpdate.children = result;
        this.$emit('update:sources', deepSources)
        console.log('found')
      };
      this.loadData(lastItem, updateSource);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../style/variable";
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