import type { AxiosResponse, InternalAxiosRequestConfig, AxiosError } from 'axios'
import axios from 'axios'

const service = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL
})

service.interceptors.request.use(
  (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    return config
  },
  (error: any) => {
    Promise.reject(error)
  }
)

service.interceptors.response.use(
  async (response: AxiosResponse) => {
    return response.data
  },
  (error: AxiosError) => {
    return Promise.reject(error)
  }
)

export default service
