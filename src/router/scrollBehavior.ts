import type { RouterScrollBehavior } from 'vue-router'

export const scrollBehavior: RouterScrollBehavior = (to, from, savedPosition) => {
  return new Promise((resolve) => {
    if (savedPosition) {
      resolve(savedPosition)
    } else if (to.hash) {
      resolve({
        el: to.hash,
        behavior: 'smooth'
      })
    } else {
      resolve({ top: 0 })
    }
  })
}