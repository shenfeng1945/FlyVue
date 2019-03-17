<template>
  <div
    class="col"
    :class="colClass"
    :style="colStyle"
  >
    <slot>
    </slot>
  </div>
</template>
<script>
let validator = value => {
  let colKeys = Object.keys(value);
  let valid = true;
  colKeys.forEach(key => {
    if (!(["span", "offset"].indexOf(key) > -1)) {
      valid = false;
    }
  });
  return valid;
};
export default {
  name: "FlyCol",
  props: {
    span: [Number, String],
    offset: {
      type: [Number, String]
    },
    ipad: { type: Object, validator },
    narrowPc: { type: Object, validator },
    pc: { type: Object, validator },
    widePc: { type: Object, validator }
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
      let { span, offset, ipad, narrowPc, pc, widePc } = this;
      let createClasses = (obj, str = "") => {
        let array = [];
        if (!obj) {
          return [];
        }
        if (obj.span) {
          array.push(`col-${str}${obj.span}`);
        }
        if (obj.offset) {
          array.push(`offset-${str}${obj.offset}`);
        }
        return array;
      };
      return [
        ...createClasses({ span, offset }),
        ...createClasses(pc, "pc-"),
        ...createClasses(ipad, "ipad-"),
        ...createClasses(narrowPc, "narrow-pc-"),
        ...createClasses(widePc, "wide-pc-")
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
    $class-offset: offset-ipad-;
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
    $class-offset: offset-narrow-pc-;
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
    $class-offset: offset-pc-;
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
    $class-offset: offset-wide-pc-;
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

