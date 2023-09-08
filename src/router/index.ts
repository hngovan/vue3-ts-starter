import { createRouter, createWebHistory, isNavigationFailure } from 'vue-router'
import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'
import { scrollBehavior } from './scrollBehavior'
import { nextTick } from 'vue'
import { useGlobalStore } from '@/stores/GlobalStore'
import MainRoutes from './MainRoutes'
import AuthRoutes from './AuthRoutes'

/** Vue Router */
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    MainRoutes,
    AuthRoutes,
    {
      path: '/:pathMatch(.*)*',
      component: () => import('@/views/pages/NotFound.vue')
    }
  ],
  scrollBehavior
})

// Global before guards
router.beforeEach(
  (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
    const globalStore = useGlobalStore()
    if (to.meta.requiresAuth) {
      return { path: '/auth/login' }
    }
    globalStore.setMessage('')
    next()
  }
)

// Global After Hooks
router.afterEach((to, from, failure) => {
  const globalStore = useGlobalStore()
  if (isNavigationFailure(failure)) return

  nextTick(() => {
    if (typeof to.name === 'string') {
      document.title = to.name
    }
  })
  globalStore.setLoading(false)
})

export default router
