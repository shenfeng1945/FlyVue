<template xmlns="http://www.w3.org/1999/XSL/Transform">
  <div id="app">
    <f-date-picker :value="value" @input="value = $event" />
    <f-table  :data-source="dataSource">
      <template slot-scope="data">
        <button>编辑</button>
        <button>查看</button>
      </template>
        <f-table-column text="姓名" field="name" width="200">
          <template slot-scope="props">
            <a href="#">{{props}}</a>
          </template>
        </f-table-column>
        <f-table-column text="分数" field="score">
        </f-table-column>
    </f-table>
  </div>
</template>
<script>
import DatePicker from "./datepicker/datepicker";
import Table from "./table/table";
import TableColumn from "./table/table-column";
export default {
  name: "Demos",
  components: {
    "f-date-picker": DatePicker,
    "f-table": Table,
    "f-table-column": TableColumn
  },
  data() {
    return {
      value: new Date(),
      // columns: [
      //   { text: "姓名", field: "name", width: 200 },
      //   { text: "分数", field: "score" }
      // ],
      dataSource: [
        { id: 1, name: "curry", score: 100, description: 'hello'},
        { id: 2, name: "james", score: 80 , description: 'world'},
        { id: 3, name: "kobe", score: 99 },
        { id: 4, name: "allen", score: 95 },
        { id: 5, name: "allen", score: 95 },
        { id: 6, name: "curry", score: 100 },
        { id: 7, name: "james", score: 80 },
        { id: 8, name: "kobe", score: 99 },
        { id: 9, name: "allen", score: 95 },
        { id: 10, name: "curry", score: 100 },
      ]
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
