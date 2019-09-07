<template>
  <div class="docs-table">
    <f-init-docs></f-init-docs>
    <h4>基础表格</h4>
    <p>基础的表格展示用法。</p>
    <f-card :source="basicTableSource">
      <f-table :data-source="dataSource">
        <f-table-column text="日期" field="date" width="150"></f-table-column>
        <f-table-column text="姓名" field="name" width="120"></f-table-column>
        <f-table-column text="年龄" field="age" width="120"></f-table-column>
        <f-table-column text="地址" field="address"></f-table-column>
      </f-table>
    </f-card>
    
    <h4>带斑马纹表格</h4>
    <p>使用带斑马纹的表格，可以更容易区分出不同行的数据。</p>
    <f-card :source="stripedTableSource">
      <f-table :data-source="dataSource" striped>
        <f-table-column text="日期" field="date" width="150"></f-table-column>
        <f-table-column text="姓名" field="name" width="120"></f-table-column>
        <f-table-column text="年龄" field="age" width="120"></f-table-column>
        <f-table-column text="地址" field="address"></f-table-column>
      </f-table>
    </f-card>
    
    <h4>带边框表格</h4>
    <f-card :source="borderedTableSource">
      <f-table :data-source="dataSource" bordered>
        <f-table-column text="日期" field="date" width="150"></f-table-column>
        <f-table-column text="姓名" field="name" width="120"></f-table-column>
        <f-table-column text="年龄" field="age" width="120"></f-table-column>
        <f-table-column text="地址" field="address"></f-table-column>
      </f-table>
    </f-card>
    
    <h4>展示头部序号</h4>
    <f-card :source="numberTableSource">
      <f-table :data-source="dataSource" numberVisible>
        <f-table-column text="日期" field="date" width="150"></f-table-column>
        <f-table-column text="姓名" field="name" width="120"></f-table-column>
        <f-table-column text="年龄" field="age" width="120"></f-table-column>
        <f-table-column text="地址" field="address"></f-table-column>
      </f-table>
    </f-card>
    
    <h4>多选</h4>
    <p>选择多行数据时使用Checkbox</p>
    <f-card :source="multipleTableSource">
      <f-table :data-source="dataSource" :selectedItems.sync="selectedItems" checkable>
        <f-table-column text="日期" field="date" width="150"></f-table-column>
        <f-table-column text="姓名" field="name" width="120"></f-table-column>
        <f-table-column text="年龄" field="age" width="120"></f-table-column>
        <f-table-column text="地址" field="address"></f-table-column>
      </f-table>
    </f-card>
    
    <h4>排序</h4>
    <p>对表格进行排序，可快速查找或对比数据。</p>
    <f-card :source="sortTableSource">
      <f-table :data-source="dataSource" :orderBy.sync="orderBy">
        <f-table-column text="日期" field="date" width="150" :sortable="true"></f-table-column>
        <f-table-column text="姓名" field="name" width="120"></f-table-column>
        <f-table-column text="年龄" field="age" width="120" :sortable="true"></f-table-column>
        <f-table-column text="地址" field="address"></f-table-column>
      </f-table>
    </f-card>
    
    <h4>自定义列模板</h4>
    <p>自定义列的显示内容，可组合其他组件使用。</p>
    <f-card :source="templateTableSource">
      <f-table :data-source="dataSource">
        <f-table-column text="日期" field="date" width="180">
          <template slot-scope="text">
          <span class="table-span">
            <f-icon name="time" class="table-icon" ></f-icon>
            {{text}}
          </span>
        </template>
        </f-table-column>
        <f-table-column text="姓名" field="name" width="120">
          <template slot-scope="text">
            <f-button intent="success">{{text}}</f-button>
          </template>
        </f-table-column>
        <f-table-column text="年龄" field="age" width="120"></f-table-column>
        <template slot-scope="data">
         <f-popover trigger="click" position="left" width="100">
           <f-button>查看</f-button>
           <template slot="content">
             <div>
               <p>
                 姓名: {{data.item.name}}
               </p>
               <p>
                 年龄: {{data.item.age}}
               </p>
             </div>
           </template>
         </f-popover>
        </template>
      </f-table>
    </f-card>
    
    <h4>展开行</h4>
    <p>当行内容过多并且不想显示横向滚动条时，可以使用 Table 展开行功能。</p>
    <f-card :source="expandTableSource">
      <f-table :data-source="dataSource" expandField="description">
        <f-table-column text="日期" field="date" width="150"></f-table-column>
        <f-table-column text="姓名" field="name" width="120"></f-table-column>
        <f-table-column text="年龄" field="age" width="120"></f-table-column>
        <f-table-column text="地址" field="address"></f-table-column>
      </f-table>
    </f-card>
    
    <h4>固定表头</h4>
    <p>纵向内容过多时，可选择固定表头。</p>
    <f-card :source="fixRowTableSource">
      <f-table :data-source="dataSource1" bordered :height="192">
        <f-table-column text="日期" field="date" width="150"></f-table-column>
        <f-table-column text="姓名" field="name" width="120"></f-table-column>
        <f-table-column text="年龄" field="age" width="120"></f-table-column>
        <f-table-column text="地址" field="address"></f-table-column>
      </f-table>
    </f-card>
    
    <h4>空数据</h4>
    <f-card :source="emptyTableSource">
      <f-table bordered>
        <f-table-column text="日期" field="date" width="150"></f-table-column>
        <f-table-column text="姓名" field="name" width="120"></f-table-column>
        <f-table-column text="年龄" field="age" width="120"></f-table-column>
        <f-table-column text="地址" field="address"></f-table-column>
      </f-table>
    </f-card>
    
    <h4>加载中</h4>
    <p>表格请求数据时的加载状态。</p>
    <f-card :source="loadingTableSource">
      <f-table :data-source="dataSource" loading>
        <f-table-column text="日期" field="date" width="150"></f-table-column>
        <f-table-column text="姓名" field="name" width="120"></f-table-column>
        <f-table-column text="年龄" field="age" width="120"></f-table-column>
        <f-table-column text="地址" field="address"></f-table-column>
      </f-table>
    </f-card>
  </div>
