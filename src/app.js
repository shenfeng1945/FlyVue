import Vue from 'vue';
import Button from './Button';
import Icon from './Icon';
import ButtonGroup from './button-group';
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


Vue.component('g-button',Button)
Vue.component('g-icon',Icon)
Vue.component('g-button-group',ButtonGroup)
Vue.component('g-input',Input)
Vue.component('g-row',Row)
Vue.component('g-col',Col)
Vue.component('g-layout',Layout)
Vue.component('g-footer',Footer)
Vue.component('g-header',Header)
Vue.component('g-sider',Sider)
Vue.component('g-content',Content)
Vue.component('g-toast',Toast)
Vue.component('g-tabs',Tabs)
Vue.component('g-tabs-nav',TabsNav)
Vue.component('g-tabs-content',TabsContent)
Vue.component('g-tabs-item',TabsItem)
Vue.component('g-tabs-panel',TabsPanel)
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
