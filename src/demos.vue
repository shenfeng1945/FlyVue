<template>
  <div id="app">
    <f-table
      :columns="columns"
      :dataSource="dataSource"
      bordered
      :selected-items.sync="selected"
    ></f-table>
    {{selected}}
    <f-pager
      :total-page="10"
      :current-page.sync="currentPage"
      onChange="onChange($event)"
    ></f-pager>
  </div>
</template>
<script>
import Nav from "./nav/nav";
import NavItem from "./nav/nav-item";
import SubNav from "./nav/sub-nav";
import Button from "./button/button";
import Pager from "./pager/pager";
import Table from "./table/table";
export default {
  name: "Demos",
  components: {
    "f-nav": Nav,
    "f-nav-item": NavItem,
    "f-sub-nav": SubNav,
    "f-button": Button,
    "f-pager": Pager,
    "f-table": Table
  },
  data() {
    return {
      selected: [],
      currentPage: 1,
      columns: [
        { text: "姓名", field: "name" },
        { text: "分数", field: "score" }
      ],
      dataSource: [
        { id: 1, name: "curry", score: 100 },
        { id: 2, name: "james", score: 80 },
        { id: 3, name: "kobe", score: 99 },
        { id: 4, name: "allen", score: 95 }
      ]
    };
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
</style>
