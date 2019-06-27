<template xmlns="http://www.w3.org/1999/XSL/Transform">
  <div id="app">
      <f-table :data-source="dataSource"></f-table>
     <f-pager background :total-page="10" :current-page.sync="currentPage"></f-pager>
  </div>
</template>
<script>
import Input from "./input/Input";
import Button from "./button/button";
import Icon from "./icon/Icon";
import Pager from "./pager/pager";
import Table from "./table1/table";
// import TableColumn from "./table/table-column";

export default {
  name: "Demos",
  components: {
    "f-input": Input,
    "f-icon": Icon,
    "f-button": Button,
    "f-pager": Pager,
    "f-table": Table,
    // "f-table-column": TableColumn
  },
  data() {
    return {
      currentPage: 1,
      dataSource: [
        {id: 1, name: 'curry', score: 100},
        {id: 2, name: 'james', score: 80}
      ],
      columns: [
        {text: '姓名', field: 'name'},
        {text: '分数', field: 'score'},
      ]
    };
  },
  created() {
  },
  methods: {
  }
};
</script>
<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.box{
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  height: 100%;
}
.box1{
  color: white;
  background: red;
}
.box2{
  color: white;
  background: yellow;
}
.box3{
  background: blue;
  color: white;
}

</style>
