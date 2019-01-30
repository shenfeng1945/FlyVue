<template>
    <div class="tabs-nav">
       <slot><slot>
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
  $height: 40px;
  .tabs-nav{
    display: flex;
    border: 1px solid red;
    height: $height;
    align-items: center;
    justify-content: flex-start;
    > .actions-wrapper{
        // 可使button 在最右边
        margin-left: auto;
    }
  }
</style>

