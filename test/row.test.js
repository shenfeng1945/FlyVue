import Vue from 'vue'
import Row from '../src/row'
import Col from '../src/col'

Vue.config.productionTip = false
Vue.config.devtools = false
const expect = chai.expect;

describe('Row', () => {
    const Constructor = Vue.extend(Row)
    let vm
    it('存在.', () => {
        expect(Row).to.be.ok
    })
    it('接受 gutter 属性', (done) => {
        // 默认代码是同步的，只要加了done，才表示可为异步。异步代码结束后，调用done表示异步执行完了
        Vue.component('f-row',Row)
        Vue.component('f-col',Col)
        const div = document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML = `
          <f-row gutter="20">
            <f-col span="12"></f-col>
            <f-col span="12"></f-col>
          </f-row>
        `
        vm = new Vue({
          el: div
        })
        Promise.resolve().then(() => {
            const row = vm.$el.querySelector('.row')
            expect(getComputedStyle(row).marginLeft).to.eq('-10px')
            expect(getComputedStyle(row).marginRight).to.eq('-10px')
            const cols = vm.$el.querySelectorAll('.col')
            expect(getComputedStyle(cols[0]).paddingRight).to.eq('10px')
            expect(getComputedStyle(cols[0]).paddingLeft).to.eq('10px')
            done()
            vm.$el.remove()
            vm.$destroy()
        })
    })
    it('接受 align 属性', () => {
      const div = document.createElement('div')
      document.body.appendChild(div)
      vm = new Constructor({
          propsData: {
              align: 'right'
          }
      }).$mount(div)
      const rowElement = vm.$el
      expect(getComputedStyle(rowElement).justifyContent).to.equal('flex-end')
      div.remove()
      vm.$destroy()
    })
})