#### 设计思路
利用单向数据流，控制最外面的`selected`,当`selected`更新时，会重新渲染子组件，使用Vue自带的过渡动画，配合隐藏和显示来达到轮播效果。

#### 使用示例
```js
<f-slides :selected.sync="selected" :autoPlay="false" trigger="click" height="300px" direction="vertical">
    <f-slides-item name="1">
      <div class="box box1">hello</div>
    </f-slides-item>
    <f-slides-item name="2">
      <div class="box box2">hello</div>
    </f-slides-item>
    <f-slides-item name="3">
      <div class="box box3">allen</div>
    </f-slides-item>
</f-slides>

data(){
    return {
        selected: '3'
    }
}
```
