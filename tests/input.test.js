import Vue from 'vue'
import Input from '../src/Input'

Vue.config.productionTip = false
Vue.config.devtools = false
const expect = chai.expect;

describe('Input', () => {
    it('存在.', () => {
        expect(Input).to.be.ok
    })
    describe('props', () => {
        const Constructor = Vue.extend(Input);
        let vm
        afterEach(() => {
            vm.$destroy()
        })
        it('接受 value', () => {
            vm = new Constructor({
                propsData: {
                    value: '1243'
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input');
            expect(inputElement.value).to.equal('1243')
        })
        it('接受 disabled', () => {
            vm = new Constructor({
                propsData: {
                    disabled: true
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input');
            expect(inputElement.disabled).to.equal(true)
        })
        it('接受 readonly', () => {
            vm = new Constructor({
                propsData: {
                    readonly: true
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input');
            expect(inputElement.readOnly).to.equal(true)
        })
        it('接受 error', () => {
            vm = new Constructor({
                propsData: {
                    error: 'error'
                }
            }).$mount()
            const useElement = vm.$el.querySelector('use');
            expect(useElement.getAttribute('xlink:href')).to.equal('#i-error')
            const errorMessage = vm.$el.querySelector('.error-message')
            expect(errorMessage.innerText).to.equal('error')
        })
    })
    describe('事件', () => {
        const Constructor = Vue.extend(Input);
        let vm
        afterEach(() => {
            vm.$destroy()
        })
        it('支持 change/input/blur/focus 事件', () => {
            ['change', 'input', 'blur', 'focus'].forEach(eventName => {
                vm = new Constructor({}).$mount()
                const callback = sinon.fake()
                vm.$on(eventName, callback)
                let event = new Event(eventName)
                Object.defineProperty(event,'target',{
                    value: {value: 'hello'},
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