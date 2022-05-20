import { configureStore, applyMiddleware, combineReducers } from '@reduxjs/toolkit'
import { countReducer } from "./reducers/count_reducer"
import { composeWithDevTools } from 'redux-devtools-extension' //引入react redux调试工具
import thunk from 'redux-thunk' //中间件 ，允许action传递一个函数给store

// 合并reducer 
const allReducer = combineReducers({
  he: countReducer
})
// 创建一个store实例  applyMiddleware使用中间件，将需要挂载的中间件作为函数的参数传入
const store = configureStore({ reducer: allReducer }, composeWithDevTools(applyMiddleware(thunk)))


export default store