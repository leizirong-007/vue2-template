import axios from 'axios'

// axios实例
const service = axios.create({
  baseURL: appConfig.apiURL,
  timeout: 60000,
  headers: { 'Content-Type': 'application/json;charset=UTF-8' }
})

// 请求拦截器
service.interceptors.request.use(
  (config) => {

    if (config.method?.toUpperCase() === 'GET') {
      config.params = { ...config.params, t: new Date().getTime() }
    }

    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  response => {
    if (response.status !== 200) {
      return Promise.reject(new Error(response.statusText || 'Error'))
    }

    const res = response.data
    // 响应成功
    if (res.code === 0) {
      return res
    }


    // 没有权限，如：未登录、登录过期等，需要跳转到登录页
    if (res.code === 401) {
      location.reload()
    }

    return Promise.reject(new Error(res.msg || 'Error'))
  },
  error => {
    return Promise.reject(error)
  }
)

// 导出 axios 实例
export default service
