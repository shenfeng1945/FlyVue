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

    it('可以设置position', (done) => {
        Vue.component('f-popover', Popover)
        const div = document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML = `
        <f-popover trigger="click" position="left">
          <template slot="content">
             弹出内容
          </template>
          <button>button</button>
        </f-popover>
        `
        let vm = new Vue({el: div})
        Promise.resolve().then(() => {
            console.log(vm.$el)
            done()
        })
    })
})