import Vue from 'vue'
import TabsNav from '../../src/tabs/tabs-nav'
Vue.config.productionTip = false
Vue.config.devtools = false
const expect = chai.expect;

describe('TabsNav', () => {
    it('存在', () => {
        expect(TabsNav).to.be.ok
    })
})