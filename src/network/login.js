import { request } from './http'
export function login (data) {
  return request({
    url: '/user/login',
    method: 'post',
    data
  })
}