</template>

<script>
import InitDocs from "@/docs-components/initDocs";
import ExampleCard from "@/docs-components/exampleCard";
import Table from "@/components/table/table";
import TableColumn from "@/components/table/table-column";
import Icon from '@/components/icon/Icon';
import Button from '@/components/button/button';
import Popover from '@/components/popover/popover';
import { 
  basicTableSource,
  stripedTableSource, 
  borderedTableSource, 
  multipleTableSource, 
  sortTableSource, 
  templateTableSource,
  numberTableSource,
  expandTableSource,
  fixRowTableSource,
  emptyTableSource,
  loadingTableSource,
  } from "../static/table-demos";
export default {
  name: "TableDemos",
  components: {
    "f-init-docs": InitDocs,
    "f-card": ExampleCard,
    "f-table": Table,
    "f-table-column": TableColumn,
    'f-icon': Icon,
    'f-button': Button,
    'f-popover': Popover
  },
  data() {
    return {
      basicTableSource,
      stripedTableSource,
      borderedTableSource,
      multipleTableSource,
      sortTableSource,
      templateTableSource,
      numberTableSource,
      expandTableSource,
      fixRowTableSource,
      emptyTableSource,
      loadingTableSource,
      selectedItems: [],
      dataSource: [
        { id: 1, name: "张三", address: '广东省深圳市南山区1号', age: 19, date: '2019-01-02', description: '我是张三 我是张三 我是张三'},
        { id: 2, name: "李四", address: '广东省深圳市南山区2号', age: 20, date: '2019-01-01', description: '我是李四 我是李四 我是李四'},
        { id: 3, name: "王五", address: '广东省深圳市南山区3号', age: 17, date: '2019-01-03', description: '我是王五 我是王五 我是王五'},
        { id: 4, name: "赵六", address: '广东省深圳市南山区3号', age: 21, date: '2019-01-04', description: '我是赵六 我是赵六 我是赵六'},
      ],
      dataSource1: [
        { id: 1, name: "刘一", address: '广东省深圳市南山区1号', age: 19, date: '2019-01-02'},
        { id: 2, name: "陈二", address: '广东省深圳市南山区2号', age: 29, date: '2019-01-02'},
        { id: 3, name: "张三", address: '广东省深圳市南山区3号', age: 19, date: '2019-01-02'},
        { id: 4, name: "李四", address: '广东省深圳市南山区4号', age: 20, date: '2019-01-01'},
        { id: 5, name: "王五", address: '广东省深圳市南山区5号', age: 17, date: '2019-01-03'},
        { id: 6, name: "赵六", address: '广东省深圳市南山区6号', age: 21, date: '2019-01-04'},
        { id: 7, name: "孙七", address: '广东省深圳市南山区7号', age: 21, date: '2019-01-04'},
        { id: 8, name: "周八", address: '广东省深圳市南山区8号', age: 21, date: '2019-01-04'},
      ],
      orderBy: {
        field: 'age',
        order: 'esc'
      }
    };
  }
};
</script>

<style lang="scss">
.docs-table .table-span{
  display: inline-flex;
  align-items: center;
  >svg {
    fill: #5c7080;
    width: .8em;
    height: .8em;
    margin-right: 5px;
  }
}
</style>


