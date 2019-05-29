<template xmlns="http://www.w3.org/1999/XSL/Transform">
  <div id="app">
    <div>hello</div>
    <f-date-picker :value="value" @input="value = $event" />
    <div>hello</div>
  </div>
</template>
<script>
import DatePicker from "./datepicker/datepicker";
import Table from "./table/table";
import TableColumn from "./table/table-column";
import Scroll from "./scroll/scroll";
import Row from "./grid/row";
import Col from "./grid/col";
export default {
  name: "Demos",
  components: {
    "f-date-picker": DatePicker,
    "f-table": Table,
    "f-table-column": TableColumn,
    "f-scroll": Scroll,
    "f-row": Row,
    "f-col": Col
  },
  data() {
    return {
      value: new Date(),
    };
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
