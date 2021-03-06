import Vue from 'vue'

import App from './App.vue'
import Axios from 'axios'
import VueRouter from 'vue-router'


import 'bootstrap/dist/css/bootstrap.min.css'
import 'popper.js/dist/popper.min'

import Modal from './components/core/plugins/modal/ModalPlugin'
Vue.use(Modal)

global.jQuery = require('jquery')
require('bootstrap');

Vue.prototype.$http = Axios;
Vue.use(VueRouter);


// store
import Vuex from 'vuex'
Vue.use(Vuex)
import {storage} from './store/index'
const store = new Vuex.Store(storage);


Vue.config.productionTip = false

import { routes } from './routes/main'

const router = new VueRouter({
  mode: 'history',
  routes,
})

// global component
Vue.component('scroll-link', require('./components/core/ScrollLink').default);
Vue.component('dropdown', require('./components/core/Dropdown').default);
Vue.component('conditional-element', require('./components/core/ConditionalElement').default);
// Vue.component('modal', require('./components/core/Modal').default);

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
