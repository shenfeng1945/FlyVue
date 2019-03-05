import Vue from 'vue'
import Demos from './demos.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(Demos),
}).$mount('#app')
