/**
 * 基础表格
 */
export const basicTableSource = {
  desc: '当<code>f-table</code>元素中注入<code>data-source</code>对象数组后,在<code>f-table-column</code>中用<code>field</code>属性来对应对象中的键名即可填入数据，用<code>text</code>属性来定义表格的列名。可以使用<code>width</code>属性来定义列宽。',
  code: `
<f-table :data-source="dataSource">
  <f-table-column text="日期" field="date" width="150"></f-table-column>
  <f-table-column text="姓名" field="name" width="120"></f-table-column>
  <f-table-column text="年龄" field="age" width="120"></f-table-column>
  <f-table-column text="地址" field="address"></f-table-column>
</f-table>
  
<script>
 export default {
   data(){
     return {
       dataSource: [
        { id: 1, name: "张三", address: '广东省深圳市南山区1号', age: 19, date: '2019-01-02'},
        { id: 2, name: "李四", address: '广东省深圳市南山区2号', age: 20, date: '2019-01-01'},
        { id: 3, name: "王五", address: '广东省深圳市南山区3号', age: 17, date: '2019-01-03'},
        { id: 4, name: "赵六", address: '广东省深圳市南山区3号', age: 21, date: '2019-01-04'},
       ]
     }
   }
 }
<\/script>
  `
}

/**
 * 斑马纹表格
 */
export const stripedTableSource = {
  desc: '<code>striped</code>属性可以创建带斑马纹的表格。它接受一个<code>Boolean</code>, 默认为<code>false</code>，设置为<code>true</code>即为启用。',
  code: `
<f-table :data-source="dataSource" striped>
  <f-table-column text="日期" field="date" width="150"></f-table-column>
  <f-table-column text="姓名" field="name" width="120"></f-table-column>
  <f-table-column text="年龄" field="age" width="120"></f-table-column>
  <f-table-column text="地址" field="address"></f-table-column>
</f-table>
  
<script>
 export default {
   data(){
     return {
       dataSource: [
        { id: 1, name: "张三", address: '广东省深圳市南山区1号', age: 19, date: '2019-01-02'},
        { id: 2, name: "李四", address: '广东省深圳市南山区2号', age: 20, date: '2019-01-01'},
        { id: 3, name: "王五", address: '广东省深圳市南山区3号', age: 17, date: '2019-01-03'},
        { id: 4, name: "赵六", address: '广东省深圳市南山区3号', age: 21, date: '2019-01-04'},
       ]
     }
   }
 }
<\/script> 
  `
}

/**
 * 带边框表格
 */
export const borderedTableSource = {
  desc: '默认情况下，Table 组件是不具有竖直方向的边框的，如果需要，可以使用 <code>bordered</code>属性，它接受一个 <code>Boolean</code>，设置为 <code>true</code> 即可启用。',
  code: `
<f-table :data-source="dataSource" bordered>
  <f-table-column text="日期" field="date" width="150"></f-table-column>
  <f-table-column text="姓名" field="name" width="120"></f-table-column>
  <f-table-column text="年龄" field="age" width="120"></f-table-column>
  <f-table-column text="地址" field="address"></f-table-column>
</f-table>
  
<script>
 export default {
   data(){
     return {
       dataSource: [
        { id: 1, name: "张三", address: '广东省深圳市南山区1号', age: 19, date: '2019-01-02'},
        { id: 2, name: "李四", address: '广东省深圳市南山区2号', age: 20, date: '2019-01-01'},
        { id: 3, name: "王五", address: '广东省深圳市南山区3号', age: 17, date: '2019-01-03'},
        { id: 4, name: "赵六", address: '广东省深圳市南山区3号', age: 21, date: '2019-01-04'},
       ]
     }
   }
 }
<\/script>  
  `
}

/**
 * 多选
 */
export const multipleTableSource = {
  desc: '默认，Table组件不支持多选，如有需要，可以使用<code>checkable</code>属性开启多选功能，还需额外传入被选中的选项<code>selectedItems</code>，默认为空数组。',
  code: `
<f-table :data-source="dataSource" :selectedItems.sync="selectedItems" checkable>
  <f-table-column text="日期" field="date" width="150"></f-table-column>
  <f-table-column text="姓名" field="name" width="120"></f-table-column>
  <f-table-column text="年龄" field="age" width="120"></f-table-column>
  <f-table-column text="地址" field="address"></f-table-column>
</f-table>
  
<script>
 export default {
   data(){
     return {
       selectedItems: [],
       dataSource: [
        { id: 1, name: "张三", address: '广东省深圳市南山区1号', age: 19, date: '2019-01-02'},
        { id: 2, name: "李四", address: '广东省深圳市南山区2号', age: 20, date: '2019-01-01'},
        { id: 3, name: "王五", address: '广东省深圳市南山区3号', age: 17, date: '2019-01-03'},
        { id: 4, name: "赵六", address: '广东省深圳市南山区3号', age: 21, date: '2019-01-04'},
       ]
     }
   }
 }
<\/script>   
  `
}

