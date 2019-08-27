<template>
  <div class="docs-table">
    <f-init-docs></f-init-docs>
    <h4>基础表格</h4>
    <p>基础的表格展示用法。</p>
    <f-card :source="basicTableSource">
      <f-table :data-source="dataSource">
        <!-- <template slot-scope="data">
          <button>查看{{data.item.name}}</button>
        </template> -->
        <f-table-column text="Name" field="name"></f-table-column>
        <f-table-column text="Date" field="date"></f-table-column>
        <f-table-column text="Province" field="province"></f-table-column>
        <f-table-column text="Age" field="age"></f-table-column>
      </f-table>
    </f-card>
  </div>
</template>

<script>
import InitDocs from "@/docs-components/initDocs";
import ExampleCard from "@/docs-components/exampleCard";
import Table from "@/components/table/table";
import TableColumn from "@/components/table/table-column";
import { basicTableSource } from "../static/table-demos";
export default {
  name: "TableDemos",
  components: {
    "f-init-docs": InitDocs,
    "f-card": ExampleCard,
    "f-table": Table,
    "f-table-column": TableColumn
  },
  data() {
    return {
      basicTableSource,
      dataSource: [
        { id: 1, name: "test1", province: 'Guangdong', age: 18, date: '2019-01-10'},
        { id: 2, name: "test2", province: 'Hubei' , age: 28, date: '2018-09-01'},
        { id: 3, name: "test3", province: 'Beijin', age: 24, date: '2019-05-05'},
        { id: 4, name: "test4", province: 'Shanghai', age: 33, date: '2017-11-11'},
      ],
    };
  }
};
</script>

<style lang="scss">
tr,td,th {
  border: none;
}
</style>


