<template>
    <div class="tabs-content">
       <slot></slot>
    </div>
</template>
<script>
export default {
   name: 'FlyTabsContent'
}
</script>
<style lang="scss" scoped>
  .tabs-content{
    padding-left: 20px;
  }
</style>

