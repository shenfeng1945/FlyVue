<template>
  <div class="f-tree">
    <f-tree-node
      v-for="item of renderData"
      :key="item.id"
      :modelItem="item"
      @update:Data="toogleNode"
    ></f-tree-node>
  </div>
</template>

<script>
// 滑动输入条
import Icon from "../icon/Icon";
import TreeNode from "./treeNode";
import Vue from 'vue';
export default {
  name: "FlyTree",
  props: {
    data: {
      type: Array,
      default: () => []
    },
    nodeKey: {
      type: String,
      default: "id"
    }
  },
  data() {
    return {
      renderData: [],
      eventBus: new Vue(),
    };
  },
  provide(){
     return {
       eventBus: this.eventBus
     }
  },
  created() {
    this.renderData = this.getRenderData();
    this.eventBus.$on('update:Data', this.toogleNode);
  },
  methods: {
    getRenderData() {
      const copyData = JSON.parse(JSON.stringify(this.data));
      const mapData = data =>
        data.map(item => {
          if (item.children && item.children.length) {
            item.isOpen = false;
            mapData(item.children);
          }
          return item;
        });
      return mapData(copyData);
    },
    toogleNode(id) {
      const findId = data =>
        data.map(item => {
          if (item[this.nodeKey] === id) {
            item.isOpen = !item.isOpen;
          }
          if(item.children && item.children.length){
              findId(item.children);
          }
          return item;
        });
       const copyData = JSON.parse(JSON.stringify(this.renderData));
       this.renderData = findId(copyData);
    }
  },
  components: {
    "f-icon": Icon,
    "f-tree-node": TreeNode
  }
};
</script>


<style lang="scss" scoped>
ul,
ol {
  list-style: none;
}
</style>


