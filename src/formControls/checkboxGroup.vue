<template>
  <div class="checkbox-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "FlyCheckboxGroup",
  props: {
      value: Array,
  },
  methods: {
    onChangeGroup(checklist){
      this.$emit('change',checklist)
    }
  }
};
</script>

