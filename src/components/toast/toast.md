#### 使用

```js
Vue.use(plugin);
this.$toast('hello')
this.$toast('<h4>world</h4>, {
    enableHtml: true,
    buttonClose: {
        text: 'Close',
        callback: () => {
            console.log('it close')
        }
    }
    autoClose: 1
})
```