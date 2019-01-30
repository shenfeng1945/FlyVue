<template>
    <div class="tabs-item" @click="tabClick" :class="itemclass">
       <slot><slot>
    </div>
</template>
<script>
export default {
   name: 'GuluTabsItem',
   inject: ['eventBus'],
   data(){
     return {
         active: false
     }
   },
   computed:{
     itemclass(){
         return {
             active: this.active
         }
     }
   },
   props: {
     name: {
         type:String | Number,
         required: true
     },
     disabled: {
         type: Boolean,
         default: false
     }
   },
   methods: {
       tabClick(){
           this.eventBus.$emit('update:selected',this.name)
       }
   },
   created(){
       this.eventBus.$on('update:selected',(name) => {
           this.active = name === this.name
       })
   }
}
</script>
<style lang="scss" scoped>
  .tabs-item{
     flex-shrink: 0;
     padding: 0 1em;
     &.active{
         background: red;
     }
  }
</style>

