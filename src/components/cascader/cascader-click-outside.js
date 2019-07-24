// 写成数组的形式，是为了防止有多个cascader组件时，会有多个监听器。直接全局监听一个就好了.
let onClickDocument = (e) => {
    results.forEach(item => {
        if (item.el === e.target || item.el.contains(e.target)) {
            return
        }
        item.callbacks()
    })
}
let results = [];
document.addEventListener('click', onClickDocument)
export default {
    bind: function (el, binding, vnode) {
        results.push({ el, callbacks: binding.value })
    }
}

let removeEventListener = () => {
    document.removeEventListener('click', onClickDocument)
}
export { removeEventListener }