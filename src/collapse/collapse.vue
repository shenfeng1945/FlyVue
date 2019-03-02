<template>
  <div class="collapse">
    <slot></slot>
  </div>
</template>
<script>
import Vue from "vue";
export default {
  name: "FlyCollapse",
  props: {
    single: {
      type: Boolean,
      default: false
    },
    selected: {
      type: Array
    }
  },
  data() {
    return {
      eventBus: new Vue()
    };
  },
  provide() {
    return {
      eventBus: this.eventBus
    };
  },
  mounted() {
    this.eventBus.$emit("update:selected", this.selected);
    // 监听子元素，将name数组传给本身
    this.eventBus.$on("update:addSelected", name => {
      let selectedArray = Object.assign([],this.selected)
      if (this.single) {
        selectedArray = [];
      }
      selectedArray.push(name);
      this.$emit("update:selected", selectedArray);
      this.eventBus.$emit("update:selected", selectedArray);
    });
    this.eventBus.$on("update:removeSelected", name => {
      let selectedArray = Object.assign([],this.selected)
      let index = selectedArray.indexOf(name);
      selectedArray.splice(index, 1);
      this.$emit("update:selected", selectedArray);
      this.eventBus.$emit("update:selected", selectedArray);
    });
  }
};
</script>
<style lang="scss" scoped>
$grey: #ddd;
$border-radius: 4px;
.collapse {
  border: 1px solid $grey;
  border-radius: $border-radius;
}
</style>