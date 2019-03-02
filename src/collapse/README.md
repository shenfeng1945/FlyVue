实现思路: 
![](https://i.loli.net/2019/03/03/5c7aad7099e85.png)

- 组件mounted阶段: 父组件将Selected数组`emit`给子组件,子组件根据name来对应展示。
- 交互阶段: 点击子组件时会触发`Add/Remove`各自将当前name传给父组件。父组件更新Selected，并`emit`最新的Selected给子组件，同时往外通知Selected的值改的了，UI可以更新了。
- 使用 `:selected.sync=Selected` 外部监听update事件，并显示最新值。