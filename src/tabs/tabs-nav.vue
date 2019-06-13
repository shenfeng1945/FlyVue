<template>
    <div class="tabs-nav" ref="nav">
       <slot></slot>
       <div class="line" ref="line" v-show="showLine"></div>
       <div class="actions-wrapper">
         <slot name="actions"></slot>
       </div>
      
    </div>
</template>
<script>
export default {
   name: 'FlyTabsNav',
   inject: ['eventBus'],
   props: {
     animate: {
       type: Boolean,
       default: true
     }
   },
   data(){
     return {
       showLine: false
     }
   },
   mounted(){
      this.eventBus.$on('update:selected', (name,vm) => {
        const {left,top,width,height} = vm.$el.getBoundingClientRect()
        this.showLine = true
        console.log(left,'left')
        this.$refs.line.style.width = `${width}px`
        this.$refs.line.style.transform = `translateX(${left}px)`
      })
   }
}
</script>
<style lang="scss" scoped>
  $active-color: blue;
  .tabs-nav{
    
    display: flex;
    align-items: center;
    justify-content: flex-start;
    position: relative;
    > .line {
       position: absolute;
       bottom: 0;
       border-bottom: 1px solid $active-color;
       transition: all .3s;
    }
    > .actions-wrapper{
        // 可使button 在最右边
        margin-left: auto;
    }
  }
</style>

