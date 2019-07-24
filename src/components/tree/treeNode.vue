<template>
  <div class="f-tree-node" @click.stop="updateData(modelItem.id)">
    <div class="f-tree-item">
      <div class="f-tree-node-content" :style="getPaddingStyle">
        <f-icon :class="{'is-leaf': !isLeaf}" name="chevron-right"></f-icon>
        <span>{{modelItem.label}}</span>
      </div>
    </div>
    <template v-if="modelItem.isOpen">
      <FlyTreeNode
        v-for="item of modelItem.children"
        :key="item.id"
        :modelItem="item"
        :level="level + 1"
      ></FlyTreeNode>
    </template>
  </div>
</template>

<script>
import Icon from "../icon/Icon";
export default {
  name: "FlyTreeNode",
  props: {
    modelItem: {
      type: Object
    },
    level: {
      type: Number,
      default: 0
    }
  },
  inject: ["eventBus"],
  components: {
    "f-icon": Icon
  },
  data() {
    return {};
  },
  computed: {
    isLeaf() {
      return this.modelItem.children && this.modelItem.children.length;
    },
    getPaddingStyle() {
      return { "padding-left": this.level * 16 + "px" };
    }
  },
  methods: {
    updateData(id) {
      this.modelItem.children && this.eventBus.$emit("update:Data", id);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "_variable";

.f-tree-node {
  &-content {
    display: flex;
    align-items: center;
    cursor: pointer;
    &:hover {
      background: $bg-hover-content;
    }
    .is-leaf {
      fill: transparent;
    }
    .rotate180 {
      transform: rotateZ(180deg);
      transition: transform 0.3s;
    }
    .antiRotate180 {
      transform: rotateZ(0deg);
      transition: transform 0.3s;
    }
  }
}
</style>


