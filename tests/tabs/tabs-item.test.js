import Vue from 'vue'
import Tabs from '../../src/tabs/tabs'
import TabsNav from '../../src/tabs/tabs-nav'
import TabsContent from '../../src/tabs/tabs-content'
import TabsItem from '../../src/tabs/tabs-item'
import TabsPanel from '../../src/tabs/tabs-panel'
Vue.component('g-tabs', Tabs)
Vue.component('g-tabs-nav', TabsNav)
Vue.component('g-tabs-content', TabsContent)
Vue.component('g-tabs-item', TabsItem)
Vue.component('g-tabs-panel', TabsPanel)
Vue.config.productionTip = false
Vue.config.devtools = false
const expect = chai.expect;

describe('Toast', () => {
    let vm
    it('存在', () => {
        expect(TabsItem).to.be.ok
    })
    it('接受 name 属性', () => {
       const Constructor = Vue.extend(TabsItem)
       vm = new Constructor({
           propsData: {
               name: 'hello'
           }
       }).$mount()
       expect(vm.$el.getAttribute('data-name')).to.eq('hello')
    })
    it('接受 disabled 属性', () => {
        const Constructor = Vue.extend(TabsItem)
        vm = new Constructor({
            propsData: {
                disabled: true
            }
        }).$mount()
        expect(vm.$el.classList.contains('disabled')).to.eq(true)
    })
   
   

})