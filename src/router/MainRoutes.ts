import type { RouteRecordRaw } from 'vue-router'

const MainRoutes: RouteRecordRaw = {
  path: '/main',
  meta: {
    requiresAuth: false
  },
  redirect: '/main',
  component: () => import('@/layouts/full/FullLayout.vue'),
  children: [
    {
      name: 'Dashboard',
      path: '/',
      component: () => import('@/views/dashboard/DashboardView.vue')
    },
    {
      name: 'Sample Page',
      path: '/sample-page',
      component: () => import('@/views/pages/SamplePage.vue')
    }
  ]
}

export default MainRoutes
