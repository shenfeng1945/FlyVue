import Vue from 'vue';
import Button from './Button';
import Icon from './Icon';
import ButtonGroup from './button-group';

Vue.component('g-button',Button)
Vue.component('g-icon',Icon)
Vue.component('g-button-group',ButtonGroup)

new Vue({
    el: '#app',
    data: {
        loading: false
    }
})

import chai from 'chai';
/**
 * BDD 行为驱动开发
 * TDD 测试驱动开发
 * Asset 断言
 * 测试用例根据组件的入参和事件来看
 */
 import spies from 'chai-spies';
 chai.use(spies)
const expect = chai.expect;
try {
{
    // 测试按钮含有 icon
    const Constructor = Vue.extend(Button);
    const button = new Constructor({
        propsData: {
            icon: 'settings'
        }
    })
    button.$mount()
    let useElement = button.$el.querySelector('use')
    let href = useElement.getAttribute('xlink:href')
    expect(href).to.equal('#i-settings')
    button.$el.remove()
    button.$destroy()
}
{
    const Constructor = Vue.extend(Button);
    const button = new Constructor({
        propsData: {
            loading: true
        }
    })
    button.$mount()
    let useElement = button.$el.querySelector('use')
    let href = useElement.getAttribute('xlink:href')
    expect(href).to.equal('#i-loading')
    button.$el.remove()
    button.$destroy()
}
{
   // 获取节点样式时，要挂载在页面上才能获取样式
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button);
    const button = new Constructor({
        propsData: {
            iconPosition: 'right',
            icon: 'settings'
        }
    })
    button.$mount(div)
    let svgElement = button.$el.querySelector('svg')
    let {order} = window.getComputedStyle(svgElement);
    // css的属性值都是字符串
    expect(order).to.equal('2')
    button.$el.remove()
    button.$destroy()
}
{
    const Constructor = Vue.extend(Button);
    const gButton = new Constructor({
        propsData: {
            loading: true
        }
    })
    gButton.$mount()
    let spy = chai.spy(function(){})
    // 如何期望一个函数被执行，函数里面写'expect(1).to.equal(1)'是错误的写法
    gButton.$on('click',spy)
    let button = gButton.$el;
    button.click()
    // 期望spy里的函数被调用了
    expect(spy).to.have.been.called()
    gButton.$el.remove()
    gButton.$destroy()
}
} catch (error) {
    window.errors = [error]
} finally {
   window.errors && window.errors.forEach((error) => {
       console.error(error);
   }) 
}