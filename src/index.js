import React from 'react'
import ReactDOM from 'react-dom/client'
import store from './store/store'
import App from './App'
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  // Rract.strictmode 需要开启严格模式的话需要删除该标签
  // Provider 将store对象分发给所有有需要的组件
  <Provider store={store}>
    <App />
  </Provider>
)
