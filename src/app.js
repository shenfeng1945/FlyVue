import Vue from 'vue';
import Button from './Button';
import Icon from './Icon';
import ButtonGroup from './button-group';

Vue.component('g-button',Button)
Vue.component('g-icon',Icon)
Vue.component('g-button-group',ButtonGroup)

new Vue({
    el: '#app',
    data: {
        loading: false
    }
})

import chai from 'chai';
const expect = chai.expect();
{
    const Constructor = Vue.extend(Button);
    const vm = new Constructor({
        propsData: {
            
        }
    })
}