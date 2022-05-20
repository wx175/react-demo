//  改文件门为count组件生成action对象
import { INCREMENT } from "../constant"
export function createIncrement (data) {
  return { type: INCREMENT, data }
}
export function createAsnycIncrement (data, time) {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(createIncrement(data))
    }, time)
  }
}