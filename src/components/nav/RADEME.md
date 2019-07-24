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

####### 使用实例

```vue
<f-nav :selected.sync="selected" direction="vertical">
      <f-nav-item name="sports">体育</f-nav-item>
      <f-sub-nav name="news">
        <template slot="title">新闻</template>
        <f-nav-item name="new1">网易新闻</f-nav-item>
        <f-nav-item name="new2">腾讯新闻</f-nav-item>
        <f-sub-nav name="toutiao">
          <template slot="title">今日头条</template>
          <f-nav-item name="toutiao1">xxxx</f-nav-item>
          <f-nav-item name="toutiao2">yyyy</f-nav-item>
          <f-nav-item name="toutiao3">zzzz</f-nav-item>
        </f-sub-nav>
      </f-sub-nav>
      <f-nav-item name="finance" disabled>财经</f-nav-item>
 </f-nav>
```