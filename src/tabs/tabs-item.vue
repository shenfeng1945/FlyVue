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
             active: this.active,
             disabled: this.disabled
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
           if(this.disabled){return}
           this.eventBus.$emit('update:selected',this.name,this)
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
  $active-color: blue;
  $disabled-color: #ddd;
  .tabs-item{
     flex-shrink: 0;
     padding: .5em 1em;
     cursor: pointer;
     display: flex;
     align-items: center;
     &.active{
         color: $active-color;
         .icon{
             fill: $active-color;
         }
     }
     &.disabled{
         color: $disabled-color;
     }
  }
</style>

