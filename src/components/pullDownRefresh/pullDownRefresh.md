### 设计思路

mounted阶段，给window监听touchstart,touchmove和touchend事件，将计算的手指滑动距离变为refresh的高度。

### 使用示例


```vue
<f-pull-down-refresh @onRefresh="onRefresh">
      <ul class="list">
        <li v-for="i of count" :key="i">{{i}}</li>
      </ul>
</f-pull-down-refresh>

data(){
  return {
    count: 8
  }
}

onRefresh(cb){
  setTimeout(() => {
     cb()
  }, 500)
}

.list {
  padding: 0;
  margin: 0;
  height: 300px;
  list-style: none;
  li {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    background: #e8f3fe;
    margin: 10px;
    color: #7dbcfc;
  }
}
```