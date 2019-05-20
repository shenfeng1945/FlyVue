<template>
  <div class="f-date-picker">
    <label>
      <f-input type="text" :placeholder="placeholder" />
    </label>
  </div>
</template>

<script>
import Input from "../input/Input";
export default {
  name: "FlyDatePicker",
  components: {
    "f-input": Input
  },
  props: {
    placeholder: {
      type: String,
      default: "请选择日期"
    }
  }
};
</script>

<style scoped lang="scss"></style>
