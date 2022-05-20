
import './App.less'
import React, { lazy, Suspense } from 'react'
import {
  useRoutes
} from 'react-router-dom'
import routes from './router'
// HashRouter BrowserRouter 分别对应 hash模式和history模式
// 将路由组件封装后按需引入 路由懒加载 如：我将A组件放在了当前目录的A文件下
// const A = lazy(() =>  import  ("./a") )
// 还需要用Suspense组件包裹所有定义 的route
lazy(() => { })

function App () {
  const element = useRoutes(routes)
  return (
    // 设置路由模式
    <Suspense fallback={<h1>....lajiazai</h1>}>
      <div>
        1231
        {/* navlink  */}
        {element}


      </div>
    </Suspense>
  )
}
export default App
