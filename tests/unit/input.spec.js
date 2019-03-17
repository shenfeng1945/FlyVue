import Vue from 'vue'
import Input from '@/Input'
import chai, { expect } from 'chai'
import { mount } from '@vue/test-utils'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
chai.use(sinonChai)

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Input', () => {
    it('存在.', () => {
        expect(Input).to.be.ok
    })
    describe('props', () => {
        it('接受 value', () => {
            const wrapper = mount(Input, {
                propsData: {
                    value: '1243'
                }
            })
            const vm = wrapper.vm;
            const inputElement = vm.$el.querySelector('input');
            expect(inputElement.value).to.equal('1243')
        })
        it('接受 disabled', () => {
            const wrapper = mount(Input, {
                propsData: {
                    disabled: true
                }
            })
            const vm = wrapper.vm;
            const inputElement = vm.$el.querySelector('input');
            expect(inputElement.disabled).to.equal(true)
        })
        it('接受 readonly', () => {
            const wrapper = mount(Input, {
                propsData: {
                    readonly: true
                }
            })
            const vm = wrapper.vm;
            const inputElement = vm.$el.querySelector('input');
            expect(inputElement.readOnly).to.equal(true)
        })
        it('接受 error', () => {
            const wrapper = mount(Input, {
                propsData: {
                    error: 'error'
                }
            })
            const vm = wrapper.vm;
            const useElement = vm.$el.querySelector('use');
            expect(useElement.getAttribute('xlink:href')).to.equal('#i-error')
            expect(wrapper.find('.error-message').text()).to.equal('error')
        })
    })
    describe('事件', () => {
        
        it('支持 change/input/blur/focus 事件', () => {
            ['change', 'input', 'blur', 'focus'].forEach(eventName => {
                const wrapper = mount(Input)
                const vm = wrapper.vm;
                const callback = sinon.fake()
                vm.$on(eventName, callback)
                let event = new Event(eventName)
                Object.defineProperty(event, 'target', {
                    value: { value: 'hello' },
                    enumerable: true
                })
                let inputElement = vm.$el.querySelector('input')
                // 向指定的事件目标派发一个事件
                inputElement.dispatchEvent(event);
                // 测callback被触发，同时传的第一个值为event
                expect(callback).to.have.been.calledWith('hello');
            })
        })

    })
})