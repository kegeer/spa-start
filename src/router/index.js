import Vue from 'vue'
import VueRouter from 'vue-router'
import { routes as app } from '../app'
import beforeEach from './beforeEach'

Vue.use(VueRouter)
const routes = [...app]
const router = new VueRouter({
  routes,
  linkActiveClass: 'active',
  mode: 'history'
})

router.beforeEach(beforeEach)
export default router
