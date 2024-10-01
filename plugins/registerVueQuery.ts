import { VueQueryPlugin, VueQueryPluginOptions } from '@tanstack/vue-query'
import { App } from 'vue'

export const registerVueQuery = (app: App) => {
  // FIXME AMIR
  const vueQueryPluginOptions: VueQueryPluginOptions = {
    queryClientConfig: {
      defaultOptions: {
        queries: {
          staleTime: 5 * 60 * 1000,
          retry: 1,
          refetchOnWindowFocus: false,
        },
      },
    },
  }

  app.use(VueQueryPlugin, vueQueryPluginOptions)
}
