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