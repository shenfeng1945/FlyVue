<template>
    <svg class="icon" v-if="name" @click="$emit('click')">
        <use :xlink:href="`#i-${name}`"></use>
    </svg>
</template>
<script>
import '../iconfont';
export default {
   props: ['name']
}
</script>
<style lang="scss" scoped>
.icon{
   width: 1em;
   height: 1em;
   vertical-align: middle;
 }
</style>


