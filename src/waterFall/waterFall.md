#### 使用示例

```vue
<f-water-fall :imageLists="data" @scrollReachBottom="updateData">
     <template slot-scope="item">
         <img :src="item.item.src" alt="">
         <div class="description">{{item.item.name}}</div>
     </template>
</f-water-fall>

<script>
  export default {
      data(){
          return {
              data: []
          }
      },
      created(){
          this.data = Array.from({length: 10}, () => {
             const path = Math.ceil(Math.random() * 18);
             return {
               src: require(`./waterFall/images/${path}.jpeg`),
               name: `图片${path}`
             }
          });
      },
      methods: {
          updateData(){
            setTimeout(() => {
               this.data = this.data.concat(Array.from({length: 10}, () => {     
                  const path = Math.ceil(Math.random() * 18);
                  return {
                     src: require(`./waterFall/images/${path}.jpeg`),
                     name: `图片${path}`
                  }
              }))
            }, 500)
          }
      }
  }
</script>
<style>
.description {
    display: block;
    padding: 0 16px;
    margin: 10px 0;
    line-height: 1.35em;
    overflow: hidden;
    word-wrap: break-word;
}
</style>
```

#### Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值
|---|---|---|---|---|
| imageLists | 图片列表 | Array | - | [] |
| gapHeight | 图片与图片之间高度 | Number | - | 20 |
| gapWidth | 图片与图片之间宽距 | Number | - | 20 |
| pinWidth | 图片的宽度 | Number | - | 216 |
| threshold | 内容底部距小于视口底部的距离时 | Number | - | 100 |

#### Events 

| 方法名 | 说明 | 参数 |
| --- | --- | --- |
| scrollReachBottom | 滚动条距视口底部 threshold 距离时，触发 | - |


