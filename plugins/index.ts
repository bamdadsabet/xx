import vuetify from './dls'
import pinia from '../stores'
import router from '../router'
import { registerVueQuery } from './registerVueQuery'
import type { App } from 'vue'
import 'vuetify/styles'

export function registerPlugins (app: App) {
  registerVueQuery(app)
  app
    .use(vuetify)
    .use(router)
    .use(pinia)
}
