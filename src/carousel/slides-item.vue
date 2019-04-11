<template>
  <transition name="slide">
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
      reverse: false
    };
  },
  computed: {
    visiable() {
      return this.name === this.selected;
    }
  }
};
</script>

<style lang="scss" scoped>
.slide-enter {
  transform: translateX(100%);
}
.slide-enter.reverse {
  transform: translateX(-100%);
}
.slide-enter-active {
  transition: all .8s;
}
.slide-leave-active {
  transition: all .8s;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
.slide-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}
.slide-leave-to.reverse {
  opacity: 0;
  transform: translateX(100%);
}
</style>

