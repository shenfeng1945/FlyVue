import Vue from 'vue'
import Tabs from '../../src/tabs/tabs'
import TabsNav from '../../src/tabs/tabs-nav'
import TabsContent from '../../src/tabs/tabs-content'
import TabsItem from '../../src/tabs/tabs-item'
import TabsPanel from '../../src/tabs/tabs-panel'
Vue.component('f-tabs', Tabs)
Vue.component('f-tabs-nav', TabsNav)
Vue.component('f-tabs-content', TabsContent)
Vue.component('f-tabs-item', TabsItem)
Vue.component('f-tabs-panel', TabsPanel)
Vue.config.productionTip = false
Vue.config.devtools = false
const expect = chai.expect;

describe('Toast', () => {
    let vm
    it('存在', () => {
        expect(Tabs).to.be.ok
    })
    it('接受 selected 属性', (done) => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML = `
      <f-tabs selected="tab3">
        <f-tabs-nav>
          <template slot="actions">
              <button>添加</button>
          </template>
          <f-tabs-item name="tab1">
              <f-icon name="settings"></f-icon>
              NBA
          </f-tabs-item>
          <f-tabs-item name="tab2" disabled>美女</f-tabs-item>
          <f-tabs-item name="tab3">财经</f-tabs-item>
        </f-tabs-nav>
        <f-tabs-content>
            <f-tabs-panel name="tab1">这是NBA的内容</f-tabs-panel>
            <f-tabs-panel name="tab3">这是财经的内容</f-tabs-panel>
            <f-tabs-panel name="tab2">这是美女的内容</f-tabs-panel>
        </f-tabs-content>
      </f-tabs>
      `
        vm = new Vue({
            el: div
        })
        vm.$nextTick(() => {
            const activeItem = vm.$el.querySelector('.tabs-item[data-name="tab3"]')
            const activePanel = vm.$el.querySelector('.tabs-panel')
            expect(activeItem.classList.contains('active')).to.eq(true)
            expect(activePanel.textContent).to.eq('这是财经的内容')
            done()
        })
    })
    it('接受 direction 属性', () => {
        // 待补充
    })

})