/**
 * 排序
 */
export const sortTableSource = {
  desc: '在<code>f-table-column</code>组件中设置<code>sortable</code>属性即可实现以该列为基准的排序，接受一个<code>Boolean</code>，默认为<code>false</code>。可以通过Table的<code>orderBy</code>属性设置默认的排序列和排序顺序，暂不支持后端排序。',
  code: `
<f-table :data-source="dataSource" :orderBy.sync="orderBy">
  <f-table-column text="日期" field="date" width="150" :sortable="true"></f-table-column>
  <f-table-column text="姓名" field="name" width="120"></f-table-column>
  <f-table-column text="年龄" field="age" width="120" :sortable="true"></f-table-column>
  <f-table-column text="地址" field="address"></f-table-column>
</f-table>
  
<script>
 export default {
   data(){
     return {
       dataSource: [
        { id: 1, name: "张三", address: '广东省深圳市南山区1号', age: 19, date: '2019-01-02'},
        { id: 2, name: "李四", address: '广东省深圳市南山区2号', age: 20, date: '2019-01-01'},
        { id: 3, name: "王五", address: '广东省深圳市南山区3号', age: 17, date: '2019-01-03'},
        { id: 4, name: "赵六", address: '广东省深圳市南山区3号', age: 21, date: '2019-01-04'},
       ],
       orderBy: {
         field: 'age',
         order: 'esc'
       }
     }
   }
 }
<\/script>    
  `
}

/**
 * 自定义列模板
 */
export const templateTableSource = {
  desc: '通过<code>Scoped slot</code>可以获取该列的数据，用法参考 demo。',
  code: `
<f-table :data-source="dataSource">
  <f-table-column text="日期" field="date" width="180">
    <template slot-scope="text">
      <span class="table-span">
        <f-icon name="time" class="table-icon"></f-icon>
        {{text}}
      </span>
    </template>
  </f-table-column>
  <f-table-column text="姓名" field="name" width="120">
    <template slot-scope="text">
      <f-button intent="success">{{text}}</f-button>
    </template>
  </f-table-column>
  <f-table-column text="年龄" field="age" width="120" :sortable="true"></f-table-column>
  <template slot-scope="data">
    <f-popover trigger="click" position="left" width="100">
      <f-button>查看</f-button>
      <template slot="content">
        <div>
          <p>姓名: {{data.item.name}}</p>
          <p>年龄: {{data.item.age}}</p>
        </div>
      </template>
    </f-popover>
  </template>
</f-table>
  
<script>
 export default {
   data(){
     return {
       dataSource: [
        { id: 1, name: "张三", age: 19, date: '2019-01-02'},
        { id: 2, name: "李四", age: 20, date: '2019-01-01'},
        { id: 3, name: "王五", age: 17, date: '2019-01-03'},
        { id: 4, name: "赵六", age: 21, date: '2019-01-04'},
       ]
     }
   }
 }
<\/script>     
  `
}

/**
 * 展开行
 */
export const expandTableSource = {
  desc: 'Table组件可以使用 <code>expandField</code> 描述将要展开的选项，接受一个 <code>String</code>，对应 <code>data-source</code>中的key。',
  code: `
<f-table :data-source="dataSource" expandField="description">
  <f-table-column text="日期" field="date" width="150"></f-table-column>
  <f-table-column text="姓名" field="name" width="120"></f-table-column>
  <f-table-column text="年龄" field="age" width="120"></f-table-column>
  <f-table-column text="地址" field="address"></f-table-column>
</f-table>
  
<script>
 export default {
   data(){
     return {
       dataSource: [
        { id: 1, name: "张三", address: '广东省深圳市南山区1号', age: 19, date: '2019-01-02', description: '我是张三 我是张三 我是张三'},
        { id: 2, name: "李四", address: '广东省深圳市南山区2号', age: 20, date: '2019-01-01', description: '我是李四 我是李四 我是李四'},
        { id: 3, name: "王五", address: '广东省深圳市南山区3号', age: 17, date: '2019-01-03', description: '我是王五 我是王五 我是王五'},
        { id: 4, name: "赵六", address: '广东省深圳市南山区3号', age: 21, date: '2019-01-04', description: '我是赵六 我是赵六 我是赵六'},
       ]
     }
   }
 }
<\/script> 
  `
}

