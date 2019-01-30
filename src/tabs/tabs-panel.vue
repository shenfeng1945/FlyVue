<template>
    <div class="tabs-panel" v-if="active">
       <slot><slot>
    </div>
</template>
<script>
export default {
   name: 'GuluTabsPanel',
   inject: ['eventBus'],
   data(){
       return {
           active: false
       }
   },
   props: {
       name: String | Number,
       required: true
   },
   created(){
       this.eventBus.$on('update:selected',(name) => {
           this.active = name === this.name
       })
   }
}
</script>
<style lang="scss" scoped>
  .tabs-panel{

  }
</style>

