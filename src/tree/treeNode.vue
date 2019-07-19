<template>
    <li class="f-tree-node" @click.stop="updateData(modelItem.id)">
       <span>
         <f-icon v-if="modelItem.children && modelItem.children.length" name="chevron-right"></f-icon>
         {{modelItem.label}}
       </span>
      <ul v-if="modelItem.isOpen">
          <FlyTreeNode v-for="item of modelItem.children" :key="item.id" :modelItem="item"></FlyTreeNode>
      </ul>
    </li>
</template>

<script>
import Icon from "../icon/Icon";
export default {
    name: 'FlyTreeNode',
    props: {
        modelItem: {
            type: Object
        }
    },
    inject: ['eventBus'],
    components: {
        'f-icon': Icon
    },
    methods: {
      updateData(id){
          this.modelItem.children && this.eventBus.$emit('update:Data', id);
      }
    }
}
</script>

<style lang="scss" scoped>
  ul,ol{list-style: none;}
</style>


