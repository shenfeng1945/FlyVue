<template>
  <div class="f-nav">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "FlyNav",
  props: {
    selected: {
      type: Array,
      default: () => []
    }
  },
  mounted() {
    this.names.forEach(vm => {
      if (this.selected.indexOf(vm.name) > -1) {
        vm.selected = true;
      } else {
        vm.selected = false;
      }
      vm.$on("add:selected", name => {
        if (this.selected.indexOf(name) === -1) {
          let copy = JSON.parse(JSON.stringify(this.selected));
          copy.push(name);
          this.$emit("update:selected", copy);
        }
      });
    });
  },
  computed: {
    names() {
      return this.$children.filter(vm => vm.$options.name === "FlyNavItem");
    }
  },
  updated() {
    this.names.forEach(vm => {
      if (this.selected.indexOf(vm.name) > -1) {
        vm.selected = true;
      } else {
        vm.selected = false;
      }
    });
  }
};
</script>
<style lang="scss" scoped>
.f-nav {
  display: flex;
  border: 1px solid;
}
</style>


