import type { RouteRecordRaw } from 'vue-router'

const AuthRoutes: RouteRecordRaw = {
  path: '/auth',
  component: () => import('@/layouts/blank/BlankLayout.vue'),
  meta: {
    requiresAuth: false
  },
  children: [
    {
      name: 'Login',
      path: '/auth/login',
      component: () => import('@/views/auth/LoginView.vue')
    },
    {
      name: 'Register',
      path: '/auth/register',
      component: () => import('@/views/auth/RegisterView.vue')
    }
  ]
}

export default AuthRoutes
