<template>
    <div class="f-nav-item" :class="{selected}" @click="onClick">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'FlyNavItem',
    props: {
        name: {
            type: String,
            required: true
        }
    },
    data(){
        return {
            selected: false
        }
    },
    methods:{
        onClick(){
            this.$emit('add:selected',this.name)
        }
    }
}
</script>
<style lang="scss" scoped>
  .f-nav-item{
      padding: 1em;
      &.selected{
          background: red;
      }
  }
</style>


