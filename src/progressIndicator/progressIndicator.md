#### 使用示例:

```vue
<f-progress-indicator @update:end="progressEnd"></f-progress-indicator>

methods: {
  progressEnd(){
      console.log('end')
  }
}
```

#### props

color String 滚动条颜色 '137cbd'

#### 事件

update:end Function 页面滚动底部触发事件 null

