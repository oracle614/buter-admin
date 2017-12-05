import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

let routes = [
  {
    path: '/demo',
    name: 'demo',
    meta:{
      title:"演示页面"
    },
    component: resolve => require(['V/Demo'], resolve)
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    meta:{
      title:"数据总览"
    },
    component: resolve => require(['V/Dashboard'], resolve)
  },
  {
    path: '/app',
    name: 'app',
    meta:{
      title:"应用管理"
    },
    component: resolve => require(['V/application/Index'], resolve)
  },
  {
    path: '/resource',
    name: 'resource',
    meta:{
      title:"资源&文件"
    },
    component: resolve => require(['V/Resource'], resolve)
  },
  {
    path: '*',
    redirect: '/demo'
  }
]

export default new Router({
  routes
})