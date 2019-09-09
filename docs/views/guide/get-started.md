---
title: 快速上手
sidebarDepth: 2
---

### 快速上手

本节将介绍如何在项目中使用FlyVue。

#### 引入组件

你可以引入整个组件，或是根据需要仅引入部分组件。

#### 方式一: 完整引入

在 main.js 中写入以下内容:

```js
import Vue from 'vue';
import FlyVue from 'fly-ui-vue';
import 'fly-ui-vue/dist/flyVue.css';
import App from './App.vue';

Vue.use(FlyVue);

new Vue({
  el: '#app',
  render: h => h(App)
});
```

#### 方式二: 按需引入(推荐)

[babel-plugin-import](https://github.com/ant-design/babel-plugin-import) 是一款 babel 插件,它会在编译过程中将 import 的写法自动转换为按需引入的方式


```md
# 安装插件
yarn add -D babel-plugin-import
```

在 `.babelrc` 中添加配置

```js
{
  "plugins": [
    ["import", {
      "libraryName": "vant",
      "libraryDirectory": "es",
      "style": true
    }]
  ]
}
```

在 vue 单文件中引入一个 button 组件

```vue
<template>
  <div id="app">
    <f-button>按钮</f-button>
  </div>
</template>

<script>
import { Button } from 'FlyVue';

export default {
  components: {
    'f-button': Button
  }
}
</script>
```

<!-- #### 方式三: 通过CDN引入 -->

