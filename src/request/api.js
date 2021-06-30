import axios from 'axios'
import qs from 'qs'
import stroe from '@/store/index'

const api = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 100000,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
  }
})

api.interceptors.request.use((request) => {
  request.data = qs.stringify(request.data) // formData 传值需要转成后台所认知的有效数据
  request.headers.token = stroe.state.userinfo.token
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