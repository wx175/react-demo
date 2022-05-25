import React from 'react'
import { getToken } from '../store/actions/token_action'
import { connect } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { message } from 'antd'

export default connect(
  (state) => ({
    token: state.token,
  }),
  { getToken }
)(AuthComponent)

function AuthComponent({ token, children }) {
  if (token) {
    return <>{children}</>
  } else {
    message.error('你还未登录，请先登录')
    return <Navigate to="/login" replace />
  }
}
