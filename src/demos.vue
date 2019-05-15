<template>
  <div id="app">
    <f-table
      :columns="columns"
      :dataSource="dataSource"
      bordered
      :selected-items.sync="selected"
      :order-by.sync="orderBy"
      @update:orderBy="updateDataSource"
      :loading="loading"
      :height="400"
      :expandField="expandField"
      :checkable="true"
    >
      <template slot-scope="data">
        <button @click="edit(data.item)">编辑</button>
        <button @click="check(data.item)">查看</button>
      </template>
    </f-table>
    {{ selected }}
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
        { text: "姓名", field: "name", width: 200 },
        { text: "分数", field: "score"}
      ],
      dataSource: [
        { id: 1, name: "curry", score: 100, description: 'xxxx'},
        { id: 2, name: "james", score: 80 , description: 'yyyy'},
        { id: 3, name: "kobe", score: 99 },
        { id: 4, name: "allen", score: 95 },
        { id: 5, name: "allen", score: 95 },
        { id: 6, name: "curry", score: 100 },
        { id: 7, name: "james", score: 80 },
        { id: 8, name: "kobe", score: 99 },
        { id: 9, name: "allen", score: 95 },
        { id: 10, name: "curry", score: 100 },
        { id: 11, name: "james", score: 80 },
        { id: 12, name: "kobe", score: 99 },
        { id: 13, name: "allen", score: 95 },
        { id: 14, name: "curry", score: 100 },
        { id: 15, name: "james", score: 80 },
        { id: 16, name: "kobe", score: 99 },
      ],
      orderBy: {
        name: true,
        score: "esc"
      },
      loading: false,
      expandField: 'description'
    };
  },
  methods: {
    updateDataSource(){
      this.loading = true;
      setTimeout(() => {
        this.dataSource = this.dataSource.sort((a,b) => a.score - b.score);
        this.loading = false
      }, 1000)
    },
    edit(id){
      console.log(id)
    },
    check(id){
      console.log(id)
    }
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
