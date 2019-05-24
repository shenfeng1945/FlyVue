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