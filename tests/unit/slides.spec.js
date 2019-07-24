import chai, { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import Slides from '@/components/carousel/slides.vue'
import SlidesItem from '@/components/carousel/slides-item.vue'
import { mount } from '@vue/test-utils'
import Vue from 'vue'
chai.use(sinonChai)

describe('Slides', () => {
    it('存在', () => {
        expect(Slides).to.be.ok
    })

    it('接受 FlySlidesItem,默认展示第一个', (done) => {
        Vue.component('FSlidesItem', SlidesItem)
        const wrapper = mount(Slides, {
            slots: {
                default: `
                 <f-slides-item name="1">
                   <div class="box1">1</div>
                 </f-slides-item>
                 <f-slides-item name="2">
                   <div class="box2">2</div>
                 </f-slides-item>
                 <f-slides-item name="3">
                   <div class="box3">3</div>
                 </f-slides-item>
                `
            },
            propsData: {
                autoPlay: false
            }
        })
        setTimeout(() => {
            expect(wrapper.find('.box1').element).to.be.exist;
            done();
        })
    })

    it('selected是第几个，展示就是第几个', (done) => {
        Vue.component('FSlidesItem', SlidesItem)
        const wrapper = mount(Slides, {
            slots: {
                default: `
                 <f-slides-item name="1">
                   <div class="box1">1</div>
                 </f-slides-item>
                 <f-slides-item name="2">
                   <div class="box2">2</div>
                 </f-slides-item>
                 <f-slides-item name="3">
                   <div class="box3">3</div>
                 </f-slides-item>
                `
            },
            propsData: {
                autoPlay: false,
                selected: '2'
            }
        })
        setTimeout(() => {
            expect(wrapper.find('.box2').element).to.be.exist;
            done()
        })
    })

    it('点击第二个就展示第二个', (done) => {
        Vue.component('FSlidesItem', SlidesItem)
        const wrapper = mount(Slides, {
            slots: {
                default: `
                 <f-slides-item name="1">
                   <div class="box1">1</div>
                 </f-slides-item>
                 <f-slides-item name="2">
                   <div class="box2">2</div>
                 </f-slides-item>
                 <f-slides-item name="3">
                   <div class="box3">3</div>
                 </f-slides-item>
                `
            },
            propsData: {
                autoPlay: false,
                selected: '1'
            },
            listeners: {
                'update:selected': (index) => {
                    expect(index).to.eq('2')
                    done()
                }
            }
        })
        setTimeout(() => {
            wrapper.find('span[data-index="1"]').trigger('click');
            done()
        })
    })

    // --watch 仍存在bug，timerId没有clear掉，待解决
    it('会自动播放', (done) => {
        Vue.component('FSlidesItem', SlidesItem)
        const callback = sinon.fake()
        const wrapper = mount(Slides, {
            slots: {
                default: `
                 <f-slides-item name="1">
                   <div class="box1">1</div>
                 </f-slides-item>
                 <f-slides-item name="2">
                   <div class="box2">2</div>
                 </f-slides-item>
                 <f-slides-item name="3">
                   <div class="box3">3</div>
                 </f-slides-item>
                `
            },
            propsData: {
                autoPlayDelay: 500
            },
            listeners: {
                'update:selected': callback
            }
        })
        setTimeout(() => {
            expect(callback).to.have.been.called;
            expect(callback).to.have.been.calledWith('2');
            done()
        }, 600)
    })
    it('点击前进去下一张', (done) => {
        Vue.component('FSlidesItem', SlidesItem)
        const wrapper = mount(Slides, {
            slots: {
                default: `
                 <f-slides-item name="1">
                   <div class="box1">1</div>
                 </f-slides-item>
                 <f-slides-item name="2">
                   <div class="box2">2</div>
                 </f-slides-item>
                 <f-slides-item name="3">
                   <div class="box3">3</div>
                 </f-slides-item>
                `
            },
            propsData: {
                autoPlay: false,
                selected: '3'
            },
            listeners: {
                'update:selected': (index) => {
                    expect(index).to.eq('1')
                    done()
                }
            }
        })
        setTimeout(() => {
           wrapper.find('.f-slides-control-right').trigger('click')
        })
    })

})