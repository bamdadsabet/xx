import { App } from 'vue'

const AuthProvider = (app: App) => {
  interface IToken {
    access: string;
    refresh: string;
  }
  const storageToken = localStorage.getItem('token')
  const token: IToken | null = storageToken ? JSON.parse(storageToken) : null
  const isAuthenticated = ref<boolean>(!!token)
  const accessToken = ref<string>('123')
  const refreshToken = ref<string>(token?.refresh ?? '')

  app.provide('isAuthenticated', isAuthenticated)
  app.provide('accessToken', accessToken)
  app.provide('refreshToken', refreshToken)
}

export default AuthProvider
