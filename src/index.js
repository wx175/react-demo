import React from 'react'
import ReactDOM from 'react-dom/client'
import store from './store/store'
import App from './App'
import 'antd/dist/antd.min.css'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  // Rract.strictmode 需要开启严格模式的话需要删除该标签
  // Provider 将store对象分发给所有有需要的组件
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
