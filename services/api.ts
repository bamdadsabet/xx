import axios from 'axios'
import { useAuth } from '@/auth/hooks'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 500,
  headers: {
    'Content-Type': 'application/json',
  },
})

export default api
