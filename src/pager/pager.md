#### 使用示例

```vue
 <f-pager background :total-page="10" :current-page.sync="currentPage" :onChange="onChange"></f-pager>
 
 data(){
     return {
         currentPage: 1
     }
 }
 onChange(val){
   console.log('currentPage:' + val)
 }
```