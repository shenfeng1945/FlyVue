<template>
    <div class="col" :class="[span && `col-${span}`,offset && `offset-${offset}`]"
         :style="{paddingLeft: gutter/2 + 'px',paddingRight: gutter/2 + 'px'}">
    <div style="border: 1px solid green;">
       <slot><slot>
    </div>
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
            gutter: 0
        }
    }
}
</script>

<style lang="scss" scoped>
  .col{
      height: 100px;
      width: 50%;
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