/**
 * 头部序号展示
 */
export const numberTableSource = {
  desc: '设置 <code>numberVisible</code>属性控制表格是否展示头部序号，接受一个<code>Boolean</code>，默认为<code>false</code>。',
  code: `
<f-table :data-source="dataSource" numberVisible>
  <f-table-column text="日期" field="date" width="150"></f-table-column>
  <f-table-column text="姓名" field="name" width="120"></f-table-column>
  <f-table-column text="年龄" field="age" width="120"></f-table-column>
  <f-table-column text="地址" field="address"></f-table-column>
</f-table>
  
<script>
 export default {
   data(){
     return {
       dataSource: [
        { id: 1, name: "张三", address: '广东省深圳市南山区1号', age: 19, date: '2019-01-02'},
        { id: 2, name: "李四", address: '广东省深圳市南山区2号', age: 20, date: '2019-01-01'},
        { id: 3, name: "王五", address: '广东省深圳市南山区3号', age: 17, date: '2019-01-03'},
        { id: 4, name: "赵六", address: '广东省深圳市南山区3号', age: 21, date: '2019-01-04'},
       ]
     }
   }
 }
<\/script> 
  `
}

/**
 * 固定表头
 */
export const fixRowTableSource = {
  desc: '只要在 <code>f-table</code> 元素中定义了 <code>height</code> 属性，即可实现固定表头的表格，而不需要额外的代码。',
  code: `
<f-table :data-source="dataSource" bordered :height="192">
  <f-table-column text="日期" field="date" width="150"></f-table-column>
  <f-table-column text="姓名" field="name" width="120"></f-table-column>
  <f-table-column text="年龄" field="age" width="120"></f-table-column>
  <f-table-column text="地址" field="address"></f-table-column>
</f-table>
  
<script>
 export default {
   data(){
     return {
       dataSource: [
        { id: 1, name: "刘一", address: '广东省深圳市南山区1号', age: 19, date: '2019-01-02'},
        { id: 2, name: "陈二", address: '广东省深圳市南山区2号', age: 29, date: '2019-01-02'},
        { id: 3, name: "张三", address: '广东省深圳市南山区3号', age: 19, date: '2019-01-02'},
        { id: 4, name: "李四", address: '广东省深圳市南山区4号', age: 20, date: '2019-01-01'},
        { id: 5, name: "王五", address: '广东省深圳市南山区5号', age: 17, date: '2019-01-03'},
        { id: 6, name: "赵六", address: '广东省深圳市南山区6号', age: 21, date: '2019-01-04'},
        { id: 7, name: "孙七", address: '广东省深圳市南山区7号', age: 21, date: '2019-01-04'},
        { id: 8, name: "周八", address: '广东省深圳市南山区8号', age: 21, date: '2019-01-04'},
       ]
     }
   }
 }
<\/script>  
  `
}

/**
 * 空数据
 */
export const emptyTableSource = {
  desc: 'Table 组件的<code>data-source</code>属性在不接受属性值时，默认为空数组。',
  code: `
<f-table bordered>
  <f-table-column text="日期" field="date" width="150"></f-table-column>
  <f-table-column text="姓名" field="name" width="120"></f-table-column>
  <f-table-column text="年龄" field="age" width="120"></f-table-column>
  <f-table-column text="地址" field="address"></f-table-column>
</f-table> 
  `
}

/**
 * 加载中
 */
export const loadingTableSource = {
  desc: '<code>loading</code>属性可以表示加载中的表格。它接受一个<code>Boolean</code>, 默认为<code>false</code>，设置为<code>true</code>即为启用。',
  code: `
<f-table :data-source="dataSource" loading>
  <f-table-column text="日期" field="date" width="150"></f-table-column>
  <f-table-column text="姓名" field="name" width="120"></f-table-column>
  <f-table-column text="年龄" field="age" width="120"></f-table-column>
  <f-table-column text="地址" field="address"></f-table-column>
</f-table>
  
<script>
 export default {
   data(){
     return {
       dataSource: [
        { id: 1, name: "张三", address: '广东省深圳市南山区1号', age: 19, date: '2019-01-02'},
        { id: 2, name: "李四", address: '广东省深圳市南山区2号', age: 20, date: '2019-01-01'},
        { id: 3, name: "王五", address: '广东省深圳市南山区3号', age: 17, date: '2019-01-03'},
        { id: 4, name: "赵六", address: '广东省深圳市南山区3号', age: 21, date: '2019-01-04'},
       ]
     }
   }
 }
<\/script> 
  
  `
}
