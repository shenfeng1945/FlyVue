<template>
  <div class="row" :style="rowStyle" :class="rowClass">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "FlyRow",
  props: {
      gutter: {
          type: [Number,String]
      },
      align: {
        type: String,
        default: 'left',
        validator(value){
          return ['left','right','center'].indexOf(value) > -1
        }
      }
  },
  computed:{
    rowStyle(){
        return {
            marginLeft: -this.gutter/2 + 'px',
            marginRight: -this.gutter/2 + 'px'
        }
    },
    rowClass(){
      let {align} = this
       return [align && `align-${align}`]
    }
  },
  mounted(){
    this.$children.forEach(vm => {
        vm.gutter = this.gutter;
    })
  }
};
</script>
<style lang="scss" scoped>
.row {
  display: flex;
  &.align-left{
    justify-content: flex-start;
  }
  &.align-right{
    justify-content: flex-end;
  }
  &.align-center{
    justify-content: center;
  }
}
</style>


