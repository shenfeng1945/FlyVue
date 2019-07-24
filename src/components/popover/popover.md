#### 可优化功能
1. popover弹出内容支持内部关闭
2. popover弹窗内容支持12个方向

#### 使用示例

```js
<f-popover trigger="click" position="top" :only-target="true">
      <f-button>Popover target</f-button>
      <template slot="content">
        <div>
          <h3>Confirm deletion</h3>
          <p>Are you sure you want to delete these items? You won't be able to recover them.</p>
        </div>
      </template>
</f-popover>
```