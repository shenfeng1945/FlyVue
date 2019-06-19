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
        :class="selectedItems(leftItem)"
      >
        <span class="name">{{leftItem.name}}</span>
        <span class="icons">
          <template v-if="leftItem.name === loadingItem.name"> 
           <f-icon name="loading" class="loading"></f-icon>
          </template> 
          <template v-else>
            <f-icon v-if="rightArrayVisiable(leftItem)" class="next" name="right"></f-icon>
          </template>
        </span>

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
        :load-data="loadData"
        :close="close"
        @update:selected="onUpdateSelect"
        :loading-item="loadingItem"
        @update:selectedValue="onSelectedValue"
      ></FlyCascaderItems>
    </div>
  </div>
</template>

<script>
import Icon from "../icon/Icon";
export default {
  name: "FlyCascaderItems",
  props: {
    items: Array,
    height: String,
    level: Number,
    selected: Array,
    loadData: Function,
    loadingItem: {
        type: Object,
        default: () => ({})
    },
    close: Function
  },
  data(){
      return {
          selectedCopy: this.selected
      }
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
    },
    
  },
  methods: {
    selectedItems(curItem){
      let result = false;
      this.selectedCopy.forEach(item => {
          if(item.name === curItem.name){
              result = true;
          }
      })
      return result ? 'isSelected' : '';
    },
    rightArrayVisiable(leftItem) {
      return this.loadData ? !leftItem.isLeaf : leftItem.children;
    },
    onClickLabel(item) {
      let selectedCopy = JSON.parse(JSON.stringify(this.selected));
      selectedCopy[this.level] = item;
      selectedCopy.splice(this.level + 1);
      this.$emit("update:selected", selectedCopy);
      this.selectedCopy = selectedCopy;
      if(!this.rightArrayVisiable(item)){
        const name = selectedCopy.reduce((sum,n) => sum + n.name + '/', '').replace(/\/$/,'');
        this.$emit('update:selectedValue', name);
        this.close();
      }
    },
    onUpdateSelect(newSelect) {
      this.$emit("update:selected", newSelect);
    },
    onSelectedValue(value){
      this.$emit('update:selectedValue', value);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "_variable";
.cascader-items {
  display: flex;
  height: 100px;
  & .left {
    overflow: auto;
  }
  &::-webkit-scrollbar {
    display: none;
  }
  .isSelected{
    color: $menu-active-color;
  }
  .label {
    padding: 0.3em 0.8em;
    display: flex;
    align-items: center;
    justify-content: space-between;
    white-space: nowrap;
    cursor: pointer;
    > .name {
      margin-right: 1.5em;
      user-select: none;
    }
    &:hover {
      background: $menu-hover-color;
    }
    .icons {
      margin-left: auto;
      .loading{
        animation: spin 1.2s infinite linear;
      }
      .next{
        transform: scale(0.5);
      }
    }
  }
  .right {
    border-left: 1px solid $border-color-light;
  }
}
</style>