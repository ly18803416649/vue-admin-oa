import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Main.vue'
import LeaveSearch from '@/components/leave/LeaveSearch.vue'
import RiskInfoClaimQuery from '@/components/riskinfo/RiskInfoClaimQuery.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Home,
      children: [
        {
          path: '/riskinfo',
          name: 'LeaveSearch',
          component: LeaveSearch,
          icon: 'icon-wujiaoxing',
          level: 1,
          meta: {
            requiresAuth: true, // 是否需要登录
            search: false // 是否可搜索
          }
        },
        {
          path: '/RiskInfoClaimQuery',
          name: '典型案例分析',
          component: RiskInfoClaimQuery,
          icon: 'icon-wujiaoxing',
          level: 1,
          meta: {
            requiresAuth: true, // 是否需要登录
            search: false // 是否可搜索
          }
        }
      ]
    }
  ]
})
