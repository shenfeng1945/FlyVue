<template>
  <div class="checkbox-group" :class="{'f-inline': inline}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "FlyCheckboxGroup",
  props: {
      value: Array,
      disabled: {
        type: Boolean,
        default: false
      },
      inline: {
        type: Boolean,
        default: false
      },
      large: {
        type: Boolean,
        default: false
      },
      alignRight: {
        type: Boolean,
        default: false
      }
  },
  provide(){
    return {
      root: this
    }
  },
  methods: {
    onChangeGroup(checklist){
      this.$emit('change',checklist)
    }
  }
};
</script>

<style scoped lang="scss">
  .f-inline{
    display: flex;
    align-items: center;
    .f-checkbox {
      margin-right: 20px;
    }
  }
</style>

