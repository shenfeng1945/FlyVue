<template>
  <transition :name="slideName">
    <div class="f-slides-item" v-if="visiable" :class="{reverse}">
      <slot></slot>
    </div>
  </transition>
</template>

<script>
export default {
  name: "FlySlidesItem",
  props: {
    name: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      selected: undefined,
      reverse: false,
      slideName: 'slideX'
    };
  },
  computed: {
    visiable() {
      return this.name === this.selected;
    }
  },
  beforeMount() {
    this.slideName = (this.$parent.direction === 'horizontal' ? 'slideX' : 'slideY');
  }
};
</script>

<style lang="scss" scoped>
.f-slides-item {
  height: 100%;
}
.slideX-enter {
  transform: translateX(100%);
}
.slideX-enter.reverse {
  transform: translateX(-100%);
}
.slideX-enter-active {
  transition: all 0.8s;
}
.slideX-leave-active {
  transition: all 0.8s;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
.slideX-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}
.slideX-leave-to.reverse {
  opacity: 0;
  transform: translateX(100%);
}
// Y
.slideY-enter {
  transform: translateY(100%);
}
.slideY-enter.reverse {
  transform: translateY(-100%);
}
.slideY-enter-active {
  transition: all 0.8s;
}
.slideY-leave-active {
  transition: all 0.8s;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
.slideY-leave-to {
  opacity: 0;
  transform: translateY(-100%);
}
.slideY-leave-to.reverse {
  opacity: 0;
  transform: translateY(100%);
}
</style>

