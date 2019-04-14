import Vue from 'vue'
import Row from '@/grid/row'
import Col from '@/grid/col'
import { expect } from 'chai'
import { mount } from '@vue/test-utils'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Row', () => {
    it('存在.', () => {
        expect(Row).to.be.ok
    })
    xit('接受 gutter 属性', (done) => {
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
        let vm = new Vue({
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
    xit('接受 align 属性', () => {
      const wrapper = mount(Row,{
          propsData: {
              align: 'right'
          }
      })
      const vm = wrapper.vm;
      const rowElement = vm.$el
      expect(getComputedStyle(rowElement).justifyContent).to.equal('flex-end')
    })
})