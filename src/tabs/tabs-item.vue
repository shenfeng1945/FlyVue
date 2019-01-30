<template>
    <div class="tabs-item" @click="tabClick">
       <slot><slot>
    </div>
</template>
<script>
export default {
   name: 'GuluTabsItem',
   inject: ['eventBus'],
   props: {
     name: {
         type:String
     }
   },
   methods: {
       tabClick(){
           this.eventBus.$emit('update:selected',this.name)
       }
   },
   created(){
       this.eventBus.$on('update:selected',(name) => {
           console.log(name,'item')
       })
   }
}
</script>
<style lang="scss" scoped>
  .tabs-item{

  }
</style>

