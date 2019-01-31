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
        expect(Tabs).to.be.ok
    })
    it('接受 selected 属性', (done) => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML = `
      <g-tabs selected="tab3">
        <g-tabs-nav>
          <template slot="actions">
              <button>添加</button>
          </template>
          <g-tabs-item name="tab1">
              <g-icon name="settings"></g-icon>
              NBA
          </g-tabs-item>
          <g-tabs-item name="tab2" disabled>美女</g-tabs-item>
          <g-tabs-item name="tab3">财经</g-tabs-item>
        </g-tabs-nav>
        <g-tabs-content>
            <g-tabs-panel name="tab1">这是NBA的内容</g-tabs-panel>
            <g-tabs-panel name="tab3">这是财经的内容</g-tabs-panel>
            <g-tabs-panel name="tab2">这是美女的内容</g-tabs-panel>
        </g-tabs-content>
      </g-tabs>
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