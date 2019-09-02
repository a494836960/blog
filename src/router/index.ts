import Vue from 'vue'
import Router from 'vue-router'
const _import = require('./import-' + process.env.NODE_ENV)

Vue.use(Router)
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/home',
      name: 'home',
      component: _import('Root.vue'),
      children: [{
        path: '/list',
        name: 'list',
        component: _import('article/article_list/list.vue')
      }, {
        path: '/detail/:id',
        name: 'detail',
        component: _import('article/article_content/detail.vue')
      }]
    }, {
      path: '*',
      redirect: { name: 'list' }
    }
  ]
})
