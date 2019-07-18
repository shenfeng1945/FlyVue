<template>
    <div class="f-tree">
      <div v-for="(item,i) of data" :key="i">
          <f-icon v-if="item.children && item.children.length" name="chevron-right"></f-icon>
          {{item.label}}
          <template v-if="item.children && item.children.length">
            <FlyTree :data="item.children"></FlyTree>
          </template>
      </div>
    </div>
</template>

<script>
// 滑动输入条
import Icon from "../icon/Icon";
export default {
    name: 'FlyTree',
    props: {
        data: {
            type: Array,
            default: () => []
        }
    },
    components: {
        'f-icon': Icon
    }
}
</script>

