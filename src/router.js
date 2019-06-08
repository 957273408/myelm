import Vue from 'vue'
import Router from 'vue-router'
import routes from './router/router'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    if (from.meta.keepAlive) {
      from.meta.savedPosition = document.body.scrollTop;
    }
    return { x: 0, y: to.meta.savedPosition || 0 }
  }
})
