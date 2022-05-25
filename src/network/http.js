import axios from 'axios'

export function request (config) {
  const instance = axios.create({
    baseURL: 'http://82.156.168.244:10000/hrss',
    timeout: 20000,
    headers: {
      'token': localStorage.getItem('token')
    }
  })
  // 请求拦截
  instance.interceptors.request.use(config => {
    // do something before request is sent
    // if(store.state.admintoken&&store.state.admintoken!=''){
    // config.headers['token'] = 'Bearer ' + store.state.admintoken // 注意：要设置成这种格式

    if (localStorage.getItem('admintoken')) {
      config.headers['Authorization'] = localStorage.getItem('admintoken')
    }
    if (localStorage.getItem('token')) {
      config.headers['Authorization'] = localStorage.getItem('token')
    }
    return config
    // // 直接放行
    // return config
  }, err => {

  })

  // 响应拦截
  instance.interceptors.response.use(res => {
    return res.data ? res.data : res
  }, err => {

  })
  return instance(config)
}
