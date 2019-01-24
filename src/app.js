import Vue from 'vue';
import Button from './Button';
import Icon from './Icon';

Vue.component('g-button',Button)
Vue.component('g-icon',Icon)

new Vue({
    el: '#app'
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