
import { GETTOKEN, SETTOKEN, REMOVETOKEN } from "../constant"
const token = localStorage.getItem("token")
export function tokenReducer (preState, action) {
  const { type, data } = action
  console.log(preState, type, data)
  switch (type) {
    case GETTOKEN:
      return token
    case SETTOKEN:
      localStorage.setItem("token", data)
      return data
    case REMOVETOKEN:
      localStorage.removeItem("token")
      return token
    default:
      return token
  }
}