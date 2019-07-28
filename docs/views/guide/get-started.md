---
title: 快速上手
sidebarDepth: 2
---

### 快速上手

在 vue 单文件中引入一个 button 组件

```vue
<template>
  <div id="app">
    <f-button>按钮</f-button>
  </div>
</template>

<script>
import {Button} from 'FlyVue';

export default {
  components: {
    'f-button': Button
  }
}
</script>
```
