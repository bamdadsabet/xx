import { api } from '@/services'

const CHECKEXITANCE = 'checkExistence'
const checkExistence = (email: string) => {
  return api.post<any>('/authentication/check-existence', { email })
}

export default checkExistence

export { CHECKEXITANCE }
