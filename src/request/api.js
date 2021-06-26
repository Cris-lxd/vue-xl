import axios from 'axios'
import qs from 'qs'

const api = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 100000,
  // headers: [],
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
  }
})

api.interceptors.request.use((request) => {
  console.log(request, '请求拦截')
  console.log(qs.stringify(request.data), 'qs')
  request.data = qs.stringify(request.data) // formData 传值需要转成后台所认知的有效数据
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