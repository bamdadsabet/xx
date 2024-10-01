import api from '@/services/api'
import { useQuery, UseQueryReturnType } from '@tanstack/vue-query'
import { AxiosResponse } from 'node_modules/axios/index.cjs'

const useCheckExistence = (email: string):UseQueryReturnType<AxiosResponse<any, any>, Error> => {
  return useQuery({
    queryKey: ['checkExistence'],
    queryFn: () => api.post<any>('/authentication/check-existence', { email }),
  })
}

export default useCheckExistence
