import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:8083',
  timeout: 100000,
  headers: []
})

api.interceptors.request.use((request) => {
  console.log(request, '请求拦截')
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