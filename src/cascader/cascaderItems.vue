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
        {{leftItem.name}}
        <f-icon
          v-if="leftItem.children"
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
        :selected="selected"
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
    selected: Array
  },
  components: { "f-icon": Icon },
  computed: {
    rightItems() {
      const currentSelected = this.selected[this.level];
      if(currentSelected && currentSelected.children){
         return currentSelected.children
      }else{
        return null
      }
    }
  },
  methods: {
    onClickLabel(item){
      const selectedCopy = JSON.parse(JSON.stringify(this.selected));
      selectedCopy[this.level] = item;
      selectedCopy.splice(this.level + 1);
      this.$emit('update:selected',selectedCopy)
    },
    onUpdateSelect(newSelect){
      this.$emit('update:selected',newSelect);
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../../style/variable';
.cascader-items {
  display: flex;
  height: 100px;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  .label {
    padding: 0.3em 0.8em;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    &:hover {
      background: green;
    }
    .cas-icon{
      margin-left: 0.8em;
      transform: scale(0.5);
    }
  }
  .right {
    border-left: 1px solid $border-color-light;
  }
}
</style>