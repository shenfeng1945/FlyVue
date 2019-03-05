<template>
  <div
    class="cascader-items"
    :style="{height: height}"
  >
    <div class="left">
      <div
        class="label"
        v-for="leftItem in items"
        :key="leftItem.name"
        @click="leftSelected = leftItem"
      >
        {{leftItem.name}}
        <f-icon
          v-if="leftItem.children"
          name="right"
          class="cas-icon"
        ></f-icon>
      </div>
    </div>
    <div
      class="right"
      v-if="leftSelected"
    >
      <FlyCascaderItems
        :items="rightItems"
        :height="height"
      ></FlyCascaderItems>
    </div>
  </div>
</template>

<script>
import Icon from "../Icon";
export default {
  name: "FlyCascaderItems",
  props: {
    items: Array,
    height: String
  },
  components: { "f-icon": Icon },
  data() {
    return {
      leftSelected: null
    };
  },
  computed: {
    rightItems() {
      if (this.leftSelected && this.leftSelected.children) {
        return this.leftSelected.children;
      } else {
        return null;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../../style/variable';
.cascader-items {
  display: flex;
  height: 100px;
  .label {
    padding: 0.3em 0.8em;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    &:hover {
      background: green;
    }
    .cas-icon{
      margin-left: 0.8em;
      transform: scale(0.5);
    }
  }
  .right {
    border-left: 1px solid $border-color-light;
  }
}
</style>