<template>
    <div class="col" :class="colClass" :style="colStyle">
       <slot><slot>
    </div>
</template>
<script>
export default {
    name: 'GuluCol',
    props: {
        span: [Number,String],
        offset: {
            type: [Number,String]
        }
    },
    data(){
        return {
            gutter: 0,
        }
    },
    computed: {
      colStyle(){
          return {
              paddingLeft: this.gutter/2 + 'px',
              paddingRight: this.gutter/2 + 'px'
          }
      },
      colClass(){
          let {span,offset} = this;
          return [
              span && `col-${span}`,
              offset && `offset-${offset}`
            ]
      }
    }
}
</script>

<style lang="scss" scoped>
  .col{
      $class-prefix: col-;
      $class-offset: offset-;
      @for $n from 1 through 24 {
          &.#{$class-prefix}#{$n}{
              width: ($n / 24) * 100%
          }
      }
      @for $n from 1 through 24 {
          &.#{$class-offset}#{$n}{
              margin-left: ($n / 24) * 100%
          }
      }
  }
</style>

