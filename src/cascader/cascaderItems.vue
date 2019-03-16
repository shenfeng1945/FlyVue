<template>
  <div
    class="cascader-items"
    :style="{height: height}"
  >
    <div class="left">
      <div
        class="label"
        v-for="leftItem in items"
        :key="leftItem.name"
        @click="onClickLabel(leftItem)"
      >
        <span class="name">{{leftItem.name}}</span>
        <f-icon
          v-if="rightArrayVisiable(leftItem)"
          name="right"
          class="cas-icon"
        ></f-icon>
      </div>
    </div>
    <div
      class="right"
      v-if="rightItems"
    >
      <FlyCascaderItems
        :items="rightItems"
        :height="height"
        :level="level + 1"
        :selected.sync="selected"
        @update:selected="onUpdateSelect($event)"
      ></FlyCascaderItems>
    </div>
  </div>
</template>

<script>
import Icon from "../Icon";
export default {
  name: "FlyCascaderItems",
  props: {
    items: Array,
    height: String,
    level: Number,
    selected: Array,
    loadData: Function
  },
  components: { "f-icon": Icon },
  computed: {
    rightItems() {
      if (this.selected && this.selected[this.level]) {
        let items = this.items.filter(
          item => item.name === this.selected[this.level].name
        )[0];
        if (items && items.children && items.children.length) {
          return items.children;
        }
      }
    }
  },
  methods: {
    rightArrayVisiable(leftItem){
      return this.loadData ? !leftItem.isLeaf : leftItem.children
    },
    onClickLabel(item) {
      let selectedCopy = JSON.parse(JSON.stringify(this.selected));
      selectedCopy[this.level] = item;
      selectedCopy.splice(this.level + 1);
      this.$emit("update:selected",selectedCopy);
    },
    onUpdateSelect(newSelect) {
      this.$emit("update:selected", newSelect);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../style/variable";
.cascader-items {
  display: flex;
  height: 100px;
  & .left {
    overflow: auto;
  }
  &::-webkit-scrollbar {
    display: none;
  }
  .label {
    padding: 0.3em 0.8em;
    display: flex;
    align-items: center;
    justify-content: space-between;
    white-space: nowrap;
    cursor: pointer;
    > .name{
        margin-right: 1.5em;
        user-select: none;
    }
    &:hover {
      background: $grey;
    }
    .cas-icon {
      margin-left: auto;
      transform: scale(0.5);
    }
  }
  .right {
    border-left: 1px solid $border-color-light;
  }
}
</style>