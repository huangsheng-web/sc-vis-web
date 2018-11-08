import Vue from 'vue'
import Router from 'vue-router'

// 主要
import main from '@/components/main.vue'
import mainDefault from '@/views/index/components/default.vue'
// 登录
import login from '@/views/index/components/login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: main,
      children: [
        {path: '', component: mainDefault}
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/main',
      name: 'main',
      component: main,
      redirect: {name: 'default'},
      children: [
        {path: 'default', name: 'default', component: mainDefault}
      ]
    }
  ]
})
