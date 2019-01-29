const expect = chai.expect;
import Vue from 'vue'
import Col from '../src/col'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Col', () => {
    const Constructor = Vue.extend(Col);
    it('存在', () => {
        expect(Col).to.exist;
    })
    it('接收 span 属性', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const vm = new Constructor({
            propsData: {
                span: 8
            }
        }).$mount(div)
        const colElement = vm.$el;
        expect(colElement.classList.contains('col-8')).to.equal(true)
        div.remove()
        vm.$destroy()
    })
    it('接收 offset 属性', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const vm = new Constructor({
            propsData: {
                offset: 1
            }
        }).$mount(div)
        const colElement = vm.$el;
        expect(colElement.classList.contains('offset-1')).to.equal(true)
        div.remove()
        vm.$destroy()
    })
    it('接收 ipad 属性', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const vm = new Constructor({
            propsData: {
              ipad: {span:1,offset:2}
            }
        }).$mount(div)
        const colElement = vm.$el;
        expect(colElement.classList.contains('offset-ipad-2')).to.equal(true)
        expect(colElement.classList.contains('col-ipad-1')).to.equal(true)
        div.remove()
        vm.$destroy()
    })
    it('接收 pc 属性', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const vm = new Constructor({
            propsData: {
              pc: {span:1,offset:2}
            }
        }).$mount(div)
        const colElement = vm.$el;
        expect(colElement.classList.contains('offset-pc-2')).to.equal(true)
        expect(colElement.classList.contains('col-pc-1')).to.equal(true)
        div.remove()
        vm.$destroy()
    })
    it('接收 narrow-pc 属性', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const vm = new Constructor({
            propsData: {
              narrowPc: {span:1,offset:2}
            }
        }).$mount(div)
        const colElement = vm.$el;
        expect(colElement.classList.contains('offset-narrow-pc-2')).to.equal(true)
        expect(colElement.classList.contains('col-narrow-pc-1')).to.equal(true)
        div.remove()
        vm.$destroy()
    })
    it('接收 wide-pc 属性', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const vm = new Constructor({
            propsData: {
              widePc: {span:1,offset:2}
            }
        }).$mount(div)
        const colElement = vm.$el;
        expect(colElement.classList.contains('offset-wide-pc-2')).to.equal(true)
        expect(colElement.classList.contains('col-wide-pc-1')).to.equal(true)
        div.remove()
        vm.$destroy()
    })
})