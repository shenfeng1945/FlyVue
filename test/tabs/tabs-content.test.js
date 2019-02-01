import Vue from 'vue'
import TabsContent from '../../src/tabs/tabs-content'
Vue.config.productionTip = false
Vue.config.devtools = false
const expect = chai.expect;

describe('TabsContent', () => {
    it('存在', () => {
        expect(TabsContent).to.be.ok
    })
})