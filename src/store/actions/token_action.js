//  改文件门为count组件生成action对象
import { SETTOKEN, GETTOKEN, REMOVETOKEN } from "../constant"
export function setToken (data) {
  console.log(123)
  return { type: SETTOKEN, data }
}
export function getToken (data) {
  return { type: GETTOKEN, data }
}
export function removeToken (data) {
  return { type: REMOVETOKEN, data }
}
