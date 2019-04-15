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