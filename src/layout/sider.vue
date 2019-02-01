<template>
   <div class="sider">
     <slot><slot>
     <button>hello</button>
   </div>
</template>
<script>
export default {
  name: 'FlySider'
}
</script>

<style lang="scss" scoped>
  .sider{
     width: 100px;
  }
</style>