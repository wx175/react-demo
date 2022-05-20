
import { INCREMENT } from "../constant"
export function countReducer (preState, action) {

  const { type, data } = action
  console.log(preState, type, data)
  switch (type) {
    case INCREMENT:
      return preState + data
    default:
      return 0
  }
}