<template>
  <div>
    <template v-if="renderActivePanel">
      <div class="tabs-panel" v-if="active">
        <slot></slot>
      </div>
    </template>
    <template v-else>
      <div class="tabs-panel" v-show="active">
        <slot></slot>
      </div>
    </template>
  </div>
</template>
<script>
export default {
  name: "FlyTabsPanel",
  inject: ["eventBus"],
  data() {
    return {
      active: false,
      renderActivePanel: true
    };
  },
  props: {
    name: {
      type: String | Number,
      required: true
    }
  },
  created() {
    this.eventBus.$on("update:selected", name => {
      this.active = name === this.name;
    });
  },
  mounted() {
    this.renderActivePanel = this.$parent.$options.parent.renderActivePanel;
  }
};
</script>
<style lang="scss" scoped>
.tabs-panel {
}
</style>

