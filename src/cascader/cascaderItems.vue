<template>
  <div class="cascader-items">
     <div class="left">
        <div v-for="leftItem in items" :key="leftItem.name" @click="leftSelected = leftItem">{{leftItem.name}}</div>
     </div>
     <div class="right" v-if="leftSelected">
        <FlyCascaderItems :items="rightItems"></FlyCascaderItems>
     </div>
  </div>
</template>

<script>
export default {
  name: "FlyCascaderItems",
  props: {
      items: Array
  },
  data(){
    return {
      leftSelected: null
    }
  },
  computed:{
    rightItems(){
      if(this.leftSelected && this.leftSelected.children){
        return this.leftSelected.children
      }else{
        return null
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.cascader-items {
   display:flex;
}
</style>