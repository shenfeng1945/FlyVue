<template>
  <div
    class="f-cascader"
    v-click-outside="close"
  >
    <div
      class="f-cascader-trigger"
      @click="onTrigger"
    >
      <f-input v-model="value" :clearable="clearable" @change="onInputValue" class="pointer" :placeholder="placeholder"></f-input>
    </div>
    <div
      class="f-popover-wrapper"
      v-if="popoverVisible"
    >
      <f-cascader-items
        :items="sources"
        :height="popoverHeight"
        :level="level"
        :selected.sync="selected"
        :loadData="loadData"
        :close="close"
        @update:selected="onUpdateSelected($event)"
        :loading-item="loadingItem"
        @update:selectedValue="value = $event"
      ></f-cascader-items>
    </div>
  </div>
</template>

<script>
import CascaderItems from "./cascaderItems";
import ClickOutside from "./cascader-click-outside";
import Input from "../input/Input";
export default {
  name: "FlyCascader",
  props: {
    sources: Array,
    popoverHeight: String,
    loadData: Function,
    clearable: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: '请选择'
    }
  },
  directives: { "click-outside": ClickOutside },
  components: { "f-cascader-items": CascaderItems, "f-input": Input },
  data() {
    return {
      popoverVisible: false,
      selected: [],
      loadingItem: {},
      value: '',
      level: 0,
    };
  },
  methods: {
    onTrigger() {
      if (this.popoverVisible) {
        this.close();
      } else {
        this.open();
      }
    },
    open() {
      this.popoverVisible = true;
    },
    close() {
      this.popoverVisible = false;
    },
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
        this.$emit("update:sources", deepSources);
        this.loadingItem = {};
      };
      if (!lastItem.isLeaf && this.loadData) {
        this.loadData(lastItem, updateSource);
        this.loadingItem = lastItem;
      }
    },
    onInputValue(value){
      if(value === ''){
        this.selected = [];
        this.value = ''
      }else if(value !== this.getCurrentInputValue()){
        this.value = this.getCurrentInputValue();
      }
    },
    getCurrentInputValue(){
      return this.selected.reduce((sum,n) => sum + n.name + '/','').replace(/\/$/,'');
    }
  }
};
</script>

<style lang="scss" scoped>
@import "style/_variable";
.f-cascader {
  position: relative;
  display: inline-block;
  &-trigger{
    input{
      cursor: pointer;
    }
  }
  .f-popover-wrapper {
    @extend .box-shadow;
    position: absolute;
    top: 100%;
    left: 0;
    background: white;
    z-index: 1;
    margin-top: 5px;
  }
}
</style>