<template>
  <div
    class="col"
    :class="colClass"
    :style="colStyle"
  >
    <slot>
      <slot>
  </div>
</template>
<script>
let validator = value => {
  let colKeys = Object.keys(value);
  let valid = true;
  colKeys.forEach(key => {
    if (!["span", "offset"].includes(key)) {
      valid = false;
    }
  });
  return valid;
};
export default {
  name: "GuluCol",
  props: {
    span: [Number, String],
    offset: {
      type: [Number, String]
    },
    phone: {type: Object,validator},
    ipad: {type: Object,validator},
    narrowPc: {type: Object,validator},
    pc: {type: Object,validator},
    widePc: {type: Object,validator},
  },
  data() {
    return {
      gutter: 0
    };
  },
  computed: {
    colStyle() {
      return {
        paddingLeft: this.gutter / 2 + "px",
        paddingRight: this.gutter / 2 + "px"
      };
    },
    colClass() {
      let { span, offset, phone, ipad, narrowPc } = this;
      let createClasses= (obj, str = '') => {
          let array = []
          if(!obj){return []}
          if(obj.span){
              array.push(`col-${str}${obj.span}`)
          }
          if(obj.offset){
              array.push(`col-${str}${obj.offset}`)
          }
          return array
      }
      return [
         ...createClasses({span,offset}),
         ...createClasses(phone,'phone-'),
         ...createClasses(ipad,'ipad-' ),
         ...createClasses(narrowPc,'narrow-pc-')
      ];
    }
  }
};
</script>

<style lang="scss" scoped>
.col {
  $class-prefix: col-;
  $class-offset: offset-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      width: ($n / 24) * 100%;
    }
  }
  @for $n from 1 through 24 {
    &.#{$class-offset}#{$n} {
      margin-left: ($n / 24) * 100%;
    }
  }
  @media (min-width: 577px) {
    $class-prefix: col-ipad-;
    $class-offset: col-ipad-offset-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
    @for $n from 1 through 24 {
      &.#{$class-offset}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }
  @media (min-width: 769px) {
    $class-prefix: col-narrow-pc-;
    $class-offset: col-narrow-pc-offset-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
    @for $n from 1 through 24 {
      &.#{$class-offset}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }
  
   @media (min-width: 993px) {
    $class-prefix: col-pc-;
    $class-offset: col-pc-offset-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
    @for $n from 1 through 24 {
      &.#{$class-offset}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }
  
   @media (min-width: 1201px) {
    $class-prefix: col-wide-pc-;
    $class-offset: col-wide-pc-offset-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
    @for $n from 1 through 24 {
      &.#{$class-offset}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }
}
</style>

