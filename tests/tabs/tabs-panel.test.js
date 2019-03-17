import Vue from 'vue'
import TabsPanel from '../../src/tabs/tabs-panel'
Vue.config.productionTip = false
Vue.config.devtools = false
const expect = chai.expect;

describe('TabsPanel', () => {
    it('存在', () => {
        expect(TabsPanel).to.be.ok
    })
})