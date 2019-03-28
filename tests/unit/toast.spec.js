import Vue from 'vue'
import Toast from '@/toast'
import chai, { expect } from 'chai'
import { mount } from '@vue/test-utils'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
chai.use(sinonChai)

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Toast', () => {
  it('存在', () => {
      expect(Toast).to.be.ok
  })
  it('接受 autoClose/autoCloseDelay 属性', (done) => {
      const wrapper = mount(Toast, {
          propsData: {
            autoClose: 1,
          }
      })
      const vm = wrapper.vm
      setTimeout(() => {
        expect(document.body.contains(vm.$el)).to.eq(false)
        done()
      },1500)
  })
  it('接受 buttonClose 属性', () => {
    const callback = sinon.fake()
    const wrapper = mount(Toast, {
        propsData: {
            buttonClose: {
                text: '关闭',
                callback
            }
        }
    })
    const vm = wrapper.vm
    wrapper.find('.close').trigger('click')
    const closeButton = vm.$el.querySelector('.close')
    closeButton.click()
    expect(closeButton.textContent).to.eq('关闭')
    expect(callback).to.have.been.called
  })
//   it('接受 enableHtml 属性', () => {
//     const Constructor = Vue.extend(Toast)
//     const vm = new Constructor({
//         propsData: {
//           enableHtml: true
//         }
//     })
//     vm.$slots.default = ['<p id="test">hello</p>']
//     vm.$mount()
//     expect(vm.$el.querySelector('#test')).to.be.ok
//     vm.$destroy()
//   })
//   it('接受 position 属性', () => {
//     const div = document.createElement('div')
//     document.body.appendChild(div)
//     const Constructor = Vue.extend(Toast)
//     const vm = new Constructor({
//         propsData: {
//           position: 'bottom',
//         }
//     }).$mount(div)
//     expect(vm.$el.classList.contains('position-bottom')).to.eq(true)
//     vm.$el.remove()
//     vm.$destroy()
//   })
})