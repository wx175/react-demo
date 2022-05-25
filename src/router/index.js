import { lazy } from 'react'
import { Navigate } from 'react-router-dom'
import Layout from "../pages/layout/Layout"
import Login from "../pages/login/Login"
// 鉴权组件
import AuthComponent from '../component/AuthComponent.jsx'
const LayoutHome = lazy(() => import("../pages/layout/Home"))
const LayoutArticle = lazy(() => import("../pages/layout/Article"))
const LayoutPublish = lazy(() => import("../pages/layout/Publish"))
const element = [
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/layout',
    element: (
      <AuthComponent>
        <Layout />
      </AuthComponent>),
    children: [
      { path: "home", element: <LayoutHome /> },
      { path: "article", element: <LayoutArticle /> },
      { path: "publish", element: <LayoutPublish /> },
      { path: "", element: <Navigate to='home' replace /> }
    ]

  },
  {
    path: '/',
    element: <Navigate to='/login' replace />
  }
]

export default element