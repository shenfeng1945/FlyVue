<template>
  <div class="tabs">
    <slot></slot>
  </div>
</template>
<script>
import Vue from "vue";
export default {
  name: "GuluTabs",
  props: {
    selected: {
      type: String,
      required: true
    },
    direction: {
      type: String,
      default: "horizontal",
      validator(value) {
        return ["horizontal", "vertical"].indexOf(value) > -1;
      }
    }
  },
  data() {
    return {
      // new Vue() 有$emit,$on,$off所以用它做事件总线
      eventBus: new Vue()
    };
  },
  mounted() {
    if(!this.$children.length){
      throw new Error('期待tabs组件里包含tabs-nav和tabs-content，但没有')
    }
    this.$children.forEach(vm => {
      if (vm.$options.name === "GuluTabsNav") {
        vm.$children.forEach(childVm => {
          if (childVm.name === this.selected && childVm.$options.name === 'GuluTabsItem') {
            this.eventBus.$emit("update:selected", this.selected, childVm);
          }
        });
      }
    });
  },
  provide() {
    return {
      // 若写成eventBus: new Vue(),那么该组件访问不到该事件中心，所以通过data包裹下
      eventBus: this.eventBus
    };
  }
};
</script>
<style lang="scss" scoped>
.tabs {
}
</style>

