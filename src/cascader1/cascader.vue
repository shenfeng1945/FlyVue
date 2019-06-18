<template>
  <div class="f-cascader">
      <div class="f-trigger" @click="open">
        <slot></slot>
      </div>
      <div v-if="popoverVisiable">
        hello   
      </div>
  </div>
</template>

<script>
export default {
    name: 'FlyCascader',
    data(){
        return {
            popoverVisiable: false
        }
    },
    methods: {
        open(){
            this.popoverVisiable = !this.popoverVisiable;
        },
        close(){
            
        }
    }
};
</script>

<style lang="scss" scoped>
</style>

