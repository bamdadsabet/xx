import { createRouter, createWebHistory } from 'vue-router/auto'
import { setupLayouts } from 'virtual:generated-layouts'
import { routes } from 'vue-router/auto-routes'
import { useAuth } from '@/auth/hooks'

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior () {
    return { top: 0 }
  },
  routes: setupLayouts(routes),
})

router.beforeEach(async (to, from, next) => {
  const { meta, name } = to
  const { isAuthenticated, removeTokens } = useAuth()

  if (name === 'AuthLogin') {
    removeTokens()
    next()
  }
  if (meta.requiresAuth && isAuthenticated) {
    return next({ name: 'AuthLogin' })
  }

  return next()
})

router.onError((err, to) => {
  if (err?.message?.includes?.('Failed to fetch dynamically imported module')) {
    if (!localStorage.getItem('vuetify:dynamic-reload')) {
      console.log('Reloading page to fix dynamic import error')
      localStorage.setItem('vuetify:dynamic-reload', 'true')
      location.assign(to.fullPath)
    } else {
      console.error('Dynamic import error, reloading page did not fix it', err)
    }
  } else {
    console.error(err)
  }
})

router.isReady().then(() => {
  localStorage.removeItem('vuetify:dynamic-reload')
})

export default router
