#### 设计思路

#### 难点解决
1. 当存在`sub-nav`时，`nav`子节点下无法获取`sub-nav`下的`nav-item`，此时需要用依赖注入解决跨级调用。
```
父组件注入root
  provide(){
      return {
          root: this
      }
  }
所有的后代代组件，可以注入它
inject: ['root']
```

2. 做下拉框弹出动画时，如果给类`.f-sub-nav-popover`添加`overflow: hidden`属性，第一层`SubNav`能正常展示，但第二层的`SubNav`便会隐藏，用JS来动态设置可以解决。