<template>
  <div id="app">
    <f-date-picker />
  </div>
</template>
<script>
import DatePicker from "./datepicker/datepicker";
export default {
  name: "Demos",
  components: {
    "f-date-picker": DatePicker
  },
  data() {
    return {};
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
