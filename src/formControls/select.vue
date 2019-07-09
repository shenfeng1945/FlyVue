<template>
  <select class="f-select" :value="value" @change="changeSelect">
    <slot></slot>
  </select>
</template>

<script>
export default {
  name: "FlySelect",
  props: {
    value: String
  },
  methods: {
      changeSelect(e){
          this.$emit('update', e.target.value)
      }
  }
};
</script>

<style lang="scss" scoped>
.f-select {
  //   width: 140px;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  vertical-align: middle;
  text-align: left;
  font-size: 14px;
  box-shadow: inset 0 0 0 1px rgba(16, 22, 26, 0.2),
    inset 0 -1px 0 rgba(16, 22, 26, 0.1);
  background-color: #f5f8fa;
  color: #182026;
  border-radius: 3px;
  height: 30px;
  padding: 0 25px 0 10px;
  text-transform: none;
  font-family: inherit;
  line-height: 1.15;
  margin: 0;
  outline: none;
}
</style>


