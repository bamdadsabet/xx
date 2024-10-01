<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
  import { useAuth } from '@/auth/hooks'
  import { api } from './services'
  const router = useRouter()
  const { isAuthenticated, accessToken, refreshToken, setTokens, removeTokens } = useAuth()

  setTokens('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmY5M2RkNmNhNzY2OTMxMjQwNTQ0YWUiLCJlbWFpbCI6ImJhbWRhZHNhYmV0QGdtYWlsLmNvbSIsInV1aWQiOiIyNzAxMGNhMS04NGM1LTQyNjQtODlmMi02YjBjNjEwMDE0OTUiLCJyZWZyZXNoVXVpZCI6ImM2YWZlMDhkLTgyOGYtNDZmZS1iOTg0LTg3YWY2MmZmNmZjOCIsInRlbmFudCI6IjY2ZjkzZGQ2Y2E3NjY5MzEyNDA1NDRhZCIsImlhdCI6MTcyNzc2NDIzOSwiZXhwIjoxNzI4MzY5MDM5fQ.uFXAYu5tU2KnfA7qX3VGcPNL-0BDVNAcv_CR3QGQwWM', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmY5M2RkNmNhNzY2OTMxMjQwNTQ0YWUiLCJlbWFpbCI6ImJhbWRhZHNhYmV0QGdtYWlsLmNvbSIsInV1aWQiOiIyNzAxMGNhMS04NGM1LTQyNjQtODlmMi02YjBjNjEwMDE0OTUiLCJyZWZyZXNoVXVpZCI6ImM2YWZlMDhkLTgyOGYtNDZmZS1iOTg0LTg3YWY2MmZmNmZjOCIsInRlbmFudCI6IjY2ZjkzZGQ2Y2E3NjY5MzEyNDA1NDRhZCIsImlhdCI6MTcyNzc2NDIzOSwiZXhwIjoxNzI4NDU1NDM5fQ.GKmIpgF5oFMhF8xWh-lSmAIKlqGGp4TCiFF4EA4EnD4')

  api.interceptors.request.use(config => {
    console.log('config', config, isAuthenticated.value, accessToken)
    if (isAuthenticated) {
      config.headers.Authorization = `Bearer ${accessToken.value || refreshToken.value}`
    }
    return config
  })

  api.interceptors.response.use(config => config, async error => {
    console.log('error', error)
    if (error.status === 500 && error.config.url !== '/authentication/refresh') {
      console.log('im in ')
      accessToken.value = null
      const res = await api.post('/authentication/refresh')
      if (res.status === 200) {
        console.log('bye')
        setTokens(res.data.accessToken, res.data.refreshToken)
      } else if (res.status === 400 || res.status === 500) {
        console.log('hi')
        removeTokens()
        router.push('/login')
      }
    }
    return error
  })
</script>
