<template xmlns="http://www.w3.org/1999/XSL/Transform">
  <div id="app">
    <f-table :data-source="dataSource" 
             :numberVisible="false" 
             :selectedItems.sync="selectedItems"
             :checkable="false"
             expandField="description"
             :orderBy.sync="orderBy"
             >
      <template slot-scope="data">
         <f-popover trigger="click" :only-target="true" position="left">
           <f-button>查看</f-button>
           <template slot="content">
             <div>
               <p>
                 姓名: {{data.item.name}}
               </p>
               <p>
                 分数: {{data.item.score}}
               </p>
             </div>
           </template>
         </f-popover>
      </template>
      <f-table-column text="姓名" field="name" width="200" :sortable="true">
        <template slot-scope="text">
          <span>{{text}}</span>
        </template>
      </f-table-column>
      <f-table-column text="分数" field="score" :sortable="true"></f-table-column>
    </f-table>
    <f-pager background :total-page="10" :current-page.sync="currentPage"></f-pager>
  </div>
</template>
<script>
import Input from "./input/Input";
import Button from "./button/button";
import Icon from "./icon/Icon";
import Pager from "./pager/pager";
import Table from "./table/table";
import TableColumn from "./table/table-column";
import Popover from "./popover/popover";
import Checkbox from "./formControls/checkbox";

export default {
  name: "Demos",
  components: {
    "f-input": Input,
    "f-icon": Icon,
    "f-button": Button,
    "f-pager": Pager,
    "f-table": Table,
    "f-table-column": TableColumn,
    "f-popover": Popover,
    "f-checkbox": Checkbox
  },
  data() {
    return {
      currentPage: 1,
      dataSource: [
        { id: 1, name: "张三", score: 100, description: '我叫张三，今天考试得了100分' },
        { id: 2, name: "李四", score: 80, description: '我叫李四，今天考试得了80分' },
        { id: 3, name: "王五", score: 99 },
        { id: 4, name: "赵六", score: 30 },
        { id: 5, name: "冯七", score: 59 },
        { id: 6, name: "张三1", score: 78 },
        { id: 7, name: "李四1", score: 80 },
        { id: 8, name: "王五1", score: 99 },
        { id: 9, name: "赵六1", score: 100 },
        { id: 10, name: "冯七1", score: 60 },
      ],
      selectedItems: [],
      orderBy: {field: 'score', order: 'esc'}
    };
  },
  created() {},
  methods: {
    show(val){
      console.log(val)
    },
    edit(val){
      console.log(val)
    }
  }
};
</script>
<style lang="scss">
html,
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.box {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  height: 100%;
}
</style>
