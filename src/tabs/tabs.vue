<template>
    <div class="tabs">
       <slot><slot>
    </div>
</template>
<script>
import Vue from 'vue'
export default {
   name: 'GuluTabs',
   props: {
       selected: {
           type: String,
           required: true
       },
       direction: {
           type: String,
           default: 'horizontal',
           validator(value){
               return ['horizontal','vertical'].indexOf(value) > -1
           }
       }
   },
   data(){
     return {
         eventBus: new Vue()
     }
   },
   created(){
    //    this.$emit('update:selected','sdf')
   },
   provide(){
       return {
           // 若写成eventBus: new Vue(),那么该组件访问不到该事件中心，所以通过data包裹下
           eventBus: this.eventBus
       }
   }
}
</script>
<style lang="scss" scoped>
  .tabs{

  }
</style>

