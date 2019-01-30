<template>
    <div class="tabs-nav">
       <slot><slot>
       <div class="line"></div>
       <div class="actions-wrapper">
         <slot name="actions"></slot>
       </div>
    </div>
</template>
<script>
export default {
   name: 'GuluTabsNav',
   inject: ['eventBus'],
   created(){
   }
}
</script>
<style lang="scss" scoped>
  .tabs-nav{
    
    display: flex;
    border: 1px solid red;
    align-items: center;
    justify-content: flex-start;
    position: relative;
    > .line {
       position: absolute;
       bottom: 0;
       border-bottom: 1px solid 
    }
    > .actions-wrapper{
        // 可使button 在最右边
        margin-left: auto;
    }
  }
</style>

