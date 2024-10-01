import { registerPlugins } from '@/plugins'
import App from './App.vue'
import { createApp } from 'vue'
import AuthProvider from './auth/Providers/AuthProvider'
import '@/styles/tailwind.scss'

const app = createApp(App)

AuthProvider(app)

registerPlugins(app)

app.mount('#app')
