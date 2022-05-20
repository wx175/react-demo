import { lazy } from 'react'
import { Navigate } from 'react-router-dom'
const Layout = lazy(() => import("../pages/layout/Layout"))
const Login = lazy(() => import("../pages/login/Login"))
const element = [
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/layout',
    element: <Layout />
  },
  {
    path: '/',
    element: <Navigate to='/login' />
  }
]

export default element