<template>
  <div class="f-slides">
    <div class="f-slides-window">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "FlySlides",
  props: {
    selected: String,
    autoPlay: {
      type: Boolean,
      default: true
    },
    reverse: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    this.updateChildren();
    this.playAutomatically();
  },
  updated() {
    this.updateChildren();
  },
  methods: {
    updateChildren() {
      let selected = this.getSelected();
      this.$children.forEach(vm => {
        vm.selected = selected;
        vm.reverse = this.reverse;
      });
    },
    getSelected() {
      return this.selected || this.$children[0].name;
    },
    playAutomatically() {
      const names = this.$children.map(vm => vm.name);
      let index = names.indexOf(this.getSelected());
      const run = () => {
        this.reverse ? index-- : index++;
        if (index === -1) {
          index = names.length - 1;
        }
        if (index === names.length) {
          index = 0;
        }
        this.$emit("update:selected", names[index]);
        setTimeout(run, 2000);
      };
      setTimeout(run, 2000);
    }
  }
};
</script>

<style lang="scss" scoped>
.f-slides {
  &-window {
    position: relative;
    overflow: hidden;
  }
}
</style>



