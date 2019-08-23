/**
 * 基础用法
 */
export const basicPagerSource = {
  desc: '通过设置 <code>totalPage</code>属性表示总条目数。',
  code: `
<template>
  <p>页数较少时的效果</p>
  <f-pager :total-page="4" :current-page.sync="currentPage1" :onChange="onChange"></f-pager>
  <p>大于5页的效果</p>
  <f-pager :total-page="10" :current-page.sync="currentPage2" :onChange="onChange"></f-pager>
</template> 

<script>
 export default {
   data(){
     return {
      currentPage1: 1,
      currentPage2: 1
     }
   },
   methods: {
     onChange(val){
       console.log(val)
     }
   }
 }
<\/script>
  `
}

/**
 * 带有背景色的分页
 */
export const bgPagerSource = {
  desc: '通过设置<code>background</code>属性控制分页器是否有背景',
  code: `
<f-pager background :total-page="10" :current-page.sync="currentPage"></f-pager>
  
<script>
 export default {
   data(){
     return {
       currentPage: 5
     }
   }
 }
<\/script>
  `
}