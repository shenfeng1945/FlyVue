<template>
  <div class="cascader">
    <div class="trriger" @click="popoverVisiable = !popoverVisiable">
      <slot></slot>
    </div>
    <div class="popover" v-if="popoverVisiable">
      <!-- <f-cascasder-item v-for="(sourcesItem,index) in sources" :key="index" :sourcesItem="sourcesItem"></f-cascasder-item> -->
      <div class="level1">
        <div class="item1" v-for="item1 in sources"  :key="item1.name" @click="selectItem1 = item1;selectItem2 = null">{{item1.name}}</div>
      </div>
      <div class="level2">
        <div class="item2" v-for="item2 in getItem2Level" :key="item2.name" @click="selectItem2 = item2">{{item2.name}}</div>
      </div>
      <div class="level3">
        <div class="item3" v-for="item3 in getItem3Level" :key="item3.name">{{item3.name}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import FlyCascaderItem from "./cascaderItem";
export default {
  name: "FlyCascader",
  props: {
    sources: Array
  },
  data(){
    return {
      popoverVisiable: false,
      selectItem1: null,
      selectItem2: null,
    }
  },
  computed:{
    getItem2Level(){
      if(this.selectItem1){
        return this.selectItem1.children;
      }else{
        return []
      }
    },
    getItem3Level(){
       if(this.selectItem2){
        return this.selectItem2.children;
      }else{
        return []
      }
    }
  },
  components: {
    'f-cascasder-item': FlyCascaderItem
  }
};
</script>

<style lang="scss" scoped>
.cascader {
  padding: 100px;
  .popover{
    border: 1px solid black;
    display: flex;
  }
}
</style>