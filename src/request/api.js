import axios from 'axios'
import qs from 'qs'
import { getStorage } from '@/utils/SessionUtil'



const api = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: 100000,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
  },
  withCredentials:true
})

api.interceptors.request.use((request) => {
  console.log(request.headers, '111111')
  // request.headers.post['Content-Type'] = 'multipart/form-data'
  request.data = qs.stringify(request.data) // formData 传值需要转成后台所认知的有效数据
  request.headers.Token = getStorage('token')
  console.log(request.headers, '22222')
  return request
}, (error) => {
  console.log(error, '请求错误')
  return Promise.reject(error)
})

api.interceptors.response.use((response) => {
  console.log(response, '返回拦截')
  return response
}, (error) => {
  console.log(error)
  return Promise.reject(error)
})

export default api
