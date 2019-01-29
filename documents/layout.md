#### Layout布局
##### API
```
// 上中下布局
<g-layout>
  <g-header></g-header>
  <g-content></g-content>
  <g-footer></g-footer>
</g-layout>
// 上中下，中间左右布局
// 如何判断中间是左右布局，在mounted时，layout获取子组件，遍历每个name是否为sider
<g-layout>
  <g-header></g-header>
  <g-layout>
    <g-sider></g-sider>
    <g-content></g-content>
  </g-layout>
  <g-footer></g-footer>
</g-layout>
```