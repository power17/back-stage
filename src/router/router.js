import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/dashboard'
    },
    {
      path: '/',
      component: () => import('../components/common/Home.vue'),
      children:[{
        path:'/dashboard',
        component:()=> import('../components/page/Dashboard.vue')

      }]

    }
  ]
})
