import { inject, Ref } from 'vue'

type TSetToken = (access: string, refresh: string) => void

type TUseAuth = () => {
  isAuthenticated: Ref<boolean>
  accessToken: Ref<string| null>
  refreshToken: Ref<string | null>
  removeTokens: () => void
  setTokens: TSetToken
}

const useAuth: TUseAuth = () => {
  const isAuthenticated = inject<Ref<boolean>>('isAuthenticated')
  const accessToken = inject<Ref<string| null>>('accessToken')
  const refreshToken = inject<Ref<string | null>>('refreshToken')

  if (!isAuthenticated || !accessToken || !refreshToken) {
    throw new Error('useAth should be with in AuthProvider')
  }

  const removeTokens = () => {
    isAuthenticated.value = false
    accessToken.value = null
    refreshToken.value = null
    localStorage.removeItem('tokens')
  }

  const setTokens = (access: string, refresh: string) => {
    accessToken.value = access
    refreshToken.value = refresh
    localStorage.setItem('token', JSON.stringify({
      access,
      refresh,
    }))
  }

  return { isAuthenticated, accessToken, refreshToken, removeTokens, setTokens }
}

export default useAuth
