<template>
    <div class="tabs-item" @click="tabClick" :class="itemclass" :data-name="name">
       <slot></slot>
    </div>
</template>
<script>
export default {
   name: 'FlyTabsItem',
   inject: ['eventBus'],
   data(){
     return {
         active: false,
         noAnimate: false,
         vertical: false
     }
   },
   computed:{
     itemclass(){
         return {
             active: this.active,
             disabled: this.disabled,
             noAnimate: this.noAnimate,
             vertical: this.vertical
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
           this.eventBus.$emit('update:selected',this.name,this);
       }
   },
   created(){
       this.eventBus && this.eventBus.$on('update:selected',(name) => {
           this.active = name === this.name;
       })
   },
   mounted(){
       this.noAnimate = !this.$parent.animate;
       this.vertical = this.$parent.vertical;
   }
}
</script>
<style lang="scss" scoped>
  @import '_variable';
  .tabs-item{
     flex-shrink: 0;
     padding: .5em 0;
     cursor: pointer;
     display: flex;
     align-items: center;
     line-height: 30px;
     &:not(:last-child){
         margin-right: 20px;
     }
     &.vertical{
        width: 100%;
        padding: 0 10px;
        margin-right: 0px;
     }
     &.active{
         color: $active-color;
         &.vertical{
           background: white;
           border-radius: $border-radius;
         }
         &.noAnimate{
            box-shadow: inset 0 -3px 0 $active-color;
         }
         &.noAnimate.vertical{
            box-shadow: none;
            background: $bg-selected;
            border-radius: $border-radius;
         }
         .icon{
             fill: $active-color;
         }
         
     }
     &:hover{color: $active-color;}
     &.disabled{
         color: $disabled-color;
         cursor: not-allowed;
     }
  }
</style>

