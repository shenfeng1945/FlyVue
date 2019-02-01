import Vue from 'vue';
import Button from './button/button';
import Icon from './Icon';
import ButtonGroup from './button/button-group';
import Input from './Input'
import Row from './row'
import Col from './col'
import Layout from './layout/layout'
import Footer from './layout/footer'
import Header from './layout/header'
import Sider from './layout/sider'
import Content from './layout/content'
import plugin from './plugin'
import Toast from './toast'
import Tabs from './tabs/tabs'
import TabsNav from './tabs/tabs-nav'
import TabsContent from './tabs/tabs-content'
import TabsItem from './tabs/tabs-item'
import TabsPanel from './tabs/tabs-panel'
import Popover from './popover/popover'


Vue.component('f-button',Button)
Vue.component('f-icon',Icon)
Vue.component('f-button-group',ButtonGroup)
Vue.component('f-input',Input)
Vue.component('f-row',Row)
Vue.component('f-col',Col)
Vue.component('f-layout',Layout)
Vue.component('f-footer',Footer)
Vue.component('f-header',Header)
Vue.component('f-sider',Sider)
Vue.component('f-content',Content)
Vue.component('f-toast',Toast)
Vue.component('f-tabs',Tabs)
Vue.component('f-tabs-nav',TabsNav)
Vue.component('f-tabs-content',TabsContent)
Vue.component('f-tabs-item',TabsItem)
Vue.component('f-tabs-panel',TabsPanel)
Vue.component('f-popover', Popover)
Vue.use(plugin)

new Vue({
    el: '#app',
    data: {
        selectedTab: 'tab3'
    },
    created(){
       
    },
    methods: {
       
    }
})
