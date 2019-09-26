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

在 main.js 中全局引入样式：

```js
import 'fly-ui-vue/dist/flyVue.css';
```

在 vue 单文件中引入一个 button 组件

```vue
<template>
  <div id="app">
    <f-button>按钮</f-button>
  </div>
</template>

<script>
import { Button } from 'fly-ui-vue';

export default {
  components: {
    'f-button': Button
  }
}
</script>
```

<!-- #### 方式三: 通过CDN引入 -->

