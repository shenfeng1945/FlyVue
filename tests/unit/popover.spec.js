import Vue from 'vue'
import Popover from '@/components/popover/popover'
import { expect } from 'chai'
import { mount } from '@vue/test-utils'

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
        const wrapper = mount(Popover,{
            slots: {
                default: {template: `<button>button</button>`},
                content: '<div>弹出内容</div>'
            },
            propsData: {
                position: 'bottom'
            }
        })
        wrapper.find('button').trigger('click');
        const classes = wrapper.find('.content-wrapper').classes()
        const text = wrapper.find('.content-wrapper').text()
        expect(classes).to.include('position-bottom');
        expect(text).to.eq('弹出内容')
    })
    it('可以设置 trigger', () => {
        const wrapper = mount(Popover,{
            slots: {
                default: {template: `<button>button</button>`},
                content: '<div>弹出内容</div>'
            },
            propsData: {
                trigger: 'hover'
            }
        })
        
        expect(wrapper.find('.content-wrapper').element).to.not.exist;
        wrapper.find('.trigger-wrapper').trigger('mouseenter');
        expect(wrapper.find('.content-wrapper').element).to.be.exist;
    })
})