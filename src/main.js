import Vue from 'vue'
import Demos from './demos.vue'
import plugin from './plugin';

Vue.config.productionTip = false
Vue.use(plugin);

new Vue({
  render: h => h(Demos),
}).$mount('#app')
