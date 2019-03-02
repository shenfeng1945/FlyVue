const expect = chai.expect;
import Vue from 'vue'
import Popover from '../src/popover/popover'

Vue.config.productionTip = false
Vue.config.devtools = false

// describe,it来自mocha，挂载window上
describe('Popover', () => {
    // 行为驱动测试
    // 描述Button的行为
    it('存在.', () => {
        expect(Popover).to.be.ok
    })

    it('可以设置position', () => {
        const Constructor = Vue.extend(Popover)
        const vm = new Constructor({
            propsData: {
                position: 'left'
            }
        }).$mount()
        console.log(vm.$el)
    })
})