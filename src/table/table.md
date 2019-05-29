#### 插槽slots与子组件children的关系?
组件里如果写了<slot></slot>，那么组件接受的内容可以通过children获取内容，若没写，则只能通过slots拿到内容。
```js
// demo.vue
<f-table>
 <f-table-column></f-table-column>
 <f-table-column></f-table-column>
</f-table>


// table.vue
<template>
 <slot></slot>
</template>
<script>
  export default {
      mounted(){
          console.log(this.$children)
      }
  }
</script>
```

#### table使用自定义标签
 ```js
 获取一个子组件里的内容: 当前组件里通过$slots.default获取到vnodes列表
<vnodes :vnodes="virtual dom"></vnodes>


components: {
    'vnodes': {
        functional: true,
        render: (h, context) => context.props.vnodes
    }
}
```

#### 如果table有一万项数据，如何保证不卡。
虽然有一万项，我们可以先展示一百项，展示用户能看到的数据即可。


#### 示例

```js
<f-table  :data-source="dataSource" :height="300" :striped="true" :bordered="true">
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
    { id: 11, name: "kobe", score: 99 },
    { id: 12, name: "allen", score: 95 },
    { id: 13, name: "allen", score: 95 },
    { id: 14, name: "curry", score: 100 },
    { id: 15, name: "james", score: 80 },
    { id: 16, name: "kobe", score: 99 },
    { id: 17, name: "allen", score: 95 },
    { id: 18, name: "curry", score: 100 },
  ]
```
