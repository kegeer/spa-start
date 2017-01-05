// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Root from './Root'
import router from './router'
import store from './store'
import { sync } from 'vuex-router-sync'

require('./includes')
sync(store, router)
/* eslint-disable no-new */
new Vue({
  store,
  router,
  el: '#app',
  render: h => h(Root)
